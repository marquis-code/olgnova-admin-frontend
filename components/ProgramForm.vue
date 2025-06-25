<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Program Title</label>
        <input
          v-model="form.title"
          type="text"
          required
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Enter program title..."
        />
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Description</label>
        <textarea
          v-model="form.description"
          rows="4"
          required
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Describe the program..."
        ></textarea>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Duration</label>
          <input
            v-model="form.duration"
            type="text"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="e.g., 6 weeks, 3 months"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Price</label>
          <input
            v-model="form.price"
            type="number"
            min="0"
            step="0.01"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="0.00"
          />
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
          <input
            v-model="form.startDate"
            type="date"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">End Date</label>
          <input
            v-model="form.endDate"
            type="date"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Requirements</label>
        <textarea
          v-model="form.requirements"
          rows="3"
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="List program requirements..."
        ></textarea>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Max Participants</label>
          <input
            v-model="form.maxParticipants"
            type="number"
            min="1"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Maximum number of participants"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Category</label>
          <select
            v-model="form.category"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">Select category</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="data-science">Data Science</option>
          </select>
        </div>
      </div>
  
      <div class="flex items-center space-x-6">
        <div class="flex items-center">
          <input
            v-model="form.isActive"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
          />
          <label class="ml-2 block text-sm text-slate-700">Active</label>
        </div>
        
        <div class="flex items-center">
          <input
            v-model="form.isFeatured"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
          />
          <label class="ml-2 block text-sm text-slate-700">Featured</label>
        </div>
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
          class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-200"
        >
          {{ program ? 'Update' : 'Create' }} Program
        </button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive, watchEffect } from 'vue';
  
  interface Props {
    program?: any
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits(['save', 'cancel'])
  
  const form = reactive({
    title: '',
    description: '',
    duration: '',
    price: 0,
    startDate: '',
    endDate: '',
    requirements: '',
    maxParticipants: null,
    category: '',
    isActive: true,
    isFeatured: false
  })
  
  // Initialize form with program data if editing
  watchEffect(() => {
    if (props.program) {
      Object.assign(form, {
        title: props.program.title || '',
        description: props.program.description || '',
        duration: props.program.duration || '',
        price: props.program.price || 0,
        startDate: props.program.startDate ? new Date(props.program.startDate).toISOString().split('T')[0] : '',
        endDate: props.program.endDate ? new Date(props.program.endDate).toISOString().split('T')[0] : '',
        requirements: props.program.requirements || '',
        maxParticipants: props.program.maxParticipants || null,
        category: props.program.category || '',
        isActive: props.program.isActive ?? true,
        isFeatured: props.program.isFeatured || false
      })
    } else {
      // Reset form for new program
      Object.assign(form, {
        title: '',
        description: '',
        duration: '',
        price: 0,
        startDate: '',
        endDate: '',
        requirements: '',
        maxParticipants: null,
        category: '',
        isActive: true,
        isFeatured: false
      })
    }
  })
  
  const handleSubmit = () => {
    emit('save', { ...form })
  }
  </script>
  