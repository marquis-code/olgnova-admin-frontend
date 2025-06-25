import { ref } from 'vue'
import { publications_api, type ReviewPublicationData, type Publication } from '@/api_factory/modules/publications'

export const useRejectPublication = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const publicationData = ref<Publication | null>(null)

  const rejectPublication = async (publicationId: string, reviewData: ReviewPublicationData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await publications_api.$_reject_publication(publicationId, reviewData)
      success.value = true
      publicationData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to reject publication'
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
    rejectPublication,
    resetState,
  }
}