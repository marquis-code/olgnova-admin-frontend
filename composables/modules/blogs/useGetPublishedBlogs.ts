import { ref } from 'vue'
import { blogs_api, type Blog } from '@/api_factory/modules/blogs'

export const useGetPublishedBlogs = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const blogs = ref<Blog[]>([])

  const getPublishedBlogs = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await blogs_api.$_get_published_blogs()
      blogs.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch published blogs'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    blogs.value = []
  }

  return {
    loading,
    error,
    blogs,
    getPublishedBlogs,
    resetState,
  }
}