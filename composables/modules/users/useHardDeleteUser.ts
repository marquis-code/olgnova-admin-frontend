import { ref, readonly } from "vue"
import { users_api } from "@/api_factory/modules/users"

export const useHardDeleteUser = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const hardDeleteUser = async (userId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await users_api.$_hard_delete_user(userId)
      success.value = true
      console.log("User permanently deleted successfully")
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || "Failed to permanently delete user"
      console.error("Hard delete user error:", err)
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
    hardDeleteUser,
    resetState,
  }
}
