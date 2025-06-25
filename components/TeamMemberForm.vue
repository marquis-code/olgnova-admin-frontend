<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Enter full name..."
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Enter email address..."
          />
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Position</label>
          <input
            v-model="form.position"
            type="text"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Job title or position..."
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Department</label>
          <select
            v-model="form.department"
            required
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Select department</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="hr">Human Resources</option>
            <option value="finance">Finance</option>
            <option value="operations">Operations</option>
          </select>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Phone</label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Phone number..."
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Location</label>
          <input
            v-model="form.location"
            type="text"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Office location..."
          />
        </div>
      </div>
  
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-2">Bio</label>
        <textarea
          v-model="form.bio"
          rows="4"
          class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Brief biography or description..."
        ></textarea>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">LinkedIn</label>
          <input
            v-model="form.linkedin"
            type="url"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="LinkedIn profile URL..."
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Twitter</label>
          <input
            v-model="form.twitter"
            type="text"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Twitter handle..."
          />
        </div>
      </div>
  
      <div class="flex items-center">
        <input
          v-model="form.isActive"
          type="checkbox"
          class="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded"
        />
        <label class="ml-2 block text-sm text-slate-700">Active team member</label>
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
          class="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200"
        >
          {{ member ? 'Update' : 'Add' }} Member
        </button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive, watchEffect } from 'vue';
  
  interface Props {
    member?: any
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits(['save', 'cancel'])
  
  const form = reactive({
    name: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    location: '',
    bio: '',
    linkedin: '',
    twitter: '',
    isActive: true
  })
  
  // Initialize form with member data if editing
  watchEffect(() => {
    if (props.member) {
      Object.assign(form, {
        name: props.member.name || '',
        email: props.member.email || '',
        position: props.member.position || '',
        department: props.member.department || '',
        phone: props.member.phone || '',
        location: props.member.location || '',
        bio: props.member.bio || '',
        linkedin: props.member.linkedin || '',
        twitter: props.member.twitter || '',
        isActive: props.member.isActive ?? true
      })
    } else {
      // Reset form for new member
      Object.assign(form, {
        name: '',
        email: '',
        position: '',
        department: '',
        phone: '',
        location: '',
        bio: '',
        linkedin: '',
        twitter: '',
        isActive: true
      })
    }
  })
  
  const handleSubmit = () => {
    emit('save', { ...form })
  }
  </script>
  