import { ref } from 'vue'
import { 
  labcast_api, 
  type LabCast
} from '@/api_factory/modules/labcast'

export const useSearchEpisodes = () => {
    const loading = ref(false)
    const error = ref(null)
    const episodes = ref<LabCast[]>([])
    const searchTerm = ref('')
  
    const searchEpisodes = async (term: string, limit: number = 20) => {
      loading.value = true
      error.value = null
      searchTerm.value = term
  
      try {
        const response = await labcast_api.$_search_episodes(term, limit)
        episodes.value = response.data.data || response.data
        return response.data
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to search episodes'
        throw err
      } finally {
        loading.value = false
      }
    }
  
    const resetState = () => {
      loading.value = false
      error.value = null
      episodes.value = []
      searchTerm.value = ''
    }
  
    return {
      loading,
      error,
      episodes,
      searchTerm,
      searchEpisodes,
      resetState,
    }
  }
  