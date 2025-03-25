<template>
    <header class="bg-[#2c5324] text-white py-4">
      <div class="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center mb-4 md:mb-0">
          <div class="bg-[#1e3a19] rounded-full p-3 mr-3">
            <div class="w-8 h-8 bg-[#4CAF50] rounded-tl-lg"></div>
          </div>
          <span class="text-2xl font-bold">Capera</span>
        </div>
        
        <!-- Navigation -->
        <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <nav class="flex space-x-8">
            <div class="relative group">
              <button class="flex items-center">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div class="relative group">
              <button class="flex items-center">
                Company
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div class="relative group">
              <button class="flex items-center">
                Help
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </nav>
          
          <div class="flex items-center space-x-4">
            <a href="#" class="text-white">Log in</a>
            <a href="#" class="bg-[#4CAF50] text-white px-6 py-2 rounded-full">Register</a>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  // No additional logic needed for this component
  </script>