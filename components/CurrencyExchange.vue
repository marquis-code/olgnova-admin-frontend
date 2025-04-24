<template>
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        <!-- Left side content -->
        <div class="max-w-xl">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Get more value for your USD, CNY (RMB), and EUR with every payment.
          </h1>
          <p class="text-gray-700 mb-6 text-base md:text-lg">
            Effortlessly manage global transactions with Capera. Send payments to partners in 60+ countries, ensuring transparent pricing with no hidden fees.
          </p>
          <NuxtLink to="/currency-exchange" class="inline-flex items-center text-[#3BAB22] font-medium hover:underline">
            Learn about Currency Exchange
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </NuxtLink>
        </div>
  
        <!-- Right side currency converter -->
        <div class="">
          <CurrencyCalculator />
              <!-- <img src="@/assets/img/capera-value.png" class="h-full w-full" /> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const amount = ref('1,000');
  </script>