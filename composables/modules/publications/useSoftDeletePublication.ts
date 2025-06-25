import { ref } from 'vue'
import { publications_api } from '@/api_factory/modules/publications'

export const useSoftDeletePublication = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const softDeletePublication = async (publicationId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await publications_api.$_soft_delete_publication(publicationId)
      success.value = true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to delete publication'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
  }

  return {
    loading,
    error,
    success,
    softDeletePublication,
    resetState,
  }
}