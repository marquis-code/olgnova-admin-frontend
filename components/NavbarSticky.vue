<template>
    <header class="fixed top-0 left-0 right-0 z-50">
      <div class="bg-[#2c5520]/90 backdrop-blur-sm mt-6 border-b max-w-7xl mx-auto rounded-full border-white/10">
        <div class="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="@/assets/icons/logo-green.svg" />

          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <div class="relative group">
              <button class="text-white flex items-center">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            
            <div class="relative group">
              <button class="text-white flex items-center">
                Company
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            
            <div class="relative group">
              <button class="text-white flex items-center">
                Help
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
          </nav>
          
          <!-- Auth Buttons -->
          <div class="flex items-center space-x-4">
            <button class="text-white">Log in</button>
            <button class="bg-[#3BAB22] text-white px-4 py-3 rounded-full text-sm font-medium">Register</button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  // No additional logic needed for this component
  </script>