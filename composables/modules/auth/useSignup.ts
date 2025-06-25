import { ref } from 'vue'
import { auth_api, type SignupData } from '@/api_factory/modules/auth'

export const useSignup = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const userData = ref<any>(null)

  const signup = async (signupData: SignupData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await auth_api.$_signup(signupData)
      success.value = true
      userData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Signup failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    userData.value = null
  }

  return {
    loading,
    error,
    success,
    userData,
    signup,
    resetState,
  }
}