import { ref } from 'vue'
import { 
  labcast_api, 
  type LabCast
} from '@/api_factory/modules/labcast'

export const useGetEpisodeBySeasonAndEpisode = () => {
    const loading = ref(false)
    const error = ref(null)
    const episode = ref<LabCast | null>(null)
  
    const getEpisodeBySeasonAndEpisode = async (season: number, episodeNumber: number) => {
      loading.value = true
      error.value = null
  
      try {
        const response = await labcast_api.$_get_episode_by_season_and_episode(season, episodeNumber)
        episode.value = response.data
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to fetch episode'
        throw err
      } finally {
        loading.value = false
      }
    }
  
    const resetState = () => {
      loading.value = false
      error.value = null
      episode.value = null
    }
  
    return {
      loading,
      error,
      episode,
      getEpisodeBySeasonAndEpisode,
      resetState,
    }
  }