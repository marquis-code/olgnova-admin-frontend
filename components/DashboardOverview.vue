<template>
    <div class="space-y-6">
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          v-for="stat in stats"
          :key="stat.title"
          :title="stat.title"
          :value="stat.value"
          :change="stat.change"
          :icon="stat.icon"
          :color="stat.color"
        />
      </div>
  
      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Activity Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 class="text-lg font-semibold text-slate-800 mb-4">Activity Overview</h3>
          <div class="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <div class="text-center">
              <Icon name="heroicons:chart-bar" class="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <p class="text-slate-600">Activity chart will be rendered here</p>
            </div>
          </div>
        </div>
  
        <!-- Recent Activities -->
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 class="text-lg font-semibold text-slate-800 mb-4">Recent Activities</h3>
          <div class="space-y-4">
            <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start space-x-3">
              <div :class="['w-2 h-2 rounded-full mt-2', activity.color]"></div>
              <div class="flex-1">
                <p class="text-sm text-slate-800">{{ activity.description }}</p>
                <p class="text-xs text-slate-500 mt-1">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Quick Actions -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 class="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button
            v-for="action in quickActions"
            :key="action.name"
            @click="action.action"
            class="flex flex-col items-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <Icon :name="action.icon" class="w-8 h-8 text-slate-600 group-hover:text-blue-600 mb-2" />
            <span class="text-sm font-medium text-slate-700 group-hover:text-blue-700">{{ action.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import { computed, ref } from 'vue'
  import { useGetUsers } from '@/composables/modules/users/useGetUsers'
  import { useGetEnquiries } from '@/composables/modules/enquires/useGetEnquiries'
  import { useGetSubscriptions } from '@/composables/modules/subscriptions/useGetSubscriptions'
  import { useGetBlogs } from '@/composables/modules/blogs/useGetBlogs'
  
  // Composables
  const { users, getUsers } = useGetUsers()
  const { enquiries, getEnquiries } = useGetEnquiries()
  const { subscriptions, getSubscriptions } = useGetSubscriptions()
  const { blogs, getBlogs } = useGetBlogs()
  
  // Load data on mount
  onMounted(async () => {
    await Promise.all([
      getUsers(),
      getEnquiries(),
      getSubscriptions(),
      getBlogs()
    ])
  })
  
  // Computed stats
  const stats = computed(() => [
    {
      title: 'Total Users',
      value: users?.value?.length?.toString(),
      change: '+12%',
      icon: 'heroicons:users',
      color: 'blue'
    },
    {
      title: 'Enquiries',
      value: enquiries?.value?.length?.toString(),
      change: '+5%',
      icon: 'heroicons:envelope',
      color: 'green'
    },
    {
      title: 'Subscribers',
      value: subscriptions?.value?.length?.toString(),
      change: '+18%',
      icon: 'heroicons:newspaper',
      color: 'purple'
    },
    {
      title: 'Blog Posts',
      value: blogs?.value?.length?.toString(),
      change: '+8%',
      icon: 'heroicons:pencil-square',
      color: 'orange'
    }
  ])
  
  // Recent activities (mock data for now)
  const recentActivities = ref([
    {
      id: 1,
      description: 'New user registration: john.doe@example.com',
      time: '2 minutes ago',
      color: 'bg-green-500'
    },
    {
      id: 2,
      description: 'Blog post "AI in Education" was published',
      time: '15 minutes ago',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      description: 'New enquiry received from contact form',
      time: '1 hour ago',
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      description: 'Program "Data Science Bootcamp" was updated',
      time: '2 hours ago',
      color: 'bg-purple-500'
    }
  ])
  
  // Quick actions
  const quickActions = [
    {
      name: 'Add User',
      icon: 'heroicons:user-plus',
      action: () => console.log('Add user')
    },
    {
      name: 'New Blog',
      icon: 'heroicons:plus-circle',
      action: () => console.log('New blog')
    },
    {
      name: 'Create Form',
      icon: 'heroicons:document-plus',
      action: () => console.log('Create form')
    },
    {
      name: 'Add Program',
      icon: 'heroicons:academic-cap',
      action: () => console.log('Add program')
    },
    {
      name: 'Team Member',
      icon: 'heroicons:user-group',
      action: () => console.log('Add team member')
    },
    {
      name: 'Publication',
      icon: 'heroicons:document-text',
      action: () => console.log('Add publication')
    }
  ]
  </script>
  