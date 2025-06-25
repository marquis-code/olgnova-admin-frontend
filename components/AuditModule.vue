<template>
    <div class="space-y-6">
      <!-- Header Actions -->
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search audit logs..."
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            v-model="actionFilter"
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Actions</option>
            <option value="create">Create</option>
            <option value="update">Update</option>
            <option value="delete">Delete</option>
            <option value="soft_delete">Soft Delete</option>
            <option value="restore">Restore</option>
            <option value="login">Login</option>
            <option value="logout">Logout</option>
          </select>
          <select
            v-model="resourceFilter"
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Resources</option>
            <option value="user">Users</option>
            <option value="blog">Blogs</option>
            <option value="publication">Publications</option>
            <option value="program">Programs</option>
            <option value="team_member">Team Members</option>
            <option value="form">Forms</option>
            <option value="enquiry">Enquiries</option>
            <option value="subscription">Subscriptions</option>
          </select>
        </div>
        <button
          @click="refreshAuditLogs"
          class="px-4 py-2 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-lg hover:from-slate-700 hover:to-gray-700 transition-all duration-200 flex items-center space-x-2"
        >
          <Icon name="heroicons:arrow-path" class="w-4 h-4" />
          <span>Refresh</span>
        </button>
      </div>
  
      <!-- Audit Logs Timeline -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="p-6">
          <h3 class="text-lg font-semibold text-slate-800 mb-6">Activity Timeline</h3>
          
          <div class="space-y-4">
            <div
              v-for="log in filteredAuditLogs"
              :key="log._id"
              class="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <!-- Action Icon -->
              <div :class="[
                'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                getActionColor(log.action)
              ]">
                <Icon :name="getActionIcon(log.action)" class="w-5 h-5 text-white" />
              </div>
              
              <!-- Log Details -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <span class="font-medium text-slate-900">{{ getActionLabel(log.action) }}</span>
                    <span class="text-slate-500">•</span>
                    <span class="text-slate-600 capitalize">{{ log.resource.replace('_', ' ') }}</span>
                    <span v-if="log.resourceId" :class="[
                      'px-2 py-1 text-xs font-medium rounded-full',
                      'bg-slate-100 text-slate-700'
                    ]">
                      ID: {{ log.resourceId.slice(-8) }}
                    </span>
                  </div>
                  <span class="text-sm text-slate-500">{{ formatDate(log.createdAt) }}</span>
                </div>
                
                <p class="text-sm text-slate-600 mb-2">
                  User <span class="font-medium">{{ log.userId.slice(-8) }}</span> 
                  {{ getActionDescription(log.action, log.resource) }}
                </p>
                
                <!-- Metadata -->
                <div v-if="log.metadata" class="flex items-center space-x-4 text-xs text-slate-500">
                  <span v-if="log.metadata.ip">IP: {{ log.metadata.ip }}</span>
                  <span v-if="log.metadata.method">{{ log.metadata.method }}</span>
                  <span v-if="log.metadata.url">{{ log.metadata.url }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center py-12">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div>
        </div>
        
        <!-- Empty State -->
        <div v-else-if="filteredAuditLogs?.length === 0" class="text-center py-12">
          <Icon name="heroicons:shield-check" class="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p class="text-slate-500">No audit logs found</p>
        </div>
      </div>
  
      <!-- Load More Button -->
      <div v-if="hasMore" class="text-center">
        <button
          @click="loadMore"
          :disabled="loadingMore"
          class="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
        >
          {{ loadingMore ? 'Loading...' : 'Load More' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useGetAuditLogs } from '@/composables/modules/audit/useGetAuditLogs'
  import Icon from '~/components/Icon.vue'
  
  // Composables
  const { auditLogs, loading, getAuditLogs } = useGetAuditLogs()
  
  // Reactive data
  const searchQuery = ref('')
  const actionFilter = ref('')
  const resourceFilter = ref('')
  const loadingMore = ref(false)
  const hasMore = ref(true)
  const currentLimit = ref(50)
  
  // Load audit logs on mount
  onMounted(() => {
    getAuditLogs(currentLimit.value)
  })
  
  // Computed
  const filteredAuditLogs = computed(() => {
    let filtered = auditLogs.value
  
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(log => 
        log.resource?.toLowerCase().includes(query) ||
        log.action?.toLowerCase().includes(query) ||
        log.userId?.toLowerCase().includes(query)
      )
    }
  
    if (actionFilter.value) {
      filtered = filtered.filter(log => log.action === actionFilter.value)
    }
  
    if (resourceFilter.value) {
      filtered = filtered.filter(log => log.resource === resourceFilter.value)
    }
  
    return filtered
  })
  
  // Methods
  const refreshAuditLogs = () => {
    currentLimit.value = 50
    getAuditLogs(currentLimit.value)
  }
  
  const loadMore = async () => {
    loadingMore.value = true
    currentLimit.value += 50
    await getAuditLogs(currentLimit.value)
    loadingMore.value = false
  }
  
  const getActionColor = (action: string) => {
    const colors = {
      create: 'bg-green-500',
      update: 'bg-blue-500',
      delete: 'bg-red-500',
      soft_delete: 'bg-orange-500',
      restore: 'bg-purple-500',
      login: 'bg-emerald-500',
      logout: 'bg-gray-500'
    }
    return colors[action as keyof typeof colors] || 'bg-slate-500'
  }
  
  const getActionIcon = (action: string) => {
    const icons = {
      create: 'heroicons:plus',
      update: 'heroicons:pencil',
      delete: 'heroicons:trash',
      soft_delete: 'heroicons:archive-box',
      restore: 'heroicons:arrow-path',
      login: 'heroicons:arrow-right-on-rectangle',
      logout: 'heroicons:arrow-left-on-rectangle'
    }
    return icons[action as keyof typeof icons] || 'heroicons:information-circle'
  }
  
  const getActionLabel = (action: string) => {
    const labels = {
      create: 'Created',
      update: 'Updated',
      delete: 'Deleted',
      soft_delete: 'Archived',
      restore: 'Restored',
      login: 'Logged In',
      logout: 'Logged Out'
    }
    return labels[action as keyof typeof labels] || action
  }
  
  const getActionDescription = (action: string, resource: string) => {
    const resourceName = resource.replace('_', ' ')
    const descriptions = {
      create: `created a new ${resourceName}`,
      update: `updated a ${resourceName}`,
      delete: `permanently deleted a ${resourceName}`,
      soft_delete: `archived a ${resourceName}`,
      restore: `restored a ${resourceName}`,
      login: 'signed into the system',
      logout: 'signed out of the system'
    }
    return descriptions[action as keyof typeof descriptions] || `performed ${action} on ${resourceName}`
  }
  
  const formatDate = (date: string) => {
    const now = new Date()
    const logDate = new Date(date)
    const diffInMinutes = Math.floor((now.getTime() - logDate.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    if (diffInMinutes < 10080) return `${Math.floor(diffInMinutes / 1440)}d ago`
    
    return logDate.toLocaleDateString()
  }
  </script>
  