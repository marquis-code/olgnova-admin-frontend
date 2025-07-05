// composables/products/useUpdateProduct.ts
import { ref } from 'vue'
import { products_api, type UpdateProductData, type Product } from '@/api_factory/modules/products'

export const useUpdateProduct = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const updatedProduct = ref<Product | null>(null)

  const updateProduct = async (productId: string, updateData: UpdateProductData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await products_api.$_update_product(productId, updateData)
      success.value = true
      updatedProduct.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to update product'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    updatedProduct.value = null
  }

  return {
    loading,
    error,
    success,
    updatedProduct,
    updateProduct,
    resetState,
  }
}