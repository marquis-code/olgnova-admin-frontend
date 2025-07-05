
import { ref } from 'vue'
import { 
  labcast_api, 
  type LabCast
} from '@/api_factory/modules/labcast'

export const useDeleteLabCast = () => {
    const loading = ref(false)
    const error = ref(null)
    const success = ref(false)
  
    const deleteLabCast = async (labcastId: string) => {
      loading.value = true
      error.value = null
      success.value = false
  
      try {
        const response = await labcast_api.$_delete_labcast(labcastId)
        success.value = true
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to delete LabCast episode'
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
      deleteLabCast,
      resetState,
    }
  }