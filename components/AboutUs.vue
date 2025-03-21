<template>
    <div class="max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div class="relative rounded-3xl overflow-hidden">
        <!-- Main container with rounded corners -->
        <div class="relative">
          <!-- Hero image with coworking space -->
          <div class="relative">
            <img 
              src="/coworking-image.jpg" 
              alt="People collaborating in a coworking space" 
              class="w-full h-auto object-cover rounded-3xl"
            />
            
            <!-- Capera text overlay with blend effect -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 class="text-[120px] md:text-[180px] font-bold text-gray-200 opacity-80 mix-blend-overlay tracking-tighter">
                Capera
              </h1>
            </div>
          </div>
          
          <!-- Text content with rounded white background -->
          <div class="bg-white rounded-3xl p-8 md:p-12 mt-[-20px] relative z-10 mx-4 md:mx-8">
            <p class="text-center text-gray-800 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
              Capera enables seamless cross-border money transfers, facilitates local account fund reception, reduces foreign exchange fees, simplifies reconciliation processes, and accelerates settlement times, empowering your business to expand smoothly into new markets.
            </p>
            
            <div class="flex justify-center mt-8">
              <a href="#" class="inline-flex items-center text-green-500 font-medium">
                About us
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No additional script logic needed for this component
  </script>
  
  <style scoped>
  /* Custom styles for the blend effect */
  .mix-blend-overlay {
    mix-blend-mode: overlay;
  }
  
  /* Additional styling to match the design exactly */
  @media (min-width: 768px) {
    .mix-blend-overlay {
      letter-spacing: -0.05em;
    }
  }
  </style>