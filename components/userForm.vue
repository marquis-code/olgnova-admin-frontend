<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">First Name</label>
          <input
            v-model="form.firstName"
            type="text"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
          <input
            v-model="form.lastName"
            type="text"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
        <input
          v-model="form.email"
          type="email"
          required
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
  
      <div v-if="!user">
        <label class="block text-sm font-medium text-slate-700 mb-2">Password</label>
        <input
          v-model="form.password"
          type="password"
          required
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Role</label>
        <select
          v-model="form.role"
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
  
      <div class="flex items-center">
        <input
          v-model="form.isActive"
          type="checkbox"
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
        />
        <label class="ml-2 block text-sm text-slate-700">Active</label>
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
          class="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
        >
          {{ user ? 'Update' : 'Create' }} User
        </button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive, watchEffect } from 'vue';
  
  interface Props {
    user?: any
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits(['save', 'cancel'])
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
    isActive: true
  })
  
  // Initialize form with user data if editing
  watchEffect(() => {
    if (props.user) {
      Object.assign(form, {
        firstName: props.user.firstName || '',
        lastName: props.user.lastName || '',
        email: props.user.email || '',
        role: props.user.role || 'user',
        isActive: props.user.isActive ?? true
      })
    } else {
      // Reset form for new user
      Object.assign(form, {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'user',
        isActive: true
      })
    }
  })
  
  const handleSubmit = () => {
    emit('save', { ...form })
  }
  </script>
  