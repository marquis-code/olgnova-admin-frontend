<template>
    <div class="relative w-full px-3">
      <div class="overflow-hidden w-full">
        <div 
          ref="carouselRef" 
          class="flex transition-transform duration-700 ease-out"
          :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div 
            v-for="(card, index) in industryCards" 
            :key="card.id"
            class="flex-shrink-0 px-2"
            :style="{ width: `${100 / visibleSlides}%` }"
          >
            <div 
              class="bg-[#F7F7F7] p-10 rounded-lg transition-all flex flex-col justify-between duration-500 hover:shadow-lg h-full opacity-0 transform translate-y-4"
              :class="{ [`animate-fade-in-up delay-${(index + 3) * 100}`]: isVisible }"
              @mouseenter="hoverCard = card.id"
              @mouseleave="hoverCard = null"
            >
              <div 
                class="h-16 w-16 mb-8 text-[#1A1A1B]"
                :class="{ 'animate-bounce-subtle': hoverCard === card.id }"
              >
                <component :is="card.icon" class="h-full w-full" />
              </div>
              <h3 class="text-2xl lg:text-5xl font-semibold lg:my-[64px]">{{ card.title }}</h3>
              <p class="text-[#454745] text-[16px] lg:text-lg mt-10 leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
          </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
  import { useWindowSize } from '@vueuse/core';
  
  // State
  const isVisible = ref(false);
  const hoverCard = ref<string | null>(null);
  const currentSlide = ref(0);
  const carouselRef = ref<HTMLElement | null>(null);
  const autoplayInterval = ref<NodeJS.Timeout | null>(null);
  const touchStartX = ref(0);
  const touchEndX = ref(0);
  const slideWidth = ref(100);
  const isTransitioning = ref(false);
  const autoplayDuration = 7000;
  const { width } = useWindowSize();
  
  // Industry cards data - now defined directly within the component
  const industryCards = [
    {
      id: "financial",
      icon: 'Building2Icon',
      title: "Financial institutions",
      description: "Seamlessly integrate Capera's global payment solutions to elevate your financial institution's service portfolio."
    },
    {
      id: "commerce",
      icon: 'ShoppingBagIcon',
      title: "Global Commerce",
      description: "Offer your international customers their preferred local payment methods and reduce processing fees by 5 to 10 times."
    },
    {
      id: "export",
      icon: 'GlobeIcon',
      title: "Import & Export",
      description: "Pay or get paid from your international partners instantly, no unreasonable fees."
    },
    {
      id: "travel",
      icon: 'PlaneIcon',
      title: "Travel & Hospitality",
      description: "Enable your international travellers to pay effortlessly with competitive exchange rates and zero hidden fees."
    },
    {
      id: "marketplace",
      icon: 'StoreIcon',
      title: "Marketplaces & On-Demand Platforms",
      description: "Helping you seamlessly collect funds and pay sellers and suppliers all around the world."
    },
    {
      id: "gaming",
      icon: 'Gamepad2Icon',
      title: "Gaming & Entertainment",
      description: "Receive payments globally with ease. Enjoy instant settlements and robust fraud protection with Capera."
    }
  ];
  
  // Computed properties
  const visibleSlides = computed(() => {
    if (width.value < 768) return 1;
    if (width.value < 1024) return 2;
    return 3;
  });
  
  const totalSlides = computed(() => {
    return Math.ceil(industryCards.length / visibleSlides.value);
  });
  
  // Methods
  const nextSlide = () => {
    if (isTransitioning.value) return;
    
    isTransitioning.value = true;
    
    if (currentSlide.value < totalSlides.value - 1) {
      currentSlide.value++;
    } else {
      currentSlide.value = 0; // Loop back to the first slide
    }
    
    resetAutoplay();
    
    setTimeout(() => {
      isTransitioning.value = false;
    }, 700); // Match this with the transition duration
  };
  
  const prevSlide = () => {
    if (isTransitioning.value) return;
    
    isTransitioning.value = true;
    
    if (currentSlide.value > 0) {
      currentSlide.value--;
    } else {
      currentSlide.value = totalSlides.value - 1; // Loop to the last slide
    }
    
    resetAutoplay();
    
    setTimeout(() => {
      isTransitioning.value = false;
    }, 700); // Match this with the transition duration
  };
  
  const goToSlide = (index: number) => {
    if (isTransitioning.value || currentSlide.value === index) return;
    
    isTransitioning.value = true;
    currentSlide.value = index;
    resetAutoplay();
    
    setTimeout(() => {
      isTransitioning.value = false;
    }, 700); // Match this with the transition duration
  };
  
  const startAutoplay = () => {
    stopAutoplay();
    autoplayInterval.value = setInterval(() => {
      nextSlide();
    }, autoplayDuration);
  };
  
  const stopAutoplay = () => {
    if (autoplayInterval.value) {
      clearInterval(autoplayInterval.value);
      autoplayInterval.value = null;
    }
  };
  
  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };
  
  // Touch handlers for swipe functionality
  const handleTouchStart = (e: TouchEvent) => {
    if (isTransitioning.value) return;
    touchStartX.value = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    if (isTransitioning.value) return;
    touchEndX.value = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (isTransitioning.value) return;
    
    const touchDiff = touchStartX.value - touchEndX.value;
    
    // If the touch difference is significant enough (more than 50px), change slide
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        nextSlide(); // Swipe left
      } else {
        prevSlide(); // Swipe right
      }
    }
    
    // Reset touch values
    touchStartX.value = 0;
    touchEndX.value = 0;
  };
  
  // Watch for window resize to adjust visible slides
  watch(visibleSlides, () => {
    // Ensure current slide is valid after resize
    if (currentSlide.value >= totalSlides.value) {
      currentSlide.value = totalSlides.value - 1;
    }
  });
  
  // Lifecycle hooks
  onMounted(() => {
    // Set visibility to true after component mounts
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
    
    // Start autoplay
    startAutoplay();
  });
  
  onBeforeUnmount(() => {
    // Clean up interval when component is destroyed
    stopAutoplay();
  });
  </script>
  
  <style scoped>
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
  
  /* Improved carousel animation */
  .transition-transform {
    will-change: transform;
  }
  
  /* Smooth cubic-bezier easing for the carousel slide */
  .ease-out {
    transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  }
  </style>