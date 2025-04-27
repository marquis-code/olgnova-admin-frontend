<template>
    <section class="relative overflow-hidden bg-black rounded-3xl">
      <!-- Background with CSK watermark and dotted map -->
      <div class="absolute inset-0 opacity-10 text-gray-700 select-none pointer-events-none">
        <div class="absolute text-[30rem] font-bold -bottom-40 -left-20">CSK</div>
      </div>
      
      <!-- Dotted world map overlay -->
      <div class="absolute inset-0 opacity-30 select-none pointer-events-none">
        <div class="relative h-full w-full">
          <div class="absolute bottom-0 left-0 right-0 h-[60%] w-full">
            <!-- Simulated dotted map pattern -->
            <div v-for="i in 200" :key="i" 
                 :class="[
                   'absolute w-1 h-1 rounded-full bg-white',
                   i % 20 === 0 ? 'bg-green-500' : 'bg-white'
                 ]"
                 :style="{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                   opacity: Math.random() * 0.8 + 0.2
                 }">
            </div>
          </div>
        </div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          READY TO START YOUR<br>CAPERA JOURNEY?
        </h2>
        
        <div class="text-white mb-10 space-y-2">
          <p>Join other business users today.</p>
          <p>Contact our professional service team to learn more or open an account online for free.</p>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-8 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors">
            Get started
          </button>
          <a href="mailto:hello@withcapera.com" class="px-8 py-3 block bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
            Contact Sales
          </a>
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