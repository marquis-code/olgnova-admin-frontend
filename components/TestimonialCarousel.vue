<template>
    <div class="lg:px-6 py-12 px-3">
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
              <div class="w-full md:w-5/12">
                <img 
                    :src="testimonial.logoSrc" 
                    :alt="testimonial.company" 
                    class="w-[560px] h-[568px] object-cover rounded-xl"
                  />
              </div>
              
              <!-- Testimonial content -->
              <div class="bg-gray-50 rounded-3xl p-8 md:p-[48px] w-full h-[568px] md:w-[704px]">
                <h1 style="font-weight: 700;" class="text-[30px] lg:leading-[60px] md:text-5xl font-medium text-[#1A1A1B] mb-6">
                  "{{ testimonial.quote }}"
                </h1>
                <div class="text-gray-600 text-[22px]">
                  {{ testimonial.author }}, {{ testimonial.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation arrows -->
        <div class="flex justify-center md:justify-center mt-8 md:mt-12">
          <button 
            @click="prevSlide" 
            class="bg-gray-100 hover:bg-gray-200 rounded-full p-4 mr-4 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 24C6 22.8954 6.89544 22 8 22H40C41.1046 22 42 22.8954 42 24C42 25.1046 41.1046 26 40 26H8C6.89544 26 6 25.1046 6 24Z" fill="#1A1A1B"/>
<path d="M10.0557 24C10.2423 24.3096 10.6335 24.8658 11.0612 25.3498C11.9127 26.3136 13.0862 27.4144 14.3112 28.4778C15.5263 29.5328 16.7472 30.5128 17.6679 31.2312C18.1273 31.5896 18.9199 32.1884 19.1862 32.3896C20.0754 33.0446 20.2654 34.2966 19.6104 35.1858C18.9554 36.0752 17.7034 36.2652 16.814 35.6102L16.8066 35.6046C16.5178 35.3866 15.6806 34.7542 15.207 34.3846C14.2528 33.64 12.9737 32.614 11.6888 31.4984C10.4138 30.3914 9.08724 29.1568 8.06374 27.9984C7.554 27.4216 7.07712 26.8164 6.71684 26.2188C6.38968 25.676 6.00004 24.8864 6 24C6.00004 23.1138 6.38968 22.324 6.71684 21.7812C7.07712 21.1836 7.554 20.5784 8.06372 20.0016C9.08724 18.8432 10.4138 17.6087 11.6888 16.5017C12.9737 15.3861 14.2528 14.36 15.207 13.6153C15.6806 13.2458 16.5173 12.6139 16.806 12.3958L16.814 12.3897C17.7034 11.7347 18.9554 11.9247 19.6104 12.8141C20.2654 13.7035 20.0754 14.9554 19.1862 15.6104C18.9199 15.8115 18.1273 16.4103 17.6679 16.7687C16.7472 17.4873 15.5263 18.4671 14.3112 19.5221C13.0862 20.5856 11.9127 21.6864 11.0612 22.6502C10.6335 23.1342 10.2423 23.6904 10.0557 24Z" fill="#1A1A1B"/>
</svg>

          </button>
          <button 
            @click="nextSlide" 
            class="bg-gray-100 hover:bg-gray-200 rounded-full p-4 transition-colors duration-200"
            aria-label="Next testimonial"
          >
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4142 12.5858C30.6332 11.8047 29.3668 11.8047 28.5858 12.5858C27.8048 13.3668 27.8048 14.6332 28.5858 15.4142L35.1716 22H8C6.89544 22 6 22.8954 6 24C6 25.1046 6.89544 26 8 26H35.1716L28.5858 32.5858C27.8048 33.3668 27.8048 34.6332 28.5858 35.4142C29.367 36.1952 30.6332 36.1952 31.4144 35.4142L41.4036 25.4248C41.4404 25.3884 41.476 25.3506 41.51 25.3116C41.645 25.1562 41.7522 24.9852 41.8316 24.8048C41.9392 24.5602 41.9992 24.29 42 24.006V24C42 23.9938 42 23.9876 42 23.9814C41.9976 23.73 41.949 23.4894 41.862 23.2682C41.7644 23.0196 41.6152 22.7866 41.4142 22.5858L31.4142 12.5858Z" fill="#1A1A1B"/>
</svg>

          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import testimonial4 from '@/assets/img/testimonial4.png'
  import testimonial5 from '@/assets/img/testimonial5.png'
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
      logoSrc: testimonial4
    },
    {
      quote: "We've reduced our payment processing time by 70% since integrating with Capera's API. Their global coverage is unmatched in the industry.",
      author: "Sarah Johnson",
      title: "CTO of TechFlow",
      company: "TechFlow",
      logoSrc: testimonial5
    },
    // {
    //   quote: "The seamless integration and robust documentation made implementation a breeze. Our finance team couldn't be happier with the results.",
    //   author: "Michael Chen",
    //   title: "Head of Finance at GlobalPay",
    //   company: "GlobalPay",
    //   logoSrc: "/globalpay-logo.svg"
    // }
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