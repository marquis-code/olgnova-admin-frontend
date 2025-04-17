<template>
    <footer class="py-16 px-6 md:px-12 lg:px-16 bg-white">
      <div class="max-w-7xl mx-auto">
        <!-- Logo and social media section -->
        <div class="mb-12 md:mb-16">
          <div class="mb-6">
            <div class="flex items-center">
              <!-- Capera logo -->
              <div class="mr-2">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0L0 10.3923V25.6077L18 36L36 25.6077V10.3923L18 0Z" fill="#E5E7EB"/>
                  <path d="M18 0L0 10.3923L18 20.7846L36 10.3923L18 0Z" fill="#4CAF50"/>
                </svg>
              </div>
              <span class="text-2xl font-medium text-gray-900">Capera</span>
            </div>
          </div>
          
          <!-- Social media icons -->
          <div class="flex space-x-4">
            <!-- Twitter -->
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.41 16.38C6.13 16.89 7.01 17.17 7.92 17.17C6.26 18.48 4.17 19.16 2 19.13C1.67 19.13 1.34 19.11 1 19.07C3.18 20.29 5.7 21 8.29 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
              </svg>
            </a>
            
            <!-- LinkedIn -->
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.8 8.7 6 7.9 6 7C6 6.1 6.8 5.3 7.7 5.3C8.6 5.3 9.4 6.1 9.4 7C9.4 7.9 8.6 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11.3C12.9 10.5 13.8 10 15 10C16.7 10 18 11.3 18 13V17Z"/>
              </svg>
            </a>
            
            <!-- Facebook -->
            <a href="#" class="text-gray-600 hover:text-gray-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Footer links section -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <!-- Products column -->
          <div>
            <h3 class="text-gray-900 font-medium mb-4">Products</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Global Payouts</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Currency Exchange</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">API Integration</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Over the Counter</a></li>
            </ul>
          </div>
          
          <!-- Company column -->
          <div>
            <h3 class="text-gray-900 font-medium mb-4">Company</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">About us</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Press</a></li>
              <li><a href="mailto:hello@withcapera.com" class="text-gray-600 hover:text-gray-900">Contact us</a></li>
            </ul>
          </div>
          
          <!-- Resources column -->
          <div>
            <h3 class="text-gray-900 font-medium mb-4">Resources</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Help Center</a></li>
            </ul>
          </div>
          
          <!-- Legal column -->
          <div>
            <h3 class="text-gray-900 font-medium mb-4">Legal</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Regulatory</a></li>
            </ul>
          </div>
          
          <!-- Developer column -->
          <div>
            <h3 class="text-gray-900 font-medium mb-4">Developer</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Documentation</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">API status</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Sandbox</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Copyright section -->
        <div class="text-gray-600">
          © 2025 Capera
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // Using TypeScript Composition API
  // No additional script logic needed for this static component
  </script>
  
  <style scoped>
  /* All styling is handled by Tailwind classes */
  </style>