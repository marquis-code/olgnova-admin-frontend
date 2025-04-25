<template>
<main>
    <section class="max-w-7xl mx-auto px-6">
      <h2 class="text-[16px] lg:text-[20px] text-[#1A1A1B] pb-20 font-medium text-center">PLATFORM BENEFITS</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(benefit, index) in benefits" :key="index" class="space-y-3">
          <div class="">
            <!-- <component :is="benefit.icon" /> -->
             <img :src="benefit.icon" />
          </div>
          <h3 class="text-[#1A1A1B] font-medium text-lg lg:text-2xl">{{ benefit.title }}</h3>
          <p class="text-[#454745] text-[14px] leading-relaxed">{{ benefit.description }}</p>
        </div>
      </div>
    </section>
    <div class="p-6 mt-14">
        <img src="@/assets/img/smiling.png" class="w-full h-full" />
    </div>
</main>
  </template>
  
  <script setup lang="ts">
  import globalIcon from "@/assets/icons/global.svg"
  import fx from "@/assets/icons/fx-fees.svg"
  import processing from "@/assets/icons/processing.svg"
  import streamline from "@/assets/icons/streamline.svg"
  import { ref } from 'vue';
  
  // Define the benefits data
  const benefits = ref([
    {
      icon: globalIcon,
      title: 'Gain access to more than 100 regions',
      description: 'Effortlessly expand into new markets with confidence.'
    },
    {
      icon: fx,
      title: 'Minimise FX fees',
      description: 'Avoid expensive conversion fees by making payments directly in the local currency.'
    },
    {
      icon: processing,
      title: 'Accelerate transaction processing times',
      description: 'Enjoy the benefits of instant and same-day settlements with our genuine local accounts.'
    },
    {
      icon: streamline,
      title: 'Streamline reconciliation',
      description: 'Streamline your processes and effortlessly monitor all your transactions using our API or intuitive dashboard.'
    }
  ]);
  </script>
  
  <style scoped>
  
  .platform-benefits__title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4rem;
    letter-spacing: 0.05em;
  }
  
  .platform-benefits__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2.5rem;
  }
  
  .benefit {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .benefit__icon {
    margin-bottom: 1.5rem;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .benefit__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .benefit__description {
    font-size: 1rem;
    line-height: 1.5;
    color: #4a4a4a;
    max-width: 300px;
  }
  
  /* Responsive styles */
  @media (min-width: 640px) {
    .platform-benefits__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .platform-benefits__grid {
      grid-template-columns: repeat(4, 1fr);
    }
    
    .platform-benefits__title {
      font-size: 1.75rem;
    }
    
    .benefit {
      padding: 0 1rem;
    }
  }
  </style>