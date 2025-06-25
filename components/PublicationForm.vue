<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Title</label>
        <input
          v-model="form.title"
          type="text"
          required
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Publication title..."
        />
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Abstract</label>
        <textarea
          v-model="form.abstract"
          rows="4"
          required
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Publication abstract..."
        ></textarea>
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Authors</label>
        <input
          v-model="authorsInput"
          type="text"
          required
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Enter authors separated by commas..."
        />
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Journal</label>
          <input
            v-model="form.journal"
            type="text"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Journal name..."
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Publication Date</label>
          <input
            v-model="form.publicationDate"
            type="date"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">DOI</label>
          <input
            v-model="form.doi"
            type="text"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Digital Object Identifier..."
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">URL</label>
          <input
            v-model="form.url"
            type="url"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Publication URL..."
          />
        </div>
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Keywords</label>
        <input
          v-model="keywordsInput"
          type="text"
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Enter keywords separated by commas..."
        />
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Category</label>
        <select
          v-model="form.category"
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        >
          <option value="">Select category</option>
          <option value="research">Research</option>
          <option value="review">Review</option>
          <option value="case-study">Case Study</option>
          <option value="technical">Technical</option>
          <option value="editorial">Editorial</option>
        </select>
      </div>
  
      <div class="flex justify-end space-x-3 pt-6 border-t border-slate-200">
        <button
          type="button"
          @click="$emit('cancel')"
          class="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
        >
          {{ publication ? 'Update' : 'Create' }} Publication
        </button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref, watch, watchEffect } from 'vue'
  
  interface Props {
    publication?: any
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits(['save', 'cancel'])
  
  const form = reactive({
    title: '',
    abstract: '',
    authors: [] as string[],
    journal: '',
    publicationDate: '',
    doi: '',
    url: '',
    keywords: [] as string[],
    category: '',
    status: 'draft'
  })
  
  const authorsInput = ref('')
  const keywordsInput = ref('')
  
  // Watch inputs and convert to arrays
  watch(authorsInput, (newValue) => {
    form.authors = newValue.split(',').map(author => author.trim()).filter(author => author.length > 0)
  })
  
  watch(keywordsInput, (newValue) => {
    form.keywords = newValue.split(',').map(keyword => keyword.trim()).filter(keyword => keyword.length > 0)
  })
  
  // Initialize form with publication data if editing
  watchEffect(() => {
    if (props.publication) {
      Object.assign(form, {
        title: props.publication.title || '',
        abstract: props.publication.abstract || '',
        authors: props.publication.authors || [],
        journal: props.publication.journal || '',
        publicationDate: props.publication.publicationDate ? new Date(props.publication.publicationDate).toISOString().split('T')[0] : '',
        doi: props.publication.doi || '',
        url: props.publication.url || '',
        keywords: props.publication.keywords || [],
        category: props.publication.category || '',
        status: props.publication.status || 'draft'
      })
      authorsInput.value = (props.publication.authors || []).join(', ')
      keywordsInput.value = (props.publication.keywords || []).join(', ')
    } else {
      // Reset form for new publication
      Object.assign(form, {
        title: '',
        abstract: '',
        authors: [],
        journal: '',
        publicationDate: '',
        doi: '',
        url: '',
        keywords: [],
        category: '',
        status: 'draft'
      })
      authorsInput.value = ''
      keywordsInput.value = ''
    }
  })
  
  const handleSubmit = () => {
    emit('save', { ...form })
  }
  </script>
  