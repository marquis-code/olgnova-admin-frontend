import { ref } from 'vue'
import { products_api, type ProductStatus, type Product } from '@/api_factory/modules/products'

export const useGetProductsByStatus = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const products = ref<Product[]>([])

  const getProductsByStatus = async (status: ProductStatus, limit?: number) => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_products_by_status(status, limit)
      products.value = response.data.products || response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch products by status'
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
    getProductsByStatus,
    resetState
  }
}