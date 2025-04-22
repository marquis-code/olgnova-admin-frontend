<template>
    <footer class="py-12 px-4 md:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col space-y-6 mb-10">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="@/assets/icons/logo-black.svg" />
          </div>
        
          <div class="flex space-x-4">
            <!-- Twitter -->
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            
            <!-- LinkedIn -->
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <!-- Facebook -->
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Footer Links -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          <!-- Products Column -->
          <div class="flex flex-col space-y-4">
            <h3 class="font-medium text-gray-900">Products</h3>
            <NuxtLink to='/payouts' class="text-gray-700 hover:text-gray-900">Global Payouts</NuxtLink>
            <NuxtLink to='/currency-exchange' class="text-gray-700 hover:text-gray-900">Currency Exchange</NuxtLink>
            <NuxtLink to='/api-integration' class="text-gray-700 hover:text-gray-900">API Integration</NuxtLink>
            <NuxtLink to='/otc' class="text-gray-700 hover:text-gray-900">Over the Counter</NuxtLink>
          </div>
          
          <!-- Company Column -->
          <div class="flex flex-col space-y-4">
            <h3 class="font-medium text-gray-900">Company</h3>
            <NuxtLink href="#" class="text-gray-700 hover:text-gray-900">About us</NuxtLink>
            <a href="#" class="text-gray-700 hover:text-gray-900">Careers</a>
            <a href="#" class="text-gray-700 hover:text-gray-900">Press</a>
            <a href="mailto:hello@withcapera.com" class="text-gray-700 hover:text-gray-900">Contact us</a>
          </div>
          
          <!-- Resources Column -->
          <div class="flex flex-col space-y-4">
            <h3 class="font-medium text-gray-900">Resources</h3>
            <a href="#" class="text-gray-700 hover:text-gray-900">Blog</a>
            <NuxtLink to="/contact" class="text-gray-700 hover:text-gray-900">Help Center</NuxtLink>
          </div>
          
          <!-- Legal Column -->
          <div class="flex flex-col space-y-4">
            <h3 class="font-medium text-gray-900">Legal</h3>
            <a href="#" class="text-gray-700 hover:text-gray-900">Terms & Conditions</a>
            <a href="#" class="text-gray-700 hover:text-gray-900">Privacy Policy</a>
          </div>
          
          <!-- Developer Column -->
          <div class="flex flex-col space-y-4">
            <h3 class="font-medium text-gray-900">Developer</h3>
            <a href="#" class="text-gray-700 hover:text-gray-900">Documentation</a>
            <a href="#" class="text-gray-700 hover:text-gray-900">API status</a>
            <a href="#" class="text-gray-700 hover:text-gray-900">Sandbox</a>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="mt-12">
          <p class="text-gray-700">© 2025 Capera</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // No additional script logic needed for this component
  </script>
  
  <style scoped>
  /* All styling is handled by Tailwind CSS */
  </style>