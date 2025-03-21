<template>
    <section class="max-w-6xl mx-auto px-4 py-16 text-center">
      <h3 class="text-sm uppercase tracking-wider text-gray-800 mb-2">PLATFORM FEATURES</h3>
      
      <div class="mb-12">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-2">PAYMENTS</h2>
        <div class="flex items-center justify-center">
          <div class="w-8 h-1 bg-green-500 mr-4"></div>
          <h2 class="text-5xl md:text-6xl font-bold text-green-500">WITHOUT BORDERS</h2>
        </div>
      </div>
      
      <div class="flex flex-wrap justify-center gap-4">
        <div class="feature-pill bg-green-50 text-green-600">
          <span class="icon">
            <!-- <Icon name="lucide:banknote" class="w-5 h-5" /> -->
          </span>
          <span>Global Payout</span>
        </div>
        
        <div class="feature-pill bg-gray-50 text-gray-700">
          <span class="icon">
            <!-- <Icon name="lucide:repeat" class="w-5 h-5" /> -->
          </span>
          <span>Currency Exchange</span>
        </div>
        
        <div class="feature-pill bg-gray-50 text-gray-700">
          <span class="icon bg-gray-200 text-xs font-semibold rounded">API</span>
          <span>API Integration</span>
        </div>
        
        <div class="feature-pill bg-gray-50 text-gray-700">
          <span class="icon">
            <!-- <Icon name="lucide:layout-dashboard" class="w-5 h-5" /> -->
          </span>
          <span>OTC (Over the counter)</span>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No additional script needed for this component
  </script>
  
  <style scoped>
  .feature-pill {
    @apply flex items-center px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md;
  }
  
  .icon {
    @apply flex items-center justify-center mr-2;
  }
  </style>