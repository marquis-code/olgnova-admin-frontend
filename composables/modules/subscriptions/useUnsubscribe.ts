import { ref } from 'vue'
import { subscriptions_api } from '@/api_factory/modules/subscriptions'

export const useUnsubscribe = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const unsubscribe = async (email: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await subscriptions_api.$_unsubscribe(email)
      success.value = true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to unsubscribe'
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
    unsubscribe,
    resetState,
  }
}