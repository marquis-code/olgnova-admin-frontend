import { ref } from 'vue'
import { programs_api } from '@/api_factory/modules/programs'

export const useGetRegistrationLink = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const registrationLink = ref<string | null>(null)

  const getRegistrationLink = async (programId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await programs_api.$_get_registration_link(programId)
      registrationLink.value = response.data.registrationLink
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to get registration link'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    registrationLink.value = null
  }

  return {
    loading,
    error,
    registrationLink,
    getRegistrationLink,
    resetState,
  }
}