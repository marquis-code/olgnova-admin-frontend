import { ref } from 'vue'
import { subscriptions_api, type CreateSubscriptionData, type Subscription } from '@/api_factory/modules/subscriptions'

export const useCreateSubscription = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const subscriptionData = ref<Subscription | null>(null)

  const createSubscription = async (subscriptionPayload: CreateSubscriptionData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await subscriptions_api.$_create_subscription(subscriptionPayload)
      success.value = true
      subscriptionData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to create subscription'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    subscriptionData.value = null
  }

  return {
    loading,
    error,
    success,
    subscriptionData,
    createSubscription,
    resetState,
  }
}