<template>
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="relative">
        <!-- Carousel container -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out" 
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <!-- Testimonial slides -->
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="w-full flex-shrink-0 flex flex-col md:flex-row gap-6"
            >
              <!-- Company logo card -->
              <div class="bg-dark-green rounded-3xl p-8 flex items-center justify-center w-full md:w-5/12">
                <div class="flex items-center">
                  <img 
                    :src="testimonial.logoSrc" 
                    :alt="testimonial.company" 
                    class="h-12"
                  />
                </div>
              </div>
              
              <!-- Testimonial content -->
              <div class="bg-gray-50 rounded-3xl p-8 md:p-12 w-full md:w-7/12">
                <blockquote class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  "{{ testimonial.quote }}"
                </blockquote>
                <div class="text-gray-600">
                  {{ testimonial.author }}, {{ testimonial.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation arrows -->
        <div class="flex justify-center md:justify-start mt-8 md:mt-12 md:pl-[60%]">
          <button 
            @click="prevSlide" 
            class="bg-gray-100 hover:bg-gray-200 rounded-full p-4 mr-4 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide" 
            class="bg-gray-100 hover:bg-gray-200 rounded-full p-4 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  interface Testimonial {
    quote: string;
    author: string;
    title: string;
    company: string;
    logoSrc: string;
  }
  
  // Sample testimonial data
  const testimonials = ref<Testimonial[]>([
    {
      quote: "Capera's capabilities cannot be beaten. Their ability to take care of everything from funding to payouts through a single contract and API has saved us time",
      author: "Kelvin Edosa",
      title: "Co-founder & CEO of Zappie",
      company: "Zappie",
      logoSrc: "/zappie-logo.svg"
    },
    {
      quote: "We've reduced our payment processing time by 70% since integrating with Capera's API. Their global coverage is unmatched in the industry.",
      author: "Sarah Johnson",
      title: "CTO of TechFlow",
      company: "TechFlow",
      logoSrc: "/techflow-logo.svg"
    },
    {
      quote: "The seamless integration and robust documentation made implementation a breeze. Our finance team couldn't be happier with the results.",
      author: "Michael Chen",
      title: "Head of Finance at GlobalPay",
      company: "GlobalPay",
      logoSrc: "/globalpay-logo.svg"
    }
  ]);
  
  const currentIndex = ref(0);
  const autoplayInterval = ref<number | null>(null);
  
  // Navigation methods
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  };
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
  };
  
  // Autoplay functionality
  const startAutoplay = () => {
    autoplayInterval.value = window.setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  };
  
  const stopAutoplay = () => {
    if (autoplayInterval.value) {
      clearInterval(autoplayInterval.value);
      autoplayInterval.value = null;
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    startAutoplay();
  });
  
  onBeforeUnmount(() => {
    stopAutoplay();
  });
  </script>
  
  <style scoped>
  .bg-dark-green {
    background-color: #1a3c1a;
    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  </style>