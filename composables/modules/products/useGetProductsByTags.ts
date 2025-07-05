import { ref } from 'vue'
import { products_api, type Product } from '@/api_factory/modules/products'

export const useGetProductsByTags = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const products = ref<Product[]>([])

  const getProductsByTags = async (tags: string[], limit?: number) => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_products_by_tags(tags, limit)
      products.value = response.data.products || response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch products by tags'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    products.value = []
  }

  return {
    loading,
    error,
    products,
    getProductsByTags,
    resetState,
  }
}