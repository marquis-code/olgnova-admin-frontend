<template>
  <footer class="py-8 px-4 md:px-8">
    <div class="container mx-auto space-y-6 lg:space-y-0 lg:flex justify-between items-start">
      <!-- Left Side: Logo and Social Icons -->
      <div class="flex items-center">
        <div class="flex flex-col">
          <img src="@/assets/icons/logo-black.svg" alt="Capera Logo" />
          <div class="flex space-x-4 pt-3">
            <a href="#" aria-label="Twitter" class="text-[#1A1A1B] hover:text-gray-800">
              <img src="@/assets/icons/socials/twitter.svg" />
            </a>
            <a href="#" aria-label="LinkedIn" class="text-[#1A1A1B] hover:text-gray-800">
              <img src="@/assets/icons/socials/linkedin.svg" />
            </a>
            <a href="#" aria-label="Facebook" class="text-[#1A1A1B] hover:text-gray-800">
              <img src="@/assets/icons/socials/facebook.svg" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Right Side: Footer Links -->
      <div class="grid flex-1 lg:pl-60 md: grid-cols-2 lg:grid-cols-5 gap-4">
        <!-- Products -->
        <div>
          <h3 class="f text-[#454745] mb-3">Products</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Global Payouts</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Currency Exchange</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">API Integration</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Over the Counter</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div>
          <h3 class="f text-[#454745] mb-3">Company</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">About us</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Careers</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Press</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Contact us</a></li>
          </ul>
        </div>
        
        <!-- Resources -->
        <div>
          <h3 class="f text-[#454745] mb-3">Resources</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Blog</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Help Center</a></li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h3 class="f text-[#454745] mb-3">Legal</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Privacy Policy</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Regulatory</a></li>
          </ul>
        </div>
        
        <!-- Developer -->
        <div>
          <h3 class="f text-[#454745] mb-3">Developer</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Documentation</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">API status</a></li>
            <li><a href="#" class="text-[#1A1A1B] hover:text-gray-800">Sandbox</a></li>
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