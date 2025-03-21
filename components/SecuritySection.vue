<template>
    <section class="bg-gray-50 py-16 px-4 relative">
      <!-- Grid background pattern -->
      <div class="absolute inset-0 grid grid-cols-6 md:grid-cols-12" aria-hidden="true">
        <div v-for="i in 12" :key="i" class="border-r border-t border-gray-200"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative">
        <!-- Shield icon at top -->
        <div class="flex justify-center mb-8">
          <div class="w-20 h-20 bg-gray-400 rounded-lg flex items-center justify-center relative">
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" fill="#9CA3AF"/>
              <path d="M9 12L11 14L15 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <!-- Main heading -->
        <h2 class="text-4xl md:text-6xl font-bold text-center mb-6">
          SAFETY AND SECURITY<br>GUARANTEED
        </h2>
        
        <!-- Description text -->
        <p class="text-center text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          Your money and data are safe. With our PCI DSS Level-1, SOC 2 compliance and NDPA certification, your online transactions and personal information are securely protected.
        </p>
        
        <!-- Three column features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <!-- Feature 1 -->
          <div class="flex flex-col items-center md:items-start">
            <div class="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2Z" fill="#9CA3AF"/>
                <path d="M9 12L11 14L15 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="text-lg font-medium text-center md:text-left">
              Our dedicated fraud and security teams work to keep your money safe
            </p>
          </div>
          
          <!-- Feature 2 -->
          <div class="flex flex-col items-center md:items-start">
            <div class="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8Z" fill="#9CA3AF"/>
                <circle cx="12" cy="15" r="2" fill="black"/>
              </svg>
            </div>
            <p class="text-lg font-medium text-center md:text-left">
              We use 2-factor authentication to protect your account
            </p>
          </div>
          
          <!-- Feature 3 -->
          <div class="flex flex-col items-center md:items-start">
            <div class="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L4 7V10H20V7L12 3Z" fill="#9CA3AF"/>
                <path d="M4 10V20H20V10" stroke="black" stroke-width="2"/>
                <path d="M8 14H16" stroke="black" stroke-width="2"/>
                <path d="M8 18H16" stroke="black" stroke-width="2"/>
              </svg>
            </div>
            <p class="text-lg font-medium text-center md:text-left">
              We hold your money with licensed financial institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // Using TypeScript Composition API
  // No additional script logic needed for this static component
  </script>
  
  <style scoped>
  /* All styling is handled by Tailwind classes */
  </style>