import { ref } from 'vue'

export const useLogout = () => {
  const loading = ref(false)

  const logout = async () => {
    loading.value = true
    
    try {
      // Remove token from localStorage
      localStorage.removeItem('auth_token')
      
      // Redirect to login page
      await navigateTo('/login')
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    logout,
  }
}