<template>
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <!-- Left side content -->
        <div class="max-w-xl">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Get more value for your USD, CNY (RMB), and EUR with every payment.
          </h1>
          <p class="text-gray-700 mb-6 text-base md:text-lg">
            Effortlessly manage global transactions with Capera. Send payments to partners in 60+ countries, ensuring transparent pricing with no hidden fees.
          </p>
          <a href="#" class="inline-flex items-center text-green-600 font-medium hover:underline">
            Learn about Currency Exchange
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
  
        <!-- Right side currency converter -->
        <div class="border-4 border-green-500 rounded-3xl p-6 md:p-8 bg-white max-w-md w-full">
          <!-- From currency input -->
          <div class="mb-8">
            <label class="block text-gray-600 mb-2">Enter amount</label>
            <div class="flex items-center justify-between">
              <input 
                type="text" 
                v-model="amount" 
                class="text-2xl md:text-3xl font-semibold focus:outline-none w-1/2"
              />
              <div class="relative">
                <button class="flex items-center bg-gray-100 rounded-full py-2 px-4 text-gray-800">
                  <span class="w-6 h-6 rounded-full overflow-hidden mr-2 flex items-center justify-center">
                    <img src="/us-flag.svg" alt="US Flag" class="w-full h-full object-cover" />
                  </span>
                  <span class="font-medium">USD</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
  
          <!-- Arrow down -->
          <div class="flex justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
  
          <!-- To currency output -->
          <div class="mb-8">
            <label class="block text-gray-600 mb-2">You'll get</label>
            <div class="flex items-center justify-between">
              <div class="text-2xl md:text-3xl font-semibold w-1/2">7,175.56</div>
              <div class="relative">
                <button class="flex items-center bg-gray-100 rounded-full py-2 px-4 text-gray-800">
                  <span class="w-6 h-6 rounded-full overflow-hidden mr-2 flex items-center justify-center">
                    <img src="/cn-flag.svg" alt="China Flag" class="w-full h-full object-cover" />
                  </span>
                  <span class="font-medium">CNY</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
  
          <!-- Fee breakdown -->
          <div class="space-y-3 mb-8">
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <span class="text-gray-400 mr-2">•</span>
                <span>5.2 USD</span>
              </div>
              <div class="text-gray-600">Transfer fee</div>
            </div>
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <span class="text-gray-400 mr-2">•</span>
                <span>3.7 USD</span>
              </div>
              <div class="text-gray-600">Our fee</div>
            </div>
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <span class="text-gray-400 mr-2">=</span>
                <span>8.9 USD</span>
              </div>
              <div class="text-gray-600">Total fees</div>
            </div>
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <span class="text-gray-400 mr-2">=</span>
                <span>991.10 USD</span>
              </div>
              <div class="text-gray-600">Total amount we'll convert</div>
            </div>
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <span class="text-gray-400 mr-2">×</span>
                <span>7.24</span>
              </div>
              <div class="text-gray-600">Guaranteed rate (1h)</div>
            </div>
          </div>
  
          <!-- Exchange button -->
          <button class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 rounded-full transition duration-200">
            Exchange money now
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const amount = ref('1,000');
  </script>