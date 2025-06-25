<template>
    <div class="min-h-screen flex">
      <!-- Left Side - Carousel Animation -->
      <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 via-teal-600 to-blue-800 relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute top-16 right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div class="absolute bottom-20 left-16 w-28 h-28 bg-white/5 rounded-full animate-bounce"></div>
          <div class="absolute top-1/3 right-1/4 w-20 h-20 bg-white/15 rounded-full animate-ping"></div>
        </div>
  
        <!-- Carousel Content -->
        <div class="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div class="max-w-md text-center">
            <transition name="slide-fade" mode="out-in">
              <div :key="currentSlide" class="space-y-6">
                <div class="w-24 h-24 mx-auto mb-8 relative">
                  <div class="absolute inset-0 bg-white/20 rounded-full animate-spin-slow"></div>
                  <Icon :name="slides[currentSlide].icon" class="w-16 h-16 absolute inset-4 text-white" />
                </div>
                <h2 class="text-3xl font-bold mb-4">{{ slides[currentSlide].title }}</h2>
                <p class="text-lg text-white/90 leading-relaxed">{{ slides[currentSlide].description }}</p>
              </div>
            </transition>
          </div>
  
          <!-- Carousel Indicators -->
          <div class="flex space-x-2 mt-12">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="currentSlide = index"
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                currentSlide === index ? 'bg-white' : 'bg-white/30'
              ]"
            ></button>
          </div>
        </div>
      </div>
  
      <!-- Right Side - Signup Form -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div class="max-w-md w-full">
          <!-- Logo -->
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-2xl">O</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-900">Join Olgnova</h1>
            <p class="text-gray-600 mt-2">Create your admin account</p>
          </div>
  
          <!-- Signup Form -->
          <form @submit.prevent="handleSignup" class="space-y-6">
            <!-- Name Fields -->
            <div class="grid grid-cols-2 gap-4">
              <div class="transform transition-all duration-300 hover:scale-105">
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  v-model="signupForm.firstName"
                  type="text"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300',
                    error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  ]"
                  placeholder="John"
                />
              </div>
              <div class="transform transition-all duration-300 hover:scale-105">
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  v-model="signupForm.lastName"
                  type="text"
                  required
                  :class="[
                    'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300',
                    error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  ]"
                  placeholder="Doe"
                />
              </div>
            </div>
  
            <!-- Email Field -->
            <div class="transform transition-all duration-300 hover:scale-105">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div class="relative">
                <Icon name="heroicons:envelope" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  v-model="signupForm.email"
                  type="email"
                  required
                  :class="[
                    'w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300',
                    error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  ]"
                  placeholder="john@example.com"
                />
              </div>
            </div>
  
            <!-- Password Field -->
            <div class="transform transition-all duration-300 hover:scale-105">
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div class="relative">
                <Icon name="heroicons:lock-closed" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  v-model="signupForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  :class="[
                    'w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300',
                    error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  ]"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Icon :name="showPassword ? 'heroicons:eye-slash' : 'heroicons:eye'" class="w-5 h-5" />
                </button>
              </div>
            </div>
  
            <!-- Role Selection -->
            <div class="transform transition-all duration-300 hover:scale-105">
              <label for="role" class="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                id="role"
                v-model="signupForm.role"
                required
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300',
                  error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                ]"
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
  
            <!-- Error Message -->
            <transition name="shake">
              <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                <Icon name="heroicons:exclamation-triangle" class="w-5 h-5 text-red-500 flex-shrink-0" />
                <span class="text-red-700 text-sm">{{ error }}</span>
              </div>
            </transition>
  
            <!-- Terms Agreement -->
            <div class="flex items-start space-x-3">
              <input
                id="terms"
                v-model="signupForm.agreeToTerms"
                type="checkbox"
                required
                class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
              />
              <label for="terms" class="text-sm text-gray-600">
                I agree to the
                <a href="#" class="text-green-600 hover:text-green-500">Terms of Service</a>
                and
                <a href="#" class="text-green-600 hover:text-green-500">Privacy Policy</a>
              </label>
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading || !signupForm.agreeToTerms"
              class="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 focus:ring-4 focus:ring-green-200 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div v-if="loading" class="flex items-center justify-center space-x-2">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Creating account...</span>
              </div>
              <span v-else>Create Account</span>
            </button>
          </form>
  
          <!-- Login Link -->
          <div class="text-center mt-8">
            <p class="text-gray-600">
              Already have an account?
              <NuxtLink to="/" class="text-green-600 hover:text-green-500 font-medium">
                Sign in here
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  import Icon from '@/components/Icon.vue'
  import { useSignup } from '@/composables/modules/auth/useSignup'
  import { definePageMeta } from '#imports'
  
  // Meta
  definePageMeta({
    layout: false,
    auth: false
  })
  
  // Composables
  const router = useRouter()
  const { loading, error, success, signup } = useSignup()
  
  // Reactive data
  const signupForm = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    agreeToTerms: false
  })
  
  const showPassword = ref(false)
  const currentSlide = ref(0)
  
  // Carousel data
  const slides = [
    {
      icon: 'heroicons:user-plus',
      title: 'Easy Onboarding',
      description: 'Get started quickly with our streamlined registration process and intuitive interface.'
    },
    {
      icon: 'heroicons:cog-6-tooth',
      title: 'Powerful Tools',
      description: 'Access comprehensive admin tools to manage your platform efficiently and effectively.'
    },
    {
      icon: 'heroicons:chart-pie',
      title: 'Real-time Insights',
      description: 'Monitor your platform performance with live analytics and detailed reporting.'
    },
    {
      icon: 'heroicons:globe-alt',
      title: 'Global Reach',
      description: 'Scale your operations worldwide with our robust and reliable infrastructure.'
    }
  ]
  
  // Carousel auto-play
  let carouselInterval: NodeJS.Timeout
  
  const startCarousel = () => {
    carouselInterval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }, 4000)
  }
  
  const stopCarousel = () => {
    if (carouselInterval) {
      clearInterval(carouselInterval)
    }
  }
  
  // Methods
  const handleSignup = async () => {
    try {
      await signup({
        firstName: signupForm.value.firstName,
        lastName: signupForm.value.lastName,
        email: signupForm.value.email,
        password: signupForm.value.password,
        role: signupForm.value.role as 'admin' | 'editor' | 'viewer'
      })
      
      if (success.value) {
        await router.push('/dashboard')
      }
    } catch (err) {
      console.error('Signup failed:', err)
    }
  }
  
  // Lifecycle
  onMounted(() => {
    startCarousel()
  })
  
  onUnmounted(() => {
    stopCarousel()
  })
  </script>
  
  <style scoped>
  /* Carousel animations */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .slide-fade-enter-from {
    opacity: 0;
    transform: translateX(30px);
  }
  
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
  
  /* Error shake animation */
  .shake-enter-active {
    animation: shake 0.6s ease-in-out;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  
  /* Custom spin animation */
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  </style>
  