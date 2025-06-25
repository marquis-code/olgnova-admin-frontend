import { ref } from 'vue'
import { forms_api, type SubmitFormData, type FormSubmission } from '@/api_factory/modules/forms'

export const useSubmitForm = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const submissionData = ref<FormSubmission | null>(null)

  const submitForm = async (formId: string, submissionPayload: SubmitFormData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await forms_api.$_submit_form(formId, submissionPayload)
      success.value = true
      submissionData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to submit form'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    submissionData.value = null
  }

  return {
    loading,
    error,
    success,
    submissionData,
    submitForm,
    resetState,
  }
}