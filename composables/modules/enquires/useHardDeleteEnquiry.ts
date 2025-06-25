import { ref } from 'vue'
import { enquiries_api } from '@/api_factory/modules/enquiries'

export const useHardDeleteEnquiry = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const hardDeleteEnquiry = async (enquiryId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await enquiries_api.$_hard_delete_enquiry(enquiryId)
      success.value = true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to permanently delete enquiry'
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
    hardDeleteEnquiry,
    resetState,
  }
}