import { ref } from 'vue'
import { programs_api, type Program, type ProgramQueryParams } from '@/api_factory/modules/programs'

export const useGetPrograms = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const programs = ref<Program[]>([])

  const getPrograms = async (params?: ProgramQueryParams) => {
    loading.value = true
    error.value = null

    try {
      const response = await programs_api.$_get_programs(params)
      programs.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch programs'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    programs.value = []
  }

  return {
    loading,
    error,
    programs,
    getPrograms,
    resetState,
  }
}