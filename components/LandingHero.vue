<template>
  <main class="p-3">
  <div class=" h-[120vh] bg-[#1C5210] relative rounded-3xl overflow-hidden">
      <!-- Grid background that matches the image exactly -->
      <div class="absolute inset-0 grid-background"></div>
      
      <NavbarSticky />

      <!-- Hero Section -->
      <div class="relative z-10 container mx-auto px-4 pt-44 pb-12 text-center">
        <h1 class="text-7xl lg:text-8xl font-bold text-white mb-4">
          MAKE MONEY
          <div class="flex items-center justify-center">
            <div class="w-16 h-3 bg-[#3BAB22] mr-4"></div>
            <span class="text-[#3BAB22]">MOVE</span>
          </div>
        </h1>
        <p class="text-white text-xl max-w-xl mx-auto mb-8">
          Manage currency accounts, pay across borders, and streamline global financial operations.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button class="bg-[#3BAB22] text-white font-medium px-6 py-4 rounded-full transition-colors lg:w-full">
            Create account
          </button>
          <a href="mailto:hello@withcapera.com" class="bg-white block hover:bg-gray-100 text-gray-800 font-medium px-6 py-4 rounded-full transition-colors lg:w-full">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
    
    <!-- Dashboard Mockup -->
    <div class="relative z-10 container mx-auto px-4 flex justify-center -mt-24 lg:-mt-[360px]">
      <div class="relative w-full container">
        <img src="@/assets/img/capera-desktop.png" alt="Dashboard Mockup" class="w-full" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import NavbarSticky from './NavbarSticky.vue';
</script>

<style scoped>
/* Grid background that matches the image exactly */
.grid-background {
  background-color: #1C5210; /* Match the base color */
  background-image: url('/assets/icons/bg-mesh.svg'); /* Replace with the actual path */
  /* background-size: 100px 100px; */
  /* background-position: center center; */
  /* background-repeat: repeat; */
  z-index: 0;
}

/* Subtle vignette effect around the edges */
.grid-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 150px 50px #1C5210;
  pointer-events: none;
}

/* Ensure the background color is consistent */
main {
  background-color: white;
}
</style>