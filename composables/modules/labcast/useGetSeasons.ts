import { ref } from 'vue'
import { 
  labcast_api, 
  type SeasonData
} from '@/api_factory/modules/labcast'

export const useGetSeasons = () => {
    const loading = ref(false)
    const error = ref(null)
    const seasons = ref<SeasonData[]>([])
  
    const getSeasons = async () => {
      loading.value = true
      error.value = null
  
      try {
        const response = await labcast_api.$_get_seasons()
        seasons.value = response.data
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to fetch seasons'
        throw err
      } finally {
        loading.value = false
      }
    }
  
    const resetState = () => {
      loading.value = false
      error.value = null
      seasons.value = []
    }
  
    return {
      loading,
      error,
      seasons,
      getSeasons,
      resetState,
    }
  }