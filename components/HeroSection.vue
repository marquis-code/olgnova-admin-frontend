<template>
    <div class="bg-[#1C5210] min-h-screen rounded-3xl relative overflow-hidden">
      <!-- Grid overlay pattern -->
      <div class="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
        <div v-for="i in 144" :key="i" class="border-r border-t border-white/20"></div>
      </div>
      
      <!-- Header/Navigation -->
      <header class="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="w-10 h-10 mr-2">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30L20 20L30 30L20 40L10 30Z" fill="#7BC67B" />
              <path d="M20 20L30 10L40 20L30 30L20 20Z" fill="#5EB45E" />
              <path d="M10 10L20 0L30 10L20 20L10 10Z" fill="#3D9D3D" />
            </svg>
          </div>
          <span class="text-white text-2xl font-medium">Capera</span>
        </div>
        
        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <button class="text-white flex items-center">
              Products
              <!-- <Icon name="lucide:chevron-down" class="ml-1 w-4 h-4" /> -->
            </button>
          </div>
          <div class="relative group">
            <button class="text-white flex items-center">
              Company
              <!-- <Icon name="lucide:chevron-down" class="ml-1 w-4 h-4" /> -->
            </button>
          </div>
          <div class="relative group">
            <button class="text-white flex items-center">
              Help
              <!-- <Icon name="lucide:chevron-down" class="ml-1 w-4 h-4" /> -->
            </button>
          </div>
        </nav>
        
        <!-- Auth Buttons -->
        <div class="flex items-center space-x-4">
          <button class="text-white hover:text-green-300 transition">Log in</button>
          <button class="bg-light-green text-white px-6 py-2 rounded-full hover:bg-green-500 transition">Register</button>
          
          <!-- Mobile menu button (hidden on desktop) -->
          <button class="md:hidden text-white">
            <!-- <Icon name="lucide:menu" class="w-6 h-6" /> -->
          </button>
        </div>
      </header>
      
      <!-- Hero Content -->
      <main class="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">MAKE MONEY</h1>
        <div class="flex items-center justify-center mb-8">
          <div class="w-8 h-1 bg-light-green mr-4"></div>
          <h1 class="text-5xl md:text-7xl font-bold text-light-green">MOVE</h1>
        </div>
        
        <p class="text-white text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Manage currency accounts, pay across borders, and streamline global financial operations.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button class="bg-light-green text-white px-8 py-4 rounded-full hover:bg-green-500 transition w-full sm:w-auto">
            Create account
          </button>
          <a href="mailto:hello@withcapera.com" class="bg-white block text-dark-green px-8 py-4 rounded-full hover:bg-gray-100 transition w-full sm:w-auto">
            Contact Sales
          </a>
        </div>
      </main>

      <div>
        <img src="@/assets/img/capera-hero.png" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No additional script needed for this component
  </script>
  
  <style scoped>
  /* Custom colors to match the design exactly */
  .bg-dark-green {
    background-color: #2c5329;
  }
  
  .bg-light-green {
    background-color: #5eb45e;
  }
  
  .text-light-green {
    color: #5eb45e;
  }
  
  .text-dark-green {
    color: #2c5329;
  }
  
  /* Grid rows for the background pattern */
  .grid-rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }
  </style>