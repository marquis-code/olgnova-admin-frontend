import { ref } from 'vue'
import { products_api, type ProductCategory, type Product } from '@/api_factory/modules/products'

export const useGetProductsByCategory = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const products = ref<Product[]>([])

  const getProductsByCategory = async (category: ProductCategory) => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_products_by_category(category)
      products.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch products by category'
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
    getProductsByCategory,
    resetState,
  }
}