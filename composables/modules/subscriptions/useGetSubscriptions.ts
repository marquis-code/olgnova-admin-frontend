import { ref } from 'vue'
import { subscriptions_api, type Subscription } from '@/api_factory/modules/subscriptions'

export const useGetSubscriptions = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const subscriptions = ref<Subscription[]>([])

  const getSubscriptions = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await subscriptions_api.$_get_subscriptions()
      subscriptions.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch subscriptions'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    subscriptions.value = []
  }

  return {
    loading,
    error,
    subscriptions,
    getSubscriptions,
    resetState,
  }
}