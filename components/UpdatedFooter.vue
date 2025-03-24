<template>
    <footer class="py-16 px-4 md:px-8 lg:px-16 border-t border-gray-100">
      <div class="container mx-auto">
        <!-- Top section with logo and social icons -->
        <div class="mb-12">
          <!-- Logo -->
          <div class="flex items-center mb-6">
            <div class="mr-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8L30 0L20 20L0 30L10 8Z" fill="#4CAF50" />
                <path d="M10 8L30 0L20 40L0 30L10 8Z" fill="#2E7D32" opacity="0.8" />
              </svg>
            </div>
            <span class="text-2xl font-semibold">Capera</span>
          </div>
          
          <!-- Social icons -->
          <div class="flex space-x-4">
            <a href="#" aria-label="Twitter">
              <Twitter class="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin class="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook class="w-6 h-6 text-gray-700" />
            </a>
          </div>
        </div>
        
        <!-- Footer links -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <!-- Products column -->
          <div>
            <h3 class="text-lg font-medium mb-4">Products</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Global Payouts</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Currency Exchange</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">API Integration</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Over the Counter</a></li>
            </ul>
          </div>
          
          <!-- Company column -->
          <div>
            <h3 class="text-lg font-medium mb-4">Company</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-700 hover:text-gray-900">About us</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Careers</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Press</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Contact us</a></li>
            </ul>
          </div>
          
          <!-- Resources column -->
          <div>
            <h3 class="text-lg font-medium mb-4">Resources</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Blog</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Help Center</a></li>
            </ul>
          </div>
          
          <!-- Legal column -->
          <div>
            <h3 class="text-lg font-medium mb-4">Legal</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Regulatory</a></li>
            </ul>
          </div>
          
          <!-- Developer column -->
          <div>
            <h3 class="text-lg font-medium mb-4">Developer</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Documentation</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">API status</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Sandbox</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="pt-8 border-t border-gray-100">
          <p class="text-gray-700">© 2025 Capera</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { Twitter, Linkedin, Facebook } from 'lucide-vue-next';
  </script>
  
  <style scoped>
  /* Any additional custom styles can go here */
  </style>