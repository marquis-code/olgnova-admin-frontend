import { ref } from 'vue'
import { users_api, type User } from '@/api_factory/modules/users'

export const useGetUsers = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const users = ref<User[]>([])

  const getUsers = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await users_api.$_get_users()
      users.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch users'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    users.value = []
  }

  return {
    loading,
    error,
    users,
    getUsers,
    resetState,
  }
}