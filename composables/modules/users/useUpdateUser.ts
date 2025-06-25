import { ref } from 'vue'
import { users_api, type UpdateUserData, type User } from '@/api_factory/modules/users'

export const useUpdateUser = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const userData = ref<User | null>(null)

  const updateUser = async (userId: string, userPayload: UpdateUserData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await users_api.$_update_user(userId, userPayload)
      success.value = true
      userData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to update user'
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
    updateUser,
    resetState,
  }
}