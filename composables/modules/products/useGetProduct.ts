import { ref } from 'vue'
import { products_api, type Product } from '@/api_factory/modules/products'

export const useGetProduct = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const product = ref<Product | null>(null)

  const getProduct = async (productId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_product(productId)
      product.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch product'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    product.value = null
  }

  return {
    loading,
    error,
    product,
    getProduct,
    resetState,
  }
}