<template>
    <div class="overflow-hidden relative w-full">
      <div
        class="flex animate-marquee"
        :style="{ animationDuration: `${scrollDuration}s` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex-shrink-0 w-40 h-40 mx-4"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-full h-full rounded-md"
          />
        </div>
        <!-- Duplicate the images to create a seamless loop -->
        <div
          v-for="(image, index) in images"
          :key="'duplicate-' + index"
          class="flex-shrink-0 w-40 h-40 mx-4"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import countries from "@/assets/img/countries-supported.png"
  import { ref } from 'vue'
  
  interface Image {
    src: string
    alt: string
  }
  
  // Example image data
  const images: Image[] = [
    { src: countries, alt: 'Image 1' },
    // { src: countries, alt: 'Image 2' },
    // { src: countries, alt: 'Image 3' },
    // { src: countries, alt: 'Image 4' },
  ]
  
  const scrollDuration = 10 // Duration for one complete scroll (in seconds)
  </script>
  
  <style scoped>
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .animate-marquee {
    animation: marquee linear infinite;
  }
  </style>
  