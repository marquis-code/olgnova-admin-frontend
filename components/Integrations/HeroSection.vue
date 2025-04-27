<template>
<NavbarSticky />
<section class="p-4">
  <section class="bg-[#1C5310] text-white h-[130vh] pt-56 pb-16 rounded-3xl relative overflow-hidden">
    <div class="absolute inset-0 grid-background"></div>
    <!-- <div class="absolute inset-0 opacity-20">
      <div class="grid grid-cols-12 h-full">
        <div v-for="i in 12" :key="i" class="border-r border-white/10"></div>
      </div>
      <div class="grid grid-rows-12 h-full absolute inset-0">
        <div v-for="i in 12" :key="i" class="border-b border-white/10"></div>
      </div>
    </div> -->
    <!-- Introducing the   -->
    <!-- — capera open API -->
    <div class="container mx-auto px-4 relative">
      <p class="text-center mb-2 opacity-90">API INTEGRATION</p>
      <div class="relative z-10 container mx-auto lg:px-4 text-center">
        <h1 class="text-5xl lg:text-8xl md:text-8xl font-bold text-white mb-4">
          INTRODUCING THE
          <div class="flex items-center justify-center">
            <div class="w-16 h-3 bg-[#3BAB22] mr-4"></div>
            <span class="text-[#3BAB22]">CAPERA OPEN API</span>
          </div>
          <!-- <span class="text-[#3BAB22]">CUSTOMERS</span> -->
        </h1>
        </div>
      <!-- <main class="container mx-auto px-4 text-center relative z-10">
        <h1
          class="text-5xl md:text-7xl pb-0 mb-0 font-bold text-white uppercase"
        >
          Introducing the
        </h1>
        <div class="flex items-center text-xl pt-0 justify-center">
          <div class="w-8 h-2.5 bg-white mr-4"></div>
          <h1 class="text-5xl md:text-7xl -mt- font-bold text-light-green uppercase">
            capera open API
          </h1>
        </div>
      </main> -->
      <p
        class="text-center max-w-lg mx-auto text-[18px] lg:text-[20px] leading-relaxed mb-12 opacity-90"
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

      <div class="lg:flex absolute  mx-auto justify-center items-center mt-10">
        <img src="@/assets/icons/hero-codes.svg" />
      </div>
    </div>
  </section>
</section>
</template>

<script setup lang="ts">
import Navbar from "../Navbar.vue";
</script>

<style>
.grid-background {
  background-color: #1C5210; /* Match the base color */
  background-image: url('/assets/icons/bg-mesh.svg'); /* Replace with the actual path */
  /* background-size: 100px 100px; */
  /* background-position: center center; */
  /* background-repeat: repeat; */
  z-index: -0.5;
}

</style>
