import { ref } from 'vue'
import { products_api, type Product } from '@/api_factory/modules/products'

export const useSearchProducts = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const searchResults = ref<Product[]>([])

  const searchProducts = async (searchTerm: string, limit: number = 20) => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_search_products(searchTerm, limit)
      searchResults.value = response.data.products || response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to search products'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    searchResults.value = []
  }

  return {
    loading,
    error,
    searchResults,
    searchProducts,
    resetState,
  }
}