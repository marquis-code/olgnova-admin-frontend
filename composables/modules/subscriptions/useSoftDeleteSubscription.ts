import { ref } from 'vue'
import { subscriptions_api } from '@/api_factory/modules/subscriptions'

export const useSoftDeleteSubscription = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const softDeleteSubscription = async (subscriptionId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await subscriptions_api.$_soft_delete_subscription(subscriptionId)
      success.value = true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to delete subscription'
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
    softDeleteSubscription,
    resetState,
  }
}