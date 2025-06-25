<template>
    <div class="space-y-6">
      <!-- Header Actions -->
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search enquiries..."
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            v-model="statusFilter"
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
        <button
          @click="refreshEnquiries"
          class="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
        >
          <Icon name="heroicons:arrow-path" class="w-4 h-4" />
          <span>Refresh</span>
        </button>
      </div>
  
      <!-- Enquiries Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="enquiry in filteredEnquiries"
          :key="enquiry._id"
          class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
          @click="viewEnquiry(enquiry)"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Icon name="heroicons:envelope" class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-slate-900">{{ enquiry.name }}</h3>
                <p class="text-sm text-slate-500">{{ enquiry.email }}</p>
              </div>
            </div>
            <span :class="[
              'px-2 py-1 text-xs font-semibold rounded-full',
              enquiry.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              enquiry.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
              'bg-green-100 text-green-800'
            ]">
              {{ enquiry.status }}
            </span>
          </div>
          
          <div class="mb-4">
            <h4 class="font-medium text-slate-800 mb-2">{{ enquiry.subject }}</h4>
            <p class="text-sm text-slate-600 line-clamp-3">{{ enquiry.message }}</p>
          </div>
          
          <div class="flex items-center justify-between text-sm text-slate-500">
            <span>{{ formatDate(enquiry.createdAt) }}</span>
            <div class="flex items-center space-x-2">
              <button
                @click.stop="deleteEnquiry(enquiry._id)"
                class="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
              >
                <Icon name="heroicons:trash" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
  
      <!-- Empty State -->
      <div v-else-if="filteredEnquiries.length === 0" class="text-center py-12">
        <Icon name="heroicons:envelope-open" class="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p class="text-slate-500">No enquiries found</p>
      </div>
  
      <!-- Enquiry Detail Modal -->
      <Modal v-model="showDetailModal" title="Enquiry Details" size="lg">
        <div v-if="selectedEnquiry" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <p class="text-slate-900">{{ selectedEnquiry.name }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <p class="text-slate-900">{{ selectedEnquiry.email }}</p>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Subject</label>
            <p class="text-slate-900">{{ selectedEnquiry.subject }}</p>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <p class="text-slate-900 whitespace-pre-wrap">{{ selectedEnquiry.message }}</p>
          </div>
          
          <div class="flex items-center justify-between pt-4 border-t border-slate-200">
            <span class="text-sm text-slate-500">
              Received: {{ formatDate(selectedEnquiry.createdAt) }}
            </span>
            <button
              @click="closeDetailModal"
              class="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useGetEnquiries } from '@/composables/modules/enquires/useGetEnquiries'
  import { useSoftDeleteEnquiry } from '@/composables/modules/enquires/useSoftDeleteEnquiry'
  import Modal from '@/components/Modal.vue'
  import Icon from '@/components/Icon.vue'
  
  // Composables
  const { enquiries, loading, getEnquiries } = useGetEnquiries()
  const { softDeleteEnquiry } = useSoftDeleteEnquiry()
  
  // Reactive data
  const searchQuery = ref('')
  const statusFilter = ref('')
  const showDetailModal = ref(false)
  const selectedEnquiry = ref(null)
  
  // Load enquiries on mount
  onMounted(() => {
    getEnquiries()
  })
  
  // Computed
  const filteredEnquiries = computed(() => {
    let filtered = enquiries.value
  
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(enquiry => 
        enquiry.name?.toLowerCase().includes(query) ||
        enquiry.email?.toLowerCase().includes(query) ||
        enquiry.subject?.toLowerCase().includes(query)
      )
    }
  
    if (statusFilter.value) {
      filtered = filtered.filter(enquiry => enquiry.status === statusFilter.value)
    }
  
    return filtered
  })
  
  // Methods
  const refreshEnquiries = () => {
    getEnquiries()
  }
  
  const viewEnquiry = (enquiry: any) => {
    selectedEnquiry.value = enquiry
    showDetailModal.value = true
  }
  
  const closeDetailModal = () => {
    showDetailModal.value = false
    selectedEnquiry.value = null
  }
  
  const deleteEnquiry = async (enquiryId: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      try {
        await softDeleteEnquiry(enquiryId)
        await getEnquiries()
      } catch (error) {
        console.error('Error deleting enquiry:', error)
      }
    }
  }
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString()
  }
  </script>
  