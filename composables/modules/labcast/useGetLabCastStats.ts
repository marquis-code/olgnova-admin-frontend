import { ref } from 'vue'
import { 
  labcast_api, 
  type LabCastStats,
} from '@/api_factory/modules/labcast'


export const useGetLabCastStats = () => {
    const loading = ref(false)
    const error = ref(null)
    const stats = ref<LabCastStats | null>(null)
  
    const getStats = async () => {
      loading.value = true
      error.value = null
  
      try {
        const response = await labcast_api.$_get_stats()
        stats.value = response.data
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to fetch LabCast stats'
        throw err
      } finally {
        loading.value = false
      }
    }
  
    const resetState = () => {
      loading.value = false
      error.value = null
      stats.value = null
    }
  
    return {
      loading,
      error,
      stats,
      getStats,
      resetState,
    }
  }