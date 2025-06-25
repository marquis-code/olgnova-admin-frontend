import { ref } from 'vue'
import { programs_api, type SubmitApplicationData, type ProgramApplication } from '@/api_factory/modules/programs'

export const useSubmitApplication = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const applicationData = ref<ProgramApplication | null>(null)

  const submitApplication = async (token: string, applicationPayload: SubmitApplicationData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await programs_api.$_submit_application(token, applicationPayload)
      success.value = true
      applicationData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to submit application'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    applicationData.value = null
  }

  return {
    loading,
    error,
    success,
    applicationData,
    submitApplication,
    resetState,
  }
}