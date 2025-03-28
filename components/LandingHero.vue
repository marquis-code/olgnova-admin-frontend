<template>
<main>
  <div class="min-h-screen bg-[#1C5210] relative overflow-hidden">
    <!-- Simple grid overlay that's visible behind text -->
    <div class="absolute inset-0 grid-background"></div>
    
    <NavbarSticky />

    <!-- Hero Section -->
    <div class="relative z-10 container mx-auto px-4 pt-44 pb-12 text-center">
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">
        MAKE MONEY
        <div class="flex items-center justify-center">
          <div class="w-12 h-2 bg-[#3BAB22] mr-4"></div>
          <span class="text-[#3BAB22]">MOVE</span>
        </div>
      </h1>
      <p class="text-white text-lg max-w-2xl mx-auto mb-8">
        Manage currency accounts, pay across borders, and streamline global financial operations.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
        <button class="bg-[#3BAB22] text-white font-medium px-6 py-3 rounded-full transition-colors w-full">
          Create account
        </button>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full transition-colors w-full">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
      <!-- Dashboard Mockup -->
  <div class="relative z-10 container mx-auto px-4 flex justify-center -mt-24 lg:-mt-72">
      <div class="relative w-full container">
        <img src="@/assets/img/desktop-mockup.png" alt="Dashboard Mockup" class="w-full" />
      </div>
    </div>
</main>
</template>

<script setup lang="ts">
import NavbarSticky from './NavbarSticky.vue';
</script>

<style scoped>
/* Simple grid background that matches the image exactly */
.grid-background {
  background-size: 44.66% 44.66%; /* 6x6 grid */
  background-image: 
    linear-gradient(to right, rgba(76, 175, 80, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(76, 175, 80, 0.1) 1px, transparent 1px);
  z-index: 0;
}

/* Fade the edges very subtly */
.grid-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 100px 20px #1C5210;
  pointer-events: none;
}
</style>