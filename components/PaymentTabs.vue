<template>
    <section class="max-w-6xl mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h3 class="text-sm uppercase tracking-wider text-gray-800 mb-2">PLATFORM FEATURES</h3>
        <div class="mb-2">
          <h2 class="text-3xl md:text-6xl font-bold text-[#1A1A1B]">PAYMENTS</h2>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-10 h-2 bg-[#3BAB22] mr-4"></div>
          <h2 class="text-3xl md:text-6xl font-bold text-[#3BAB22]">WITHOUT BORDERS</h2>
        </div>
      </div>
      
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'flex items-center px-6 py-3 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 hover:shadow-md',
            activeTab === tab.id 
              ? 'bg-[#E2FEDC] text-[#3BAB22]' 
              : 'bg-gray-50 text-gray-700'
          ]"
        >
          <span class="flex items-center justify-center mr-2">
            <img :src="tab.icon" alt="" class="w-5 h-5" />
          </span>
          <span>{{ tab.label }}</span>
        </button>
      </div>
      
      <div class="mt-8">
        <!-- Global Payouts Tab Content -->
        <div v-if="activeTab === 'global-payouts'" class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <img src="@/assets/icons/tabs_global_payouts.svg" alt="" class="" />
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-[#1A1A1B] mb-6">Global<br />Payouts</h2>
              <p class="text-gray-700 mb-6">
                Expand globally with instant payouts to 100+ regions
                —scale effortlessly across borders, streamline
                operations, and grow your business without limits.
              </p>
              <NuxtLink to="/payouts" class="inline-flex items-center text-[#3BAB22] font-medium space-x-3">
                Learn about Payouts
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </NuxtLink>
            </div>
            <div class="flex justify-center md:justify-end">
              <img 
                src="@/assets/icons/global_payouts.svg" 
                alt="Global Payouts Illustration" 
                class="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <!-- Currency Exchange Tab Content -->
        <div v-else-if="activeTab === 'currency-exchange'" class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <img  src="@/assets/icons/tabs_currency_exchange.svg" alt="" class="" />
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-[#1A1A1B] mb-6">Currency<br />Exchange</h2>
              <p class="text-gray-700 mb-6">
                Seamlessly switch between USD, CNY(RMB), NGN, and
                more currencies in real-time, enhancing global
                financial management for your business.
              </p>
              <NuxtLink to="/currency-exchange" class="inline-flex items-center text-[#3BAB22] font-medium space-x-3">
                Learn about Exchange
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

              </NuxtLink>
            </div>
            <div class="flex justify-center md:justify-end">
              <img 
              src="@/assets/icons/currency_exchange.svg" 
                alt="Currency Exchange Illustration" 
                class="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <!-- API Integration Tab Content -->
        <div v-else-if="activeTab === 'api-integration'" class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <img src="@/assets/icons/tabs_api_integration.svg" alt="" class="" />
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-[#1A1A1B] mb-6">API<br />Integration</h2>
              <p class="text-gray-700 mb-6">
                Integrate global payment capabilities into your
                products, enabling features like Collections and
                Payouts in USD, NGN, CNY(RMB) and other currencies.
              </p>
              <NuxtLink to="/api-integration" class="inline-flex items-center text-[#3BAB22] font-medium space-x-3">
                Learn about API integration
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </NuxtLink>
            </div>
            <div class="flex justify-center md:justify-end">
              <img 
                src="@/assets/icons/api_integration.svg" 
                alt="API Integration Illustration" 
                class="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <!-- OTC Tab Content -->
        <div v-else-if="activeTab === 'otc'" class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <img  src="@/assets/icons/tabs_over_the_counter.svg" alt="" class="" />
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-[#1A1A1B] mb-6">(OTC) Over<br />the Counter</h2>
              <p class="text-gray-700 mb-6">
                Access a decentralized network to buy and sell
                directly with Capera, offering flexibility, customization,
                and access to unique financial instruments.
              </p>
              <NuxtLink to="/otc" class="inline-flex items-center text-[#3BAB22] font-medium space-x-3">
                Learn about OTC
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </NuxtLink>
            </div>
            <div class="flex justify-center md:justify-end">
              <img 
                src="@/assets/icons/over_the_counter.svg" 
                alt="OTC Illustration" 
                class="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import globalPayouts from "@/assets/icons/global-payouts.svg"
  import currencyExchange from "@/assets/icons/currency-exchange.svg"
  import apiIntegration from "@/assets/icons/api-integration.svg"
  import counter from "@/assets/icons/over-the-counter.svg"
  import { ref } from 'vue'
  
  interface Tab {
    id: string
    label: string
    icon: string
  }
  
  // Initialize with global-payouts as the default active tab
  const activeTab = ref('global-payouts')
  
  const tabs: Tab[] = [
    {
      id: 'global-payouts',
      label: 'Global Payout',
      icon: globalPayouts
    },
    {
      id: 'currency-exchange',
      label: 'Currency Exchange',
      icon: currencyExchange
    },
    {
      id: 'api-integration',
      label: 'API Integration',
      icon: apiIntegration
    },
    {
      id: 'otc',
      label: 'OTC (Over the counter)',
      icon: counter
    },
  ]
  </script>
  
  <style scoped>
  .feature-pill {
    @apply flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md;
  }
  
  .icon {
    @apply flex items-center justify-center mr-2;
  }
  </style>
  
  