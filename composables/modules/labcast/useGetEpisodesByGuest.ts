import { ref } from 'vue'
import { 
  labcast_api, 
  type LabCast
} from '@/api_factory/modules/labcast'

export const useGetEpisodesByGuest = () => {
    const loading = ref(false)
    const error = ref(null)
    const episodes = ref<LabCast[]>([])
  
    const getEpisodesByGuest = async (guestName: string) => {
      loading.value = true
      error.value = null
  
      try {
        const response = await labcast_api.$_get_episodes_by_guest(guestName)
        episodes.value = response.data.data || response.data
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to fetch episodes by guest'
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
      getEpisodesByGuest,
      resetState,
    }
  }
  