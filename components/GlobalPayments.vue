<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 
          class="text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 transform translate-y-4"
          :class="{ 'animate-fade-in-up': isVisible }"
        >
          INDUSTRY SOLUTIONS
        </h2>
        <h3 
          class="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#1A1A1B] max-w-5xl mx-auto opacity-0 transform translate-y-4"
          :class="{ 'animate-fade-in-up delay-100': isVisible }"
        >
          Capera unifies every essential tool for seamless global payments operations. Whether you're sending funds or collecting them, we streamline every step to simplify cross-border transactions.
        </h3>
      </div>
    </div>

    <!-- Industry Cards Carousel Component -->
    <!-- <IndustryCarousel 
      :cards="industryCards" 
      :is-parent-visible="isVisible"
      :autoplay-duration="7000"
      @slide-change="handleSlideChange"
    /> -->
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import IndustryCarousel from '~/components/IndustryCarousel.vue';

// State
const isVisible = ref(true);

// // Industry cards data
// const industryCards = [
//   {
//     id: "financial",
//     icon: 'Building2Icon',
//     title: "Financial institutions",
//     description: "Seamlessly integrate Capera's global payment solutions to elevate your financial institution's service portfolio."
//   },
//   {
//     id: "commerce",
//     icon: 'ShoppingBagIcon',
//     title: "Global Commerce",
//     description: "Offer your international customers their preferred local payment methods and reduce processing fees by 5 to 10 times."
//   },
//   {
//     id: "export",
//     icon: 'GlobeIcon',
//     title: "Import & Export",
//     description: "Pay or get paid from your international partners instantly, no unreasonable fees."
//   },
//   {
//     id: "travel",
//     icon: 'PlaneIcon',
//     title: "Travel & Hospitality",
//     description: "Enable your international travellers to pay effortlessly with competitive exchange rates and zero hidden fees."
//   },
//   {
//     id: "marketplace",
//     icon: 'StoreIcon',
//     title: "Marketplaces & On-Demand Platforms",
//     description: "Helping you seamlessly collect funds and pay sellers and suppliers all around the world."
//   },
//   {
//     id: "gaming",
//     icon: 'Gamepad2Icon',
//     title: "Gaming & Entertainment",
//     description: "Receive payments globally with ease. Enjoy instant settlements and robust fraud protection with Capera."
//   }
// ];

// // Methods
// const handleSlideChange = (slideIndex: number) => {
//   // You can add any logic here to respond to slide changes
//   console.log(`Slide changed to: ${slideIndex}`);
// };

// // Lifecycle hooks
// onMounted(() => {
//   // Set a small timeout to ensure the animations play after page load
//   setTimeout(() => {
//     isVisible.value = true;
//   }, 100);
// });
</script>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}
</style>