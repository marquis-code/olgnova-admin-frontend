import { ref } from 'vue'
import { enquiries_api, type Enquiry } from '@/api_factory/modules/enquiries'

export const useGetEnquiry = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const enquiry = ref<Enquiry | null>(null)

  const getEnquiry = async (enquiryId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await enquiries_api.$_get_enquiry(enquiryId)
      enquiry.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch enquiry'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    enquiry.value = null
  }

  return {
    loading,
    error,
    enquiry,
    getEnquiry,
    resetState,
  }
}