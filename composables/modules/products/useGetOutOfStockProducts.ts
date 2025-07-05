import { ref } from 'vue'
import { products_api, type Product } from '@/api_factory/modules/products'

export const useGetOutOfStockProducts = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const outOfStockProducts = ref<Product[]>([])

  const getOutOfStockProducts = async (limit?: number) => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_out_of_stock_products(limit)
      outOfStockProducts.value = response.data.products || response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch out-of-stock products'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    outOfStockProducts.value = []
  }

  return {
    loading,
    error,
    outOfStockProducts,
    getOutOfStockProducts,
    resetState,
  }
}
