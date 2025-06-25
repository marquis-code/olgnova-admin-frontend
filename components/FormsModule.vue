<template>
  <div class="space-y-6">
    <!-- Header Actions -->
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search forms..."
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
        class="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
      >
        <Icon name="heroicons:plus" class="w-4 h-4" />
        <span>Create Form</span>
      </button>
    </div>

    <!-- Forms Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div
        v-for="form in filteredForms"
        :key="form._id"
        class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200"
      >
        <!-- Form Header -->
        <div class="h-24 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center relative">
          <Icon name="heroicons:clipboard-document-list" class="w-8 h-8 text-white opacity-80" />
          <div class="absolute top-3 right-3">
            <span :class="[
              'px-2 py-1 text-xs font-semibold rounded-full',
              form.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            ]">
              {{ form.isActive ? 'Active' : 'Inactive' }}
            </span>
          </div>
        </div>
        
        <!-- Form Content -->
        <div class="p-6">
          <div class="flex items-start justify-between mb-3">
            <h3 class="font-semibold text-slate-900 line-clamp-2">{{ form.title }}</h3>
            <div class="flex items-center space-x-1 ml-2">
              <button
                @click="editForm(form)"
                class="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
              >
                <Icon name="heroicons:pencil" class="w-4 h-4" />
              </button>
              <button
                @click="viewSubmissions(form)"
                class="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50"
                title="View Submissions"
              >
                <Icon name="heroicons:eye" class="w-4 h-4" />
              </button>
              <button
                @click="deleteForm(form._id)"
                class="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
              >
                <Icon name="heroicons:trash" class="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <p class="text-sm text-slate-600 mb-4 line-clamp-2">{{ form.description }}</p>
          
          <div class="space-y-2 mb-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500">Fields:</span>
              <span class="font-medium text-slate-700">{{ form.fields?.length || 0 }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500">Submissions:</span>
              <span class="font-medium text-slate-700">{{ form.submissionsCount || 0 }}</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between text-sm text-slate-500">
            <span>Created: {{ formatDate(form.createdAt) }}</span>
            <div class="flex items-center space-x-2">
              <Icon name="heroicons:calendar" class="w-4 h-4" />
              <span>{{ formatDate(form.updatedAt) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600"></div>
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredForms.length === 0" class="text-center py-12">
      <Icon name="heroicons:clipboard-document-list" class="w-12 h-12 text-slate-400 mx-auto mb-4" />
      <p class="text-slate-500">No forms found</p>
    </div>

    <!-- Create/Edit Form Modal -->
    <Modal v-model="showModal" title="Form Builder" size="xl">
      <FormBuilder
        :form="selectedForm"
        @save="handleSaveForm"
        @cancel="closeModal"
      />
    </Modal>

    <!-- Submissions Modal -->
    <Modal v-model="showSubmissionsModal" title="Form Submissions" size="xl">
      <FormSubmissions
        v-if="selectedForm"
        :form="selectedForm"
        @close="closeSubmissionsModal"
      />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useGetForms } from '@/composables/modules/forms/useGetForms'
import { useCreateForm } from '@/composables/modules/forms/useCreateForm'
import { useUpdateForm } from '@/composables/modules/forms/useUpdateForm'
import { useSoftDeleteForm } from '@/composables/modules/forms/useSoftDeleteForm'

// Composables
const { forms, loading, getForms } = useGetForms()
const { createForm } = useCreateForm()
const { updateForm } = useUpdateForm()
const { softDeleteForm } = useSoftDeleteForm()

// Reactive data
const searchQuery = ref('')
const statusFilter = ref('')
const showModal = ref(false)
const showSubmissionsModal = ref(false)
const selectedForm = ref(null)

// Load forms on mount
onMounted(() => {
  getForms()
})

// Computed
const filteredForms = computed(() => {
  let filtered = forms.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(form => 
      form.title?.toLowerCase().includes(query) ||
      form.description?.toLowerCase().includes(query)
    )
  }

  if (statusFilter.value) {
    filtered = filtered.filter(form => 
      statusFilter.value === 'active' ? form.isActive : !form.isActive
    )
  }

  return filtered
})

// Methods
const openCreateModal = () => {
  selectedForm.value = null
  showModal.value = true
}

const editForm = (form: any) => {
  selectedForm.value = form
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedForm.value = null
}

const viewSubmissions = (form: any) => {
  selectedForm.value = form
  showSubmissionsModal.value = true
}

const closeSubmissionsModal = () => {
  showSubmissionsModal.value = false
  selectedForm.value = null
}

const handleSaveForm = async (formData: any) => {
  try {
    if (selectedForm.value) {
      await updateForm(selectedForm.value._id, formData)
    } else {
      await createForm(formData)
    }
    await getForms()
    closeModal()
  } catch (error) {
    console.error('Error saving form:', error)
  }
}

const deleteForm = async (formId: string) => {
  if (confirm('Are you sure you want to delete this form?')) {
    try {
      await softDeleteForm(formId)
      await getForms()
    } catch (error) {
      console.error('Error deleting form:', error)
    }
  }
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}
</script>
