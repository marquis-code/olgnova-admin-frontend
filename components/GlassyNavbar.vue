<template>
    <main>
     <Navbar />
    
    <!-- Hero section to demonstrate the navbar (you can remove this in your actual implementation) -->
    <div class="bg-dark-green min-h-screen pt-20">
      <!-- Grid overlay pattern -->
      <div class="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
        <div v-for="i in 144" :key="i" class="border-r border-t border-white/20"></div>
      </div>
      
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
    </div>
    <!-- <div class="-mt-44">
        <img src="@/assets/img/capera-hero.png" />
      </div> -->
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isMobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
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