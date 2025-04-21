<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12 md:py-24">
      <!-- Header Section -->
      <div class="text-center mb-16 md:mb-24">
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

    <!-- Carousel Section - Full Width -->
    <div class="relative w-full px-3">
      <div class="overflow-hidden w-full">
        <div 
          ref="carouselRef" 
          class="flex transition-transform duration-300 ease-in-out"
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
              class="bg-[#F7F7F7] p-8 rounded-lg transition-all duration-500 hover:shadow-lg h-full opacity-0 transform translate-y-4"
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
              <h3 class="text-2xl font-semibold mb-4">{{ card.title }}</h3>
              <p class="text-gray-600 leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <!-- <div class="container mx-auto px-4 flex justify-center mt-8">
        <button 
          @click="prevSlide" 
          class="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm mr-2 hover:bg-gray-50 focus:outline-none"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          @click="nextSlide" 
          class="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm ml-2 hover:bg-gray-50 focus:outline-none"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div> -->

      <!-- Pagination Dots -->
      <!-- <div class="container mx-auto px-4 flex justify-center mt-4">
        <button 
          v-for="(_, index) in Array(totalSlides)" 
          :key="index"
          @click="goToSlide(index)"
          class="h-2 w-2 mx-1 rounded-full focus:outline-none"
          :class="currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div> -->
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
const { width } = useWindowSize();

// Computed properties
const visibleSlides = computed(() => {
  if (width.value < 768) return 1;
  if (width.value < 1024) return 2;
  return 3;
});

const totalSlides = computed(() => {
  return Math.ceil(industryCards.length / visibleSlides.value);
});

// Industry cards data
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

// Methods
const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Loop back to the first slide
  }
  resetAutoplay();
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = totalSlides.value - 1; // Loop to the last slide
  }
  resetAutoplay();
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
  resetAutoplay();
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 7000);
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
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e: TouchEvent) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
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
  // Set a small timeout to ensure the animations play after page load
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