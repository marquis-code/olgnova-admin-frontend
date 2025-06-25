import { ref } from 'vue'
import { forms_api } from '@/api_factory/modules/forms'

export const useHardDeleteForm = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const hardDeleteForm = async (formId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await forms_api.$_hard_delete_form(formId)
      success.value = true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to permanently delete form'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
  }

  return {
    loading,
    error,
    success,
    hardDeleteForm,
    resetState,
  }
}