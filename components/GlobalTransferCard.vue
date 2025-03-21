<template>
    <div class="max-w-5xl mx-auto px-4 py-8">
      <div class="bg-green-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <!-- Grid overlay - only covers the background, not the globe -->
        <div class="absolute inset-0 grid-pattern"></div>
        
        <!-- Content container -->
        <div class="relative z-10">
          <!-- Heading -->
          <h1 class="text-white text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
            MOVE MONEY GLOBALLY<br />IN SECONDS
          </h1>
          
          <!-- Subtext -->
          <p class="text-white text-center max-w-2xl mx-auto mb-8 opacity-90 text-base md:text-lg">
            Transfer funds faster to and from your digital accounts via 
            bank transfers or mobile wallets in 60+ countries. Enjoy 
            real-time payments at a fraction of the cost of bank wires.
          </p>
          
          <!-- CTA Button -->
          <div class="flex justify-center mb-12">
            <a href="#" class="inline-flex items-center text-white font-medium hover:underline">
              Learn about Payout
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          
          <!-- Globe Visualization -->
          <div class="relative flex justify-center">
            <div class="globe-container relative">
              <!-- Globe with mesh pattern -->
              <div class="globe">
                <!-- The mesh pattern is applied only to the globe via CSS -->
              </div>
              
              <!-- Transfer routes - curved lines -->
              <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <path d="M200,80 Q300,150 350,200" stroke="white" fill="none" stroke-width="1" opacity="0.7" />
                <path d="M200,80 Q100,150 50,200" stroke="white" fill="none" stroke-width="1" opacity="0.7" />
                <path d="M150,100 Q200,200 300,250" stroke="white" fill="none" stroke-width="1" opacity="0.7" />
                <path d="M250,100 Q200,200 100,250" stroke="white" fill="none" stroke-width="1" opacity="0.7" />
                <path d="M200,50 Q250,150 350,150" stroke="white" fill="none" stroke-width="1" opacity="0.7" />
                <path d="M200,50 Q150,150 50,150" stroke="white" fill="none" stroke-width="1" opacity="0.7" />
                
                <!-- Connection dots -->
                <circle cx="200" cy="80" r="3" fill="white" />
                <circle cx="350" cy="200" r="3" fill="white" />
                <circle cx="50" cy="200" r="3" fill="white" />
                <circle cx="300" cy="250" r="3" fill="white" />
                <circle cx="100" cy="250" r="3" fill="white" />
                <circle cx="350" cy="150" r="3" fill="white" />
                <circle cx="50" cy="150" r="3" fill="white" />
              </svg>
              
              <!-- Transaction notification -->
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full py-2 px-4 flex items-center shadow-lg">
                <div class="w-6 h-6 rounded-full overflow-hidden mr-3">
                  <img src="/us-flag.svg" alt="US Flag" class="w-full h-full object-cover" />
                </div>
                <span class="font-medium mr-3">Sent</span>
                <span class="font-bold">$398</span>
              </div>
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
  .grid-pattern {
    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  
  .globe-container {
    width: 300px;
    height: 300px;
    position: relative;
  }
  
  .globe {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(0, 100, 0, 0.8); /* Darker green for the globe */
    position: relative;
    overflow: hidden;
  }
  
  /* Apply the mesh pattern ONLY to the globe */
  .globe::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(255,255,255,0.05) 30.5%, rgba(255,255,255,0.05) 31%, transparent 31.5%, transparent 100%),
                      radial-gradient(circle at 70% 40%, transparent 0%, transparent 20%, rgba(255,255,255,0.1) 20.5%, rgba(255,255,255,0.1) 21%, transparent 21.5%, transparent 100%);
    background-size: 20px 20px, 30px 30px;
    opacity: 0.7;
  }
  
  /* Create the continents effect with a dotted pattern */
  .globe::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,.3)' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-size: 50px 50px;
    mask-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,30 C60,10 140,10 170,30 C190,60 190,140 170,170 C140,190 60,190 30,170 C10,140 10,60 30,30 Z' fill='black'/%3E%3C/svg%3E");
    mask-size: 100% 100%;
    mask-position: center;
  }
  </style>