import { ref } from 'vue'
import { products_api, type Product } from '@/api_factory/modules/products'

export const useGetNewArrivals = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const newArrivals = ref<Product[]>([])

  const getNewArrivals = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await products_api.$_get_new_arrivals()
      newArrivals.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch new arrivals'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    newArrivals.value = []
  }

  return {
    loading,
    error,
    newArrivals,
    getNewArrivals,
    resetState,
  }
}