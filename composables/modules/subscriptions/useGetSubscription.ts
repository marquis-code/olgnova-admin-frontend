import { ref } from 'vue'
import { subscriptions_api, type Subscription } from '@/api_factory/modules/subscriptions'

export const useGetSubscription = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const subscription = ref<Subscription | null>(null)

  const getSubscription = async (subscriptionId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await subscriptions_api.$_get_subscription(subscriptionId)
      subscription.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch subscription'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    subscription.value = null
  }

  return {
    loading,
    error,
    subscription,
    getSubscription,
    resetState,
  }
}