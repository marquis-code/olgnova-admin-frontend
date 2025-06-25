<template>
    <div class="space-y-6">
      <!-- Header Actions -->
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search programs..."
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            v-model="statusFilter"
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
        >
          <Icon name="heroicons:plus" class="w-4 h-4" />
          <span>New Program</span>
        </button>
      </div>
  
      <!-- Programs Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="program in filteredPrograms"
          :key="program._id"
          class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200"
        >
          <!-- Program Header -->
          <div class="h-32 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center relative">
            <Icon name="heroicons:academic-cap" class="w-12 h-12 text-white opacity-80" />
            <div class="absolute top-4 right-4">
              <span :class="[
                'px-2 py-1 text-xs font-semibold rounded-full',
                program.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              ]">
                {{ program.isActive ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
          
          <!-- Program Content -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-slate-900 line-clamp-2">{{ program.title }}</h3>
              <div class="flex items-center space-x-1 ml-2">
                <button
                  @click="editProgram(program)"
                  class="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
                >
                  <Icon name="heroicons:pencil" class="w-4 h-4" />
                </button>
                <button
                  @click="getRegistrationLink(program._id)"
                  class="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50"
                  title="Get Registration Link"
                >
                  <Icon name="heroicons:link" class="w-4 h-4" />
                </button>
                <button
                  @click="deleteProgram(program._id)"
                  class="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
                >
                  <Icon name="heroicons:trash" class="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p class="text-sm text-slate-600 mb-4 line-clamp-3">{{ program.description }}</p>
            
            <div class="space-y-2 mb-4">
              <div class="flex items-center justify-between text-sm">
                <span class="text-slate-500">Duration:</span>
                <span class="font-medium text-slate-700">{{ program.duration }}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-slate-500">Price:</span>
                <span class="font-medium text-slate-700">${{ program.price || 'Free' }}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-slate-500">Applications:</span>
                <span class="font-medium text-slate-700">{{ program.applications?.length || 0 }}</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between text-sm text-slate-500">
              <span>Created: {{ formatDate(program.createdAt) }}</span>
              <div class="flex items-center space-x-2">
                <Icon name="heroicons:calendar" class="w-4 h-4" />
                <span>{{ formatDate(program.startDate) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
  
      <!-- Empty State -->
      <div v-else-if="filteredPrograms.length === 0" class="text-center py-12">
        <Icon name="heroicons:academic-cap" class="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p class="text-slate-500">No programs found</p>
      </div>
  
      <!-- Create/Edit Program Modal -->
      <Modal v-model="showModal" title="Program Details" size="xl">
        <ProgramForm
          :program="selectedProgram"
          @save="handleSaveProgram"
          @cancel="closeModal"
        />
      </Modal>
  
      <!-- Registration Link Modal -->
      <Modal v-model="showLinkModal" title="Registration Link" size="md">
        <div v-if="registrationLink" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Registration Link</label>
            <div class="flex items-center space-x-2">
              <input
                :value="registrationLink"
                readonly
                class="flex-1 px-3 py-2 border border-slate-300 rounded-lg bg-slate-50"
              />
              <button
                @click="copyToClipboard(registrationLink)"
                class="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Icon name="heroicons:clipboard" class="w-4 h-4" />
              </button>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              @click="showLinkModal = false"
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
  import { useGetPrograms } from '@/composables/modules/programs/useGetPrograms'
  import { useCreateProgram } from '@/composables/modules/programs/useCreateProgram'
  import { useUpdateProgram } from '@/composables/modules/programs/useUpdateProgram'
  import { useSoftDeleteProgram } from '@/composables/modules/programs/useSoftDeleteProgram'
  import { useGetRegistrationLink } from '@/composables/modules/programs/useGetRegistrationLink'
  
  // Composables
  const { programs, loading, getPrograms } = useGetPrograms()
  const { createProgram } = useCreateProgram()
  const { updateProgram } = useUpdateProgram()
  const { softDeleteProgram } = useSoftDeleteProgram()
  const { registrationLink, getRegistrationLink: fetchRegistrationLink } = useGetRegistrationLink()
  
  // Reactive data
  const searchQuery = ref('')
  const statusFilter = ref('')
  const showModal = ref(false)
  const showLinkModal = ref(false)
  const selectedProgram = ref(null)
  
  // Load programs on mount
  onMounted(() => {
    getPrograms()
  })
  
  // Computed
  const filteredPrograms = computed(() => {
    let filtered = programs.value
  
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(program => 
        program.title?.toLowerCase().includes(query) ||
        program.description?.toLowerCase().includes(query)
      )
    }
  
    if (statusFilter.value) {
      filtered = filtered.filter(program => 
        statusFilter.value === 'active' ? program.isActive : !program.isActive
      )
    }
  
    return filtered
  })
  
  // Methods
  const openCreateModal = () => {
    selectedProgram.value = null
    showModal.value = true
  }
  
  const editProgram = (program: any) => {
    selectedProgram.value = program
    showModal.value = true
  }
  
  const closeModal = () => {
    showModal.value = false
    selectedProgram.value = null
  }
  
  const handleSaveProgram = async (programData: any) => {
    try {
      if (selectedProgram.value) {
        await updateProgram(selectedProgram.value._id, programData)
      } else {
        await createProgram(programData)
      }
      await getPrograms()
      closeModal()
    } catch (error) {
      console.error('Error saving program:', error)
    }
  }
  
  const getRegistrationLink = async (programId: string) => {
    try {
      await fetchRegistrationLink(programId)
      showLinkModal.value = true
    } catch (error) {
      console.error('Error getting registration link:', error)
    }
  }
  
  const deleteProgram = async (programId: string) => {
    if (confirm('Are you sure you want to delete this program?')) {
      try {
        await softDeleteProgram(programId)
        await getPrograms()
      } catch (error) {
        console.error('Error deleting program:', error)
      }
    }
  }
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (error) {
      console.error('Error copying to clipboard:', error)
    }
  }
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString()
  }
  </script>
  