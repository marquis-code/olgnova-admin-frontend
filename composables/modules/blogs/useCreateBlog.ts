import { ref } from 'vue'
import { blogs_api, type CreateBlogData, type Blog } from '@/api_factory/modules/blogs'

export const useCreateBlog = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)
  const blogData = ref<Blog | null>(null)

  const createBlog = async (blogPayload: CreateBlogData) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const response = await blogs_api.$_create_blog(blogPayload)
      success.value = true
      blogData.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to create blog'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    success.value = false
    blogData.value = null
  }

  return {
    loading,
    error,
    success,
    blogData,
    createBlog,
    resetState,
  }
}