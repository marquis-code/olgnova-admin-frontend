import { ref } from 'vue'
import { programs_api, type Program } from '@/api_factory/modules/programs'

export const useDeactivateProgram = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const programData = ref<Program | null>(null)

  const deactivateProgram = async (programId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await programs_api.$_deactivate_program(programId)
      success.value = true
      programData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to deactivate program'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    programData.value = null
  }

  return {
    loading,
    error,
    success,
    programData,
    deactivateProgram,
    resetState,
  }
}