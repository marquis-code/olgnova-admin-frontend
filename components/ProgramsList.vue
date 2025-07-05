<template>
    <div class="space-y-6">
      <!-- Header Actions -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div class="relative w-full sm:w-auto">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search programs..."
              class="w-full sm:w-80 pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
            />
          </div>
          <select
            v-model="statusFilter"
            class="w-full sm:w-auto px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
          >
            <option value="">All Status</option>
            <option value="draft">Draft</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <button
          @click="openCreateModal"
          class="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Plus class="w-5 h-5" />
          <span>New Program</span>
        </button>
      </div>
  
      <!-- Programs Grid -->
      <div v-if="!loading && filteredPrograms.length > 0" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <TransitionGroup
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 -translate-y-4"
          tag="div"
          class="contents"
        >
          <div
            v-for="program in filteredPrograms"
            :key="program._id"
            class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <!-- Program Header -->
            <div class="relative h-48 bg-gradient-to-br from-indigo-400 to-blue-500 overflow-hidden">
              <img
                v-if="program.image"
                :src="program.image"
                :alt="program.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center"
              >
                <GraduationCap class="w-16 h-16 text-white opacity-80" />
              </div>
              
              <!-- Status Badge -->
              <div class="absolute top-4 right-4">
                <span
                  :class="[
                    'px-3 py-1 text-xs font-semibold rounded-full',
                    getStatusColor(program.status)
                  ]"
                >
                  {{ formatStatus(program.status) }}
                </span>
              </div>
  
              <!-- Applications Count -->
              <div class="absolute bottom-4 left-4">
                <div class="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Users class="w-4 h-4" />
                  <span>{{ program.applicationsCount || 0 }} applications</span>
                </div>
              </div>
            </div>
  
            <!-- Program Content -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <div class="flex-1">
                  <h3 class="font-bold text-lg text-slate-900 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                    {{ program.title }}
                  </h3>
                  <p class="text-sm text-indigo-600 font-medium mt-1">{{ program.category }}</p>
                </div>
                
                <!-- Action Buttons -->
                <div class="flex items-center space-x-1 ml-3">
                  <button
                    @click="viewProgram(program)"
                    class="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    title="View Details"
                  >
                    <Eye class="w-4 h-4" />
                  </button>
                  <button
                    @click="editProgram(program)"
                    class="p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
                    title="Edit Program"
                  >
                    <Edit class="w-4 h-4" />
                  </button>
                  <button
                    @click="getRegistrationLink(program._id)"
                    class="p-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                    title="Get Registration Link"
                  >
                    <Link class="w-4 h-4" />
                  </button>
                  <button
                    @click="confirmDelete(program)"
                    class="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                    title="Delete Program"
                  >
                    <Trash2 class="w-4 h-4" />
                  </button>
                </div>
              </div>
  
              <p class="text-sm text-slate-600 mb-4 line-clamp-3">
                {{ program.description }}
              </p>
  
              <!-- Program Details -->
              <div class="space-y-3 mb-4">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-500 flex items-center space-x-1">
                    <Clock class="w-4 h-4" />
                    <span>Duration:</span>
                  </span>
                  <span class="font-medium text-slate-700">{{ program.duration }}</span>
                </div>
                
                <div v-if="program.focusAreas?.length" class="flex items-start justify-between text-sm">
                  <span class="text-slate-500">Focus Areas:</span>
                  <div class="flex flex-wrap gap-1 max-w-40">
                    <span
                      v-for="area in program.focusAreas.slice(0, 2)"
                      :key="area"
                      class="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs"
                    >
                      {{ area }}
                    </span>
                    <span
                      v-if="program.focusAreas.length > 2"
                      class="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
                    >
                      +{{ program.focusAreas.length - 2 }}
                    </span>
                  </div>
                </div>
              </div>
  
              <!-- Images Preview -->
              <div v-if="program.images?.length" class="flex space-x-2 mb-4">
                <div
                  v-for="(image, index) in program.images.slice(0, 3)"
                  :key="index"
                  class="w-12 h-12 rounded-lg overflow-hidden border border-slate-200"
                >
                  <img
                    :src="image"
                    :alt="`Program image ${index + 1}`"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  v-if="program.images.length > 3"
                  class="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium"
                >
                  +{{ program.images.length - 3 }}
                </div>
              </div>
  
              <!-- Footer -->
              <div class="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                <span class="flex items-center space-x-1">
                  <Calendar class="w-3 h-3" />
                  <span>Created {{ formatDate(program.createdAt) }}</span>
                </span>
                <span class="flex items-center space-x-1">
                  <FileText class="w-3 h-3" />
                  <span>{{ program.formFields?.length || 0 }} form fields</span>
                </span>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
  
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-16">
        <div class="relative">
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200"></div>
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent absolute top-0 left-0"></div>
        </div>
      </div>
  
      <!-- Empty State -->
      <div v-else-if="filteredPrograms.length === 0" class="text-center py-16">
        <div class="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
          <GraduationCap class="w-12 h-12 text-slate-400" />
        </div>
        <h3 class="text-lg font-semibold text-slate-900 mb-2">No programs found</h3>
        <p class="text-slate-500 mb-6">
          {{ searchQuery || statusFilter ? 'Try adjusting your search or filters' : 'Get started by creating your first program' }}
        </p>
        <button
          v-if="!searchQuery && !statusFilter"
          @click="openCreateModal"
          class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 inline-flex items-center space-x-2"
        >
          <Plus class="w-5 h-5" />
          <span>Create Program</span>
        </button>
      </div>
  
      <!-- Modals -->
      <Modal v-model="showModal" title="Create Program" size="4xl" :close-on-outside="false">
        <ProgramForm
          :program="selectedProgram"
          @save="handleSaveProgram"
          @cancel="closeModal"
        />
      </Modal>
  
      <Modal v-model="showViewModal" title="Program Details" size="4xl">
        <ProgramView
          v-if="viewedProgram"
          :program="viewedProgram"
          @close="closeViewModal"
          @edit="editFromView"
        />
      </Modal>
  
      <Modal v-model="showLinkModal" title="Registration Link" size="md">
        <div v-if="registrationLink" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Registration Link</label>
            <div class="flex items-center space-x-2">
              <input
                :value="registrationLink"
                readonly
                class="flex-1 px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-sm"
              />
              <button
                @click="copyToClipboard(registrationLink)"
                class="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-1"
              >
                <Copy class="w-4 h-4" />
                <span>Copy</span>
              </button>
            </div>
          </div>
          <div class="flex justify-end space-x-3">
            <button
              @click="showLinkModal = false"
              class="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
  
      <ConfirmModal
        v-model="showDeleteModal"
        title="Delete Program"
        :message="`Are you sure you want to delete '${programToDelete?.title}'? This action cannot be undone and will also delete all applications.`"
        confirm-text="Delete"
        confirm-class="bg-red-600 hover:bg-red-700"
        @confirm="handleDeleteConfirm"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import {
    Search, Plus, Eye, Edit, Link, Trash2, GraduationCap,
    Users, Clock, Calendar, FileText, Copy
  } from 'lucide-vue-next'
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
  const showViewModal = ref(false)
  const showLinkModal = ref(false)
  const showDeleteModal = ref(false)
  const selectedProgram = ref(null)
  const viewedProgram = ref(null)
  const programToDelete = ref(null)
  
  // Load programs on mount
  onMounted(() => {
    getPrograms()
  })
  
  // Computed
  const filteredPrograms = computed(() => {
    let filtered = programs.value || []
    
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(program =>
        program.title?.toLowerCase().includes(query) ||
        program.description?.toLowerCase().includes(query) ||
        program.category?.toLowerCase().includes(query)
      )
    }
    
    if (statusFilter.value) {
      filtered = filtered.filter(program => program.status === statusFilter.value)
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
  
  const viewProgram = (program: any) => {
    viewedProgram.value = program
    showViewModal.value = true
  }
  
  const editFromView = (program: any) => {
    closeViewModal()
    editProgram(program)
  }
  
  const closeModal = () => {
    showModal.value = false
    selectedProgram.value = null
  }
  
  const closeViewModal = () => {
    showViewModal.value = false
    viewedProgram.value = null
  }
  
  const confirmDelete = (program: any) => {
    programToDelete.value = program
    showDeleteModal.value = true
  }
  
  const handleDeleteConfirm = async () => {
    if (programToDelete.value) {
      try {
        await softDeleteProgram(programToDelete.value._id)
        await getPrograms()
        showDeleteModal.value = false
        programToDelete.value = null
      } catch (error) {
        console.error('Error deleting program:', error)
      }
    }
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
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (error) {
      console.error('Error copying to clipboard:', error)
    }
  }
  
  // Utility functions
  const getStatusColor = (status: string) => {
    const colors = {
      'draft': 'bg-gray-100 text-gray-800',
      'active': 'bg-green-100 text-green-800',
      'inactive': 'bg-red-100 text-red-800',
      'completed': 'bg-blue-100 text-blue-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }
  
  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  </script>
  