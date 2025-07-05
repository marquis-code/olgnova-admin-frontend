import { ref } from 'vue'
import { 
  labcast_api, 
  type LabCast
} from '@/api_factory/modules/labcast'

export const useGetLatestEpisodes = () => {
    const loading = ref(false)
    const error = ref(null)
    const episodes = ref<LabCast[]>([])
  
    const getLatestEpisodes = async (limit: number = 10) => {
      loading.value = true
      error.value = null
  
      try {
        const response = await labcast_api.$_get_latest_episodes(limit)
        episodes.value = response.data.data || response.data
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to fetch latest episodes'
        throw err
      } finally {
        loading.value = false
      }
    }
  
    const resetState = () => {
      loading.value = false
      error.value = null
      episodes.value = []
    }
  
    return {
      loading,
      error,
      episodes,
      getLatestEpisodes,
      resetState,
    }
  }
  