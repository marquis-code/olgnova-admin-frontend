import { ref } from 'vue'
import { products_api, type PopularTag } from '@/api_factory/modules/products'

export const useGetPopularTags = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const popularTags = ref<PopularTag[]>([])

  const getPopularTags = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_popular_tags()
      popularTags.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch popular tags'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    popularTags.value = []
  }

  return {
    loading,
    error,
    popularTags,
    getPopularTags,
    resetState,
  }
}