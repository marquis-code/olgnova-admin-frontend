<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 md:px-8 max-w-7xl">
        <div class="text-center mb-12">
          <p class="uppercase text-sm font-semibold tracking-wider mb-4">INTEGRATIONS</p>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
             <!-- Access to a complete payments infrastructure through a single integration. -->
          </h2>
          <p class="mt-6 text-gray-700 max-w-3xl mx-auto text-lg">
            Whether you want to connect to us via our dashboard or our API, safety and security are always top of mind. You'll be working with the world's leading infrastructure providers, so you can rest easy knowing your funds are taken care of.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mt-16">
          <!-- API Card -->
          <div class="bg-gray-50 p-8 rounded-lg">
            <div class="mb-6">
              <div class="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
            </div>
            <h3 class="text-3xl font-bold mb-6">API</h3>
            <p class="text-gray-700 mb-8">
              Putting you in control of your payments. Customise our payout flows with your branding via our API. Automatically collect all payout information in the format that works for you.
            </p>
            <a href="#" class="inline-flex items-center text-green-600 font-medium">
              Read our docs
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Portal Card -->
          <div class="bg-gray-50 p-8 rounded-lg">
            <div class="mb-6">
              <div class="w-16 h-16 flex flex-col items-center">
                <div class="w-10 h-5 bg-gray-800 rounded-t-lg"></div>
                <div class="w-16 h-11 bg-gray-300 rounded-md flex items-center justify-center">
                  <div class="w-10 h-5 bg-gray-500 rounded-md"></div>
                </div>
              </div>
            </div>
            <h3 class="text-3xl font-bold mb-6">Portal</h3>
            <p class="text-gray-700 mb-8">
              Quickly unlock access to new markets by using our ready to go portal. Gain real-time insight into all of your payments, pull reports and easily track all of your money movements.
            </p>
            <a href="#" class="inline-flex items-center text-green-600 font-medium">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No additional script needed for this component
  </script>
  
  <style scoped>
  /* Any additional styling can be added here */
  </style>