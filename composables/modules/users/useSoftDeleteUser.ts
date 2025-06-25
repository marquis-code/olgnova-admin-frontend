import { ref, readonly } from "vue"
import { users_api, type User } from '@/api_factory/modules/users'

export const useSoftDeleteUser = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const softDeleteUser = async (userId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await users_api.$_soft_delete_user(userId)
      success.value = true

      // Show success notification
      if (process.client) {
        // You can integrate with your notification system here
        console.log("User deleted successfully")
      }
    } catch (err: any) {
      error.value = err.response?.data?.message || "Failed to delete user"

      // Show error notification
      if (process.client) {
        console.error("Error deleting user:", error.value)
      }

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
    loading: readonly(loading),
    error: readonly(error),
    success: readonly(success),
    softDeleteUser,
    resetState,
  }
}
