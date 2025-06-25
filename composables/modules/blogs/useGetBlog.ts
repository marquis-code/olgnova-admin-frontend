import { ref } from 'vue'
import { blogs_api, type Blog } from '@/api_factory/modules/blogs'

export const useGetBlog = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const blog = ref<Blog | null>(null)

  const getBlog = async (blogId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await blogs_api.$_get_blog(blogId)
      blog.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch blog'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    blog.value = null
  }

  return {
    loading,
    error,
    blog,
    getBlog,
    resetState,
  }
}