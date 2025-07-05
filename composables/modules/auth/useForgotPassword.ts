import { ref } from "vue"
import { auth_api, type ForgotPasswordPayload } from "@/api_factory/modules/auth"

export const useForgotPassword = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const responseData = ref<any>(null)

  const forgotPassword = async (payload: ForgotPasswordPayload) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await auth_api.$_forgot_password(payload)
      success.value = true
      responseData.value = response.data.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || "Password reset request failed"
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    responseData.value = null
  }

  return {
    loading,
    error,
    success,
    responseData,
    forgotPassword,
    resetState,
  }
}
