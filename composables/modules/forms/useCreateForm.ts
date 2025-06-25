import { ref } from 'vue'
import { forms_api, type CreateFormData, type Form } from '@/api_factory/modules/forms'

export const useCreateForm = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const formData = ref<Form | null>(null)

  const createForm = async (formPayload: CreateFormData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await forms_api.$_create_form(formPayload)
      success.value = true
      formData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to create form'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    formData.value = null
  }

  return {
    loading,
    error,
    success,
    formData,
    createForm,
    resetState,
  }
}