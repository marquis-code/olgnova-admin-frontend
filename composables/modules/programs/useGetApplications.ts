import { ref } from 'vue'
import { programs_api, type ProgramApplication } from '@/api_factory/modules/programs'

export const useGetApplications = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const applications = ref<ProgramApplication[]>([])

  const getApplications = async (programId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await programs_api.$_get_applications(programId)
      applications.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch applications'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    applications.value = []
  }

  return {
    loading,
    error,
    applications,
    getApplications,
    resetState,
  }
}