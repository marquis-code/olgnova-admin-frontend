<template>
  <footer class="relative py-16 px-4 overflow-hidden">
    <!-- Background "Capera" text -->
    <div class="absolute inset-0 text-[200px] top-44 md:text-[450px] font-bold text-[#1A1A1B] opacity-10 flex items-center justify-center z-0 select-none overflow-hidden">
      <span class="whitespace-nowrap">Capera</span>
    </div>
    
    <!-- Cards grid -->
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <!-- Card 1: New to Capera? -->
        <div class="bg-[#F7F7F7] rounded-2xl p-8">
          <h2 class="text-[24px] md:text-5xl text-[#1A1A1B] font-bold mb-3">New to Capera?</h2>
          <p class="text-[#454745] text-[16px] lg:text-lg lg:mb-8 py-[32px]">Send us questions, comments, or a poem.</p>
          <a href="mailto:hello@withcapera.com" class="inline-flex text-lg lg:pt-[64px] items-center text-[#3BAB22] font-medium">
            Email Us
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        
        <!-- Card 2: Have an account? -->
        <div class="bg-[#F7F7F7] rounded-2xl p-8">
          <h2 class="text-[24px] md:text-5xl text-[#1A1A1B] font-bold mb-3">Have an account?</h2>
          <p class="text-[#454745] text-lg lg:mb-8 py-[32px]">Log in to message our support team.</p>
          <a href="#" class="inline-flex text-[16px] lg:text-lg items-center lg:pt-[64px] text-[#3BAB22] font-medium">
            Log In
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        
        <!-- Card 3: Want to partner? -->
        <div class="bg-[#F7F7F7] rounded-2xl p-8">
          <h2 class="text-[24px] md:text-5xl text-[#1A1A1B] font-bold mb-3">Want to partner?</h2>
          <p class="text-[#454745] text-[16px] lg:text-lg lg:mb-8 py-[32px]">Let's chat about how we can work together</p>
          <a :href="'mailto:hello@withcapera.com'" class="inline-flex text-lg lg:pt-[64px] items-center text-[#3BAB22] font-medium">
            Reach out
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        
        <!-- Card 4: Contact sales? -->
        <div class="bg-[#F7F7F7] rounded-2xl p-8">
          <h2 class="text-[24px] md:text-5xl text-[#1A1A1B] font-bold mb-3">Contact sales?</h2>
          <p class="text-[#454745] text-[16px] lg:text-lg lg:mb-8 py-[32px]">Elevate your business with unmatched expertise</p>
          <a :href="'mailto:hello@withcapera.com'" class="inline-flex text-lg lg:pt-[64px] items-center text-[#3BAB22] font-medium">
            Email Us
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

// No need for custom navigation function anymore as we're using direct mailto links
</script>

<style scoped>
/* Any additional custom styles can go here */
</style>
