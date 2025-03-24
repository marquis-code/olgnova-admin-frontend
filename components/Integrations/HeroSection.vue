<template>
  <Glassy />
  <section class="bg-[#1C5310] text-white pt-24 pb-16 relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      <div class="grid grid-cols-12 h-full">
        <div v-for="i in 12" :key="i" class="border-r border-white/10"></div>
      </div>
      <div class="grid grid-rows-12 h-full absolute inset-0">
        <div v-for="i in 12" :key="i" class="border-b border-white/10"></div>
      </div>
    </div>
    <!-- Introducing the   -->
    <!-- — capera open API -->
    <div class="container mx-auto px-4 relative">
      <p class="text-center mb-2 opacity-90">API INTEGRATION</p>
      <main class="container mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl md:text-7xl pb-0 mb-0 font-bold text-white uppercase"
        >
          Introducing the
        </h1>
        <div class="flex items-center pt-0 justify-center">
          <div class="w-8 h-2.5 bg-white mr-4"></div>
          <h1 class="text-5xl md:text-7xl font-bold text-light-green uppercase">
            capera open API
          </h1>
        </div>
      </main>
      <p
        class="text-center max-w-lg mx-auto leading-relaxed mb-12 opacity-90"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
      >
        Integrate global payment capabilities into your products, enabling
        features like FX conversions, Collections and Payouts in USD, NGN,
        CNY(RMB) and other currencies
      </p>
      <div class="flex justify-center mb-16">
        <button
          class="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { delay: 800, duration: 500 },
          }"
        >
          Explore our docs
        </button>
      </div>

      <div class="flex justify-center items-center">
        <img src="@/assets/icons/hero-codes.svg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Navbar from "../Navbar.vue";
</script>
