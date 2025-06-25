<template>
    <div class="space-y-6">
      <!-- Header Actions -->
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search blogs..."
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            v-model="statusFilter"
            class="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2"
        >
          <Icon name="heroicons:plus" class="w-4 h-4" />
          <span>New Blog</span>
        </button>
      </div>
  
      <!-- Blogs Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="blog in filteredBlogs"
          :key="blog._id"
          class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-200"
        >
          <!-- Blog Image -->
          <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <Icon name="heroicons:photo" class="w-12 h-12 text-white opacity-50" />
          </div>
          
          <!-- Blog Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span :class="[
                'px-2 py-1 text-xs font-semibold rounded-full',
                blog.isPublished ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              ]">
                {{ blog.isPublished ? 'Published' : 'Draft' }}
              </span>
              <div class="flex items-center space-x-1">
                <button
                  @click="editBlog(blog)"
                  class="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
                >
                  <Icon name="heroicons:pencil" class="w-4 h-4" />
                </button>
                <button
                  v-if="!blog.isPublished"
                  @click="publishBlog(blog._id)"
                  class="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50"
                >
                  <Icon name="heroicons:eye" class="w-4 h-4" />
                </button>
                <button
                  @click="deleteBlog(blog._id)"
                  class="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
                >
                  <Icon name="heroicons:trash" class="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <h3 class="font-semibold text-slate-900 mb-2 line-clamp-2">{{ blog.title }}</h3>
            <p class="text-sm text-slate-600 mb-4 line-clamp-3">{{ blog.excerpt || blog.content }}</p>
            
            <div class="flex items-center justify-between text-sm text-slate-500">
              <span>{{ formatDate(blog.createdAt) }}</span>
              <div class="flex items-center space-x-2">
                <Icon name="heroicons:eye" class="w-4 h-4" />
                <span>{{ blog.views || 0 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
  
      <!-- Empty State -->
      <div v-else-if="filteredBlogs.length === 0" class="text-center py-12">
        <Icon name="heroicons:document-text" class="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <p class="text-slate-500">No blogs found</p>
      </div>
  
      <!-- Create/Edit Blog Modal -->
      <Modal v-model="showModal" title="Blog Details" size="xl">
        <BlogForm
          :blog="selectedBlog"
          @save="handleSaveBlog"
          @cancel="closeModal"
        />
      </Modal>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useGetBlogs } from '@/composables/modules/blogs/useGetBlogs'
  import { useCreateBlog } from '@/composables/modules/blogs/useCreateBlog'
  import { useUpdateBlog } from '@/composables/modules/blogs/useUpdateBlog'
  import { usePublishBlog } from '@/composables/modules/blogs/usePublishBlog'
  import { useSoftDeleteBlog } from '@/composables/modules/blogs/useSoftDeleteBlog'
  import Modal from '@/components/Modal.vue'
  import BlogForm from '@/components/BlogForm.vue'
  import Icon from '@/components/Icon.vue'
  
  // Composables
  const { blogs, loading, getBlogs } = useGetBlogs()
  const { createBlog } = useCreateBlog()
  const { updateBlog } = useUpdateBlog()
  const { publishBlog: publishBlogAction } = usePublishBlog()
  const { softDeleteBlog } = useSoftDeleteBlog()
  
  // Reactive data
  const searchQuery = ref('')
  const statusFilter = ref('')
  const showModal = ref(false)
  const selectedBlog = ref(null)
  
  // Load blogs on mount
  onMounted(() => {
    getBlogs()
  })
  
  // Computed
  const filteredBlogs = computed(() => {
    let filtered = blogs.value
  
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(blog => 
        blog.title?.toLowerCase().includes(query) ||
        blog.content?.toLowerCase().includes(query)
      )
    }
  
    if (statusFilter.value) {
      filtered = filtered.filter(blog => 
        statusFilter.value === 'published' ? blog.isPublished : !blog.isPublished
      )
    }
  
    return filtered
  })
  
  // Methods
  const openCreateModal = () => {
    selectedBlog.value = null
    showModal.value = true
  }
  
  const editBlog = (blog: any) => {
    selectedBlog.value = blog
    showModal.value = true
  }
  
  const closeModal = () => {
    showModal.value = false
    selectedBlog.value = null
  }
  
  const handleSaveBlog = async (blogData: any) => {
    try {
      if (selectedBlog.value) {
        await updateBlog(selectedBlog.value._id, blogData)
      } else {
        await createBlog(blogData)
      }
      await getBlogs()
      closeModal()
    } catch (error) {
      console.error('Error saving blog:', error)
    }
  }
  
  const publishBlog = async (blogId: string) => {
    try {
      await publishBlogAction(blogId)
      await getBlogs()
    } catch (error) {
      console.error('Error publishing blog:', error)
    }
  }
  
  const deleteBlog = async (blogId: string) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        await softDeleteBlog(blogId)
        await getBlogs()
      } catch (error) {
        console.error('Error deleting blog:', error)
      }
    }
  }
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString()
  }
  </script>
  