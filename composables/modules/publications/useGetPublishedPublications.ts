import { ref } from 'vue'
import { publications_api, type Publication } from '@/api_factory/modules/publications'

export const useGetPublishedPublications = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const publications = ref<Publication[]>([])

  const getPublishedPublications = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await publications_api.$_get_published_publications()
      publications.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch published publications'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    publications.value = []
  }

  return {
    loading,
    error,
    publications,
    getPublishedPublications,
    resetState,
  }
}