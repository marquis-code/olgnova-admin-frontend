<template>
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div>
          <h2 class="text-2xl lg:text-5xl font-semibold mb-6">Getting started is easy.</h2>
          <p class="text-[16px] lg:text-[22px] text-[#1A1A1B] mb-6">
            Getting a sandbox account is quick and easy—it only takes a few minutes. Once you're set up, you can immediately start testing and building with our API.
          </p>
          <p class="text-[16px] lg:text-[22px] text-[#1A1A1B]">
            When you're ready to go live, simply log in to your Capera Business account to access your live API keys.
          </p>
        </div>
        
        <!-- Dashboard Image -->
        <div class="relative">
           <img src="@/assets/img/getting-started.png" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const handleImageError = (e: Event) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder.svg?height=400&width=600';
  };
  </script>