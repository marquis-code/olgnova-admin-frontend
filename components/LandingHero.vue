<template>
    <div class="min-h-screen bg-[#1C5210] relative overflow-hidden">
  
      <!-- Navigation Bar -->
      <div class="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
        <div v-for="i in 36" :key="i" class="border border-green-700/50"></div>
      </div>
      
     <NavbarSticky />
  
      <!-- Hero Section -->
      <div class="relative z-10 container mx-auto px-4 pt-60 pb-24 text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">
          MAKE MONEY
          <div class="flex items-center justify-center">
            <div class="w-12 h-3 bg-[#3BAB22] mr-4"></div>
            <span class="text-[#3BAB22]">MOVE</span>
          </div>
        </h1>
        <p class="text-white text-lg max-w-2xl mx-auto mb-8">
          Manage currency accounts, pay across borders, and streamline global financial operations.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="bg-[#3BAB22] text-white font-medium px-6 py-3 rounded-full transition-colors w-full sm:w-auto">
            Create account
          </button>
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full transition-colors w-full sm:w-auto">
            Contact Sales
          </button>
        </div>
      </div>
  
      <!-- Dashboard Mockup -->
      <div class="relative z-10 container mx-auto px-4 flex justify-center mt-8">
        <div class="relative w-full">
          <!-- Space for the device mockup image that the user will provide -->
          <img src="@/assets/img/desktop-mockup.png" alt="Dashboard Mockup" class="w-full" />
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import NavbarSticky from './NavbarSticky.vue';

  // No additional script needed for this static UI
  </script>
  
  <style>
  /* Additional styles can be added here if needed */
  </style>