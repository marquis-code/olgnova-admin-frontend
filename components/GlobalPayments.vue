<template>
    <div class="min-h-screen bg-white">
      <div class="">
        <!-- Header Section -->
        <div class="text-center mb-16 md:mb-24 px-4 container mx-auto md:pt-24">
          <h2 
            class="text-sm font-semibold tracking-wider uppercase mb-4 opacity-0 transform translate-y-4"
            :class="{ 'animate-fade-in-up': isVisible }"
          >
            INDUSTRY SOLUTIONS
          </h2>
          <h3 
            class="text-4xl md:text-5xl lg:text-6xl font-light leading-relaxed text-[#1A1A1B] leading-tight max-w-5xl mx-auto opacity-0 transform translate-y-4"
            :class="{ 'animate-fade-in-up delay-100': isVisible }"
          >
          Capera unifies every essential tool for seamless global payments operations. Whether you’re sending funds or collecting them, we streamline every step to simplify cross-border transactions.
          </h3>
        </div>
  
        <!-- Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pl-20">
          <!-- Financial Institutions Card -->
          <div 
            class="bg-[#F7F7F7] p-8 rounded-lg transition-all duration-500 hover:shadow-lg opacity-0 transform translate-y-4"
            :class="{ 'animate-fade-in-up delay-300': isVisible }"
            @mouseenter="hoverCard = 'financial'"
            @mouseleave="hoverCard = null"
          >
            <div class="h-16 w-16 mb-8" :class="{ 'animate-bounce-subtle': hoverCard === 'financial' }">
              <img src="@/assets/icons/financial-institutions.svg" />
            </div>
            <h3 class="text-3xl font-semibold mb-4">Financial institutions</h3>
            <p class="text-gray-600 leading-relaxed">
              Seamlessly integrate Capera's global payment solutions to elevate your financial institution's service portfolio.
            </p>
          </div>
  
          <!-- Global Commerce Card -->
          <div 
            class="bg-[#F7F7F7] p-8 rounded-lg transition-all duration-500 hover:shadow-lg opacity-0 transform translate-y-4"
            :class="{ 'animate-fade-in-up delay-400': isVisible }"
            @mouseenter="hoverCard = 'commerce'"
            @mouseleave="hoverCard = null"
          >
            <div class="h-16 w-16 mb-8" :class="{ 'animate-bounce-subtle': hoverCard === 'commerce' }">
              <!-- <ShoppingBagIcon class="h-full w-full" /> -->
               <img src="@/assets/icons/global-commerce.svg" />
            </div>
            <h3 class="text-3xl font-semibold mb-4">Global Commerce</h3>
            <p class="text-gray-600 leading-relaxed">
              Offer your international customers their preferred local payment methods and reduce processing fees by 5 to 10 times.
            </p>
          </div>
  
          <!-- Import & Export Card -->
          <div 
            class="bg-[#F7F7F7] p-8 rounded-lg transition-all duration-500 hover:shadow-lg opacity-0 transform translate-y-4"
            :class="{ 'animate-fade-in-up delay-500': isVisible }"
            @mouseenter="hoverCard = 'export'"
            @mouseleave="hoverCard = null"
          >
            <div class="h-16 w-16 mb-8" :class="{ 'animate-bounce-subtle': hoverCard === 'export' }">
              <!-- <GlobeIcon class="h-full w-full" /> -->
               <img src="@/assets/icons/import-export.svg" />
            </div>
            <h3 class="text-3xl font-semibold mb-4">Import & Export</h3>
            <p class="text-gray-600 leading-relaxed">
              Pay or get paid from your international partners instantly, no unreasonable fees.
            </p>
          </div>
        </div>

       
  
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'

  // State
  const isVisible = ref(false)
  const hoverCard = ref<string | null>(null)
  const showContactModal = ref(false)
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  // Methods
  const submitForm = () => {
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', form.value)
    alert('Thank you for your message! We will get back to you soon.')
    showContactModal.value = false
    form.value = { name: '', email: '', message: '' }
  }
  
  // Intersection observer to trigger animations when content is in view
  const target = ref(null)
  onMounted(() => {
    // Set a small timeout to ensure the animations play after page load
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  })
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
  
  @keyframes bounceSlight {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-bounce-subtle {
    animation: bounceSlight 1s ease-in-out infinite;
  }
  
  .delay-100 {
    animation-delay: 0.1s;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  
  .delay-300 {
    animation-delay: 0.3s;
  }
  
  .delay-400 {
    animation-delay: 0.4s;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  .delay-600 {
    animation-delay: 0.6s;
  }
  </style>