import { ref } from 'vue'
import { enquiries_api, type Enquiry } from '@/api_factory/modules/enquiries'

export const useGetEnquiries = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const enquiries = ref<Enquiry[]>([])

  const getEnquiries = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await enquiries_api.$_get_enquiries()
      enquiries.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch enquiries'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    enquiries.value = []
  }

  return {
    loading,
    error,
    enquiries,
    getEnquiries,
    resetState,
  }
}