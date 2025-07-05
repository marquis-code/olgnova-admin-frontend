import { ref } from "vue"
import { auth_api, type ResetPasswordPayload } from "@/api_factory/modules/auth"

export const useResetPassword = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const responseData = ref<any>(null)

  const resetPassword = async (token: string, payload: ResetPasswordPayload) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await auth_api.$_reset_password(token, payload)
      success.value = true
      responseData.value = response.data.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || "Password reset failed"
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
    resetPassword,
    resetState,
  }
}
