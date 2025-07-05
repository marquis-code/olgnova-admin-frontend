import { ref } from 'vue'
import { products_api, type Product } from '@/api_factory/modules/products'

export const useGetFeaturedProducts = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const featuredProducts = ref<Product[]>([])

  const getFeaturedProducts = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_featured_products()
      featuredProducts.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch featured products'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    featuredProducts.value = []
  }

  return {
    loading,
    error,
    featuredProducts,
    getFeaturedProducts,
    resetState,
  }
}