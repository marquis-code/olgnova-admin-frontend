import { ref } from 'vue'
import { publications_api, type Publication } from '@/api_factory/modules/publications'

export const useGetPublication = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const publication = ref<Publication | null>(null)

  const getPublication = async (publicationId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await publications_api.$_get_publication(publicationId)
      publication.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch publication'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    publication.value = null
  }

  return {
    loading,
    error,
    publication,
    getPublication,
    resetState,
  }
}