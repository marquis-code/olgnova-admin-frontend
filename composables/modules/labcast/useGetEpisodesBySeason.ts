import { ref } from 'vue'
import { 
  labcast_api, 
  type LabCast
} from '@/api_factory/modules/labcast'

export const useGetEpisodesBySeason = () => {
    const loading = ref(false)
    const error = ref(null)
    const episodes = ref<LabCast[]>([])
  
    const getEpisodesBySeason = async (season: number) => {
      loading.value = true
      error.value = null
  
      try {
        const response = await labcast_api.$_get_episodes_by_season(season)
        episodes.value = response.data
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to fetch episodes by season'
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
      getEpisodesBySeason,
      resetState,
    }
  }