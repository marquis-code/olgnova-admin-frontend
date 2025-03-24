<template>
 <main class="m-4">
    <div class="relative w-full overflow-hidden rounded-3xl  bg-[#1A1A1B] text-white">
      <!-- Main content -->
      <div class="relative z-10 px-6 py-16 text-center md:px-12 md:py-24 mb-60">
        <h2 class="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          START MAKING PAYMENTS<br />TODAY
        </h2>
        <p class="mx-auto mb-10 max-w-2xl text-base md:text-lg">
          Secure, instant transactions with no hidden fees—begin your journey to smarter financial management now.
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button class="rounded-full bg-[#3BAB22] px-8 py-3 font-medium text-white transition hover:bg-green-600">
            Get started
          </button>
          <button class="rounded-full text-[#1A1A1B] px-8 py-3 font-medium bg-white transition">
            Explore our docs
          </button>
        </div>
      </div>
  
      <!-- Dotted map background -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <!-- Large semi-transparent "Capera" text -->
        <div class="absolute bottom-0 left-0 w-full text-center opacity-10">
          <span class="text-[20vw] font-bold leading-none text-gray-500">Capera</span>
        </div>
        
        <!-- Dotted map pattern -->
        <!-- <div class="dotted-map h-full w-full"></div> -->
        <img src="@/assets/icons/map-vector.svg" class="mt-96" />
        
        <!-- Green dots -->
        <div class="absolute left-[28%] top-[68%] h-2 w-2 rounded-full bg-green-500"></div>
        <div class="absolute left-[12%] top-[78%] h-2 w-2 rounded-full bg-green-500"></div>
        <div class="absolute left-[85%] top-[72%] h-2 w-2 rounded-full bg-green-500"></div>
        <div class="absolute left-[52%] top-[60%] h-2 w-2 rounded-full bg-green-500"></div>
        <div class="absolute left-[65%] top-[80%] h-2 w-2 rounded-full bg-green-500"></div>
      </div>
    </div>
 </main>
  </template>
  
  <script setup lang="ts">
  // No additional script logic needed for this component
  </script>
  
  <style scoped>
  .dotted-map {
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: url("data:image/svg+xml,%3Csvg width='1200' height='600' viewBox='0 0 1200 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1200 0H0V600H1200V0Z' fill='url(%23paint0_radial_0_1)'/%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_0_1' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(600 300) scale(600 300)'%3E%3Cstop offset='0.1' stop-color='white'/%3E%3Cstop offset='1' stop-color='white' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E");
    mask-size: 100% 100%;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    .dotted-map {
      background-size: 12px 12px;
    }
  }
  </style>