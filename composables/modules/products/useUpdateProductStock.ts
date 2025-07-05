import { ref } from 'vue'
import { products_api } from '@/api_factory/modules/products'

export const useUpdateProductStock = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const updateProductStock = async (productId: string, quantity: number) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await products_api.$_update_product_stock(productId, quantity)
      success.value = true
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to update product stock'
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
    updateProductStock,
    resetState,
  }
}