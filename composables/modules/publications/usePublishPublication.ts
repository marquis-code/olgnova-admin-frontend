import { ref } from 'vue'
import { publications_api, type Publication } from '@/api_factory/modules/publications'

export const usePublishPublication = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const publicationData = ref<Publication | null>(null)

  const publishPublication = async (publicationId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await publications_api.$_publish_publication(publicationId)
      success.value = true
      publicationData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to publish publication'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    publicationData.value = null
  }

  return {
    loading,
    error,
    success,
    publicationData,
    publishPublication,
    resetState,
  }
}