import { ref } from 'vue'
import { blogs_api } from '@/api_factory/modules/blogs'

export const useSoftDeleteBlog = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const softDeleteBlog = async (blogId: string) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await blogs_api.$_soft_delete_blog(blogId)
      success.value = true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to delete blog'
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
    softDeleteBlog,
    resetState,
  }
}