<template>
    <section class="max-w-6xl mx-auto px-4 py-16 text-center">
    <h3 class="text-[20px] uppercase tracking-wider text-gray-800 mb-6">
      OVERVIEW
    </h3>
    
    <div class="mb-8">
      <!-- Desktop version -->
      <div class="hidden md:block">
        <h2 class="text-5xl lg:text-8xl md:text-8xl font-bold text-[#1A1A1B] mb-2">
          MAXIMUM REACH,
        </h2>
        <div class="flex items-center  justify-center">
          <div class="w-10 h-3 bg-[#3BAB22] mr-4"></div>
          <h2 class="text-5xl lg:text-8xl md:text-8xl font-bold text-[#3BAB22]">
            MINIMUM EFFORT
          </h2>
        </div>
      </div>
      
      <!-- Mobile version -->
      <div class="block md:hidden">
        <h2 class="text-5xl font-bold text-[#1A1A1B] mb-2">
          MAXIMUM<br>REACH
        </h2>
        <div class="flex items-center justify-center">
          <div class="w-8 h-2 bg-[#3BAB22] mr-2"></div>
          <h2 class="text-5xl font-bold text-[#3BAB22]">
            MINIMUM<br>EFFORT
          </h2>
        </div>
      </div>
    </div>
    
    <div class="mx-auto">
      <p class="text-[18px] leading-relaxed md:text-[20px] text-center">
        Send payments globally with speed and affordability
        <br>— no need to be physically present in the destination region.
      </p>
    </div>
  </section>
  </template>
  
  <script setup lang="ts">
  // No additional script needed for this component
  </script>
  
  <style scoped>
  .feature-pill {
    @apply flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md;
  }
  
  .icon {
    @apply flex items-center justify-center mr-2;
  }
  </style>