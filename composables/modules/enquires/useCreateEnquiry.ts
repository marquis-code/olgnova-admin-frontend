import { ref } from 'vue'
import { enquiries_api, type CreateEnquiryData, type Enquiry } from '@/api_factory/modules/enquiries'

export const useCreateEnquiry = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const enquiryData = ref<Enquiry | null>(null)

  const createEnquiry = async (enquiryPayload: CreateEnquiryData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await enquiries_api.$_create_enquiry(enquiryPayload)
      success.value = true
      enquiryData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to create enquiry'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    enquiryData.value = null
  }

  return {
    loading,
    error,
    success,
    enquiryData,
    createEnquiry,
    resetState,
  }
}