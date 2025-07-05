import { ref } from 'vue'
import { products_api, type Product } from '@/api_factory/modules/products'

export const useGetInStockProducts = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const inStockProducts = ref<Product[]>([])

  const getInStockProducts = async (limit?: number) => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_in_stock_products(limit)
      inStockProducts.value = response.data.products || response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch in-stock products'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    inStockProducts.value = []
  }

  return {
    loading,
    error,
    inStockProducts,
    getInStockProducts,
    resetState,
  }
}
