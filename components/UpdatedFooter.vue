<template>
  <footer class="px-4 md:px-8 py-32">
    <div class="container mx-auto space-y-6 lg:space-y-0 lg:flex justify-between items-start">
      <!-- Left Side: Logo and Social Icons -->
      <div class="flex items-center mb-[48px] lg:mb-0">
        <div class="flex flex-col">
          <img src="@/assets/icons/logo-black.svg" alt="Capera Logo" />
          <div class="flex space-x-4 pt-6">
            <a href="#" aria-label="Twitter" class="text-[#1A1A1B] ">
              <img src="@/assets/icons/socials/twitter.svg" />
            </a>
            <a href="#" aria-label="LinkedIn" class="text-[#1A1A1B] ">
              <img src="@/assets/icons/socials/linkedin.svg" />
            </a>
            <a href="#" aria-label="Facebook" class="text-[#1A1A1B] ">
              <img src="@/assets/icons/socials/facebook.svg" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Right Side: Footer Links -->
      <div class="grid flex-1 lg:pl-60 md: grid-cols-2 lg:grid-cols-5 gap-6">
        <!-- Products -->
        <div>
          <h3 class="f text-[#454745] mb-3">Products</h3>
          <ul class="space-y-1.5">
            <li><NuxtLink to="/payouts" class="text-[#1A1A1B] ">Global Payouts</NuxtLink></li>
            <li><NuxtLink to="/currency-exchange" class="text-[#1A1A1B] ">Currency Exchange</NuxtLink></li>
            <li><NuxtLink to="/api-integration" class="text-[#1A1A1B] ">API Integration</NuxtLink></li>
            <li><NuxtLink to="/otc" class="text-[#1A1A1B] ">Over the Counter</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h3 class="f text-[#454745] mb-3">Company</h3>
          <ul class="space-y-1.5">
            <li><NuxtLink to="/about" class="text-[#1A1A1B] ">About us</NuxtLink></li>
            <li><NuxtLink to="#" class="text-[#1A1A1B] ">Careers</NuxtLink></li>
            <li><NuxtLink to="#" class="text-[#1A1A1B] ">Press</NuxtLink></li>
            <li><a href="mailto:hello@withcapera.com" class="text-[#1A1A1B] ">Contact us</a></li>
          </ul>
        </div>
        
        <!-- Resources -->
        <div>
          <h3 class="f text-[#454745] mb-3">Resources</h3>
          <ul class="space-y-1.5">
            <li><a href="#" class="text-[#1A1A1B] ">Blog</a></li>
            <li><NuxtLink href="/contact" class="text-[#1A1A1B] ">Help Center</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h3 class="f text-[#454745] mb-3">Legal</h3>
          <ul class="space-y-1.5">
            <li><NuxtLink to="/terms-of-use" class="text-[#1A1A1B] ">Terms & Conditions</NuxtLink></li>
            <li><NuxtLink to="/privacy-policy" class="text-[#1A1A1B] ">Privacy Policy</NuxtLink></li>
            <li><a href="#" class="text-[#1A1A1B] ">Regulatory</a></li>
          </ul>
        </div>
        
        <!-- Developer -->
        <div>
          <h3 class="f text-[#454745] mb-3">Developer</h3>
          <ul class="space-y-1.5">
            <li><a href="#" class="text-[#1A1A1B] ">Documentation</a></li>
            <li><a href="#" class="text-[#1A1A1B] ">API status</a></li>
            <li><a href="#" class="text-[#1A1A1B] ">Sandbox</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Copyright -->
    <div class="container mx-auto mt-8">
      <p class="text-[#1A1A1B]">© 2025 Capera</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional imports needed
</script>

<style scoped>
/* Any additional custom styles can go here */
</style>