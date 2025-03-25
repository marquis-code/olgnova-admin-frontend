<template>
    <div class="min-h-screen bg-white">
      <div class="container mx-auto px-4 py-12 max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-sm font-medium uppercase tracking-wider text-gray-700 mb-4">OUR PLATFORM</h2>
          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Gain seamless access to top-tier global payment solutions with a single contract and API integration.
          </h1>
        </div>
  
        <div class="relative">
          <!-- Dotted world map background -->
          <div class="absolute inset-0 z-0">
            <div class="w-full h-full" ref="mapContainer"></div>
          </div>
  
          <!-- Payment UI elements -->
          <div class="relative z-10 py-8">
            <!-- Amount Card -->
            <div class="absolute top-10 left-4 md:left-20 bg-white rounded-xl shadow-lg p-4 w-64">
              <div class="text-xs text-gray-500 font-medium">AMOUNT</div>
              <div class="text-2xl font-bold mt-1">2,567.21 <span class="text-sm text-gray-500">USD</span></div>
              <div class="mt-2 border-t border-gray-100 pt-2">
                <div class="flex items-center">
                  <div class="text-gray-700 font-semibold">18,581.08</div>
                  <div class="text-xs text-gray-500 ml-1">CNY(RMB)</div>
                </div>
              </div>
            </div>
  
            <!-- Balance Card -->
            <div class="absolute top-40 left-1/3 bg-white rounded-xl shadow-lg p-4 w-72">
              <div class="text-2xl font-bold">24,988.63 <span class="text-sm text-gray-500">USD</span></div>
              <div class="flex items-center mt-1">
                <div class="w-5 h-5 rounded-full overflow-hidden mr-2 flex items-center justify-center bg-blue-50">
                  <div class="text-xs">🇺🇸</div>
                </div>
                <div class="text-xs text-gray-500">USD balance</div>
              </div>
              <div class="mt-4">
                <svg class="w-full h-16" viewBox="0 0 300 80">
                  <path 
                    d="M0,60 C20,55 40,65 60,50 C80,35 100,45 120,40 C140,35 160,25 180,30 C200,35 220,15 240,10 C260,5 280,20 300,15" 
                    fill="none" 
                    stroke="#65C466" 
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="mt-4">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="text-gray-500">
                      <th class="text-left font-medium pb-2">To/from</th>
                      <th class="text-left font-medium pb-2">Date</th>
                      <th class="text-right font-medium pb-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-1">Digital Corp.</td>
                      <td class="py-1">2 Mar 2025</td>
                      <td class="py-1 text-right">1234.54 USD</td>
                    </tr>
                    <tr>
                      <td class="py-1">Digital Corp.</td>
                      <td class="py-1">2 Mar 2025</td>
                      <td class="py-1 text-right">265.22 USD</td>
                    </tr>
                    <tr>
                      <td class="py-1">Digital Corp.</td>
                      <td class="py-1">2 Mar 2025</td>
                      <td class="py-1 text-right">265.22 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <!-- Payout notification -->
            <div class="absolute top-10 right-1/4 bg-white rounded-full shadow-lg py-2 px-4 flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <span class="text-green-500 text-lg">↗</span>
              </div>
              <div>
                <div class="text-sm font-medium">Payout sent</div>
              </div>
              <div class="ml-3 bg-gray-100 rounded-full px-2 py-1 text-xs">500.00 USD</div>
            </div>
  
            <!-- Green hashtag icon -->
            <div class="absolute top-1/3 right-20 bg-green-500 rounded-xl shadow-lg p-4 w-16 h-16 flex items-center justify-center">
              <div class="text-white text-2xl font-bold">#</div>
            </div>
  
            <!-- Send button -->
            <div class="absolute bottom-20 left-20 bg-green-500 rounded-full shadow-lg py-2 px-6">
              <button class="text-white font-medium flex items-center">
                Send
                <span class="ml-2 bg-green-600 rounded p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </div>
  
            <!-- Dollar icon -->
            <div class="absolute bottom-20 right-20 bg-gray-900 rounded-xl shadow-lg p-4 w-16 h-16 flex items-center justify-center">
              <div class="text-white text-2xl font-bold">$</div>
            </div>
  
            <!-- Small money icon -->
            <div class="absolute bottom-10 right-1/3 bg-white rounded-full shadow-lg p-2">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-green-500 text-lg">💵</span>
              </div>
            </div>
  
            <!-- Exchange icon -->
            <div class="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-2">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-green-500 text-lg">↻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const mapContainer = ref<HTMLElement | null>(null);
  
  // Function to create the dotted world map
  const createDottedMap = () => {
    if (!mapContainer.value) return;
    
    const container = mapContainer.value;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    
    // Create a simplified world map using dots
    // This is a simplified representation - in a real app you'd use a proper map library
    const dotSize = 3;
    const dotSpacing = 15;
    const rows = Math.floor(height / dotSpacing);
    const cols = Math.floor(width / dotSpacing);
    
    // Create a circular pattern that resembles a world map
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Create a circular pattern
        const centerX = width / 2;
        const centerY = height / 2;
        const dx = x * dotSpacing - centerX;
        const dy = y * dotSpacing - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only draw dots that form a circular pattern
        if (distance > width * 0.15 && distance < width * 0.45) {
          // Add some randomness to make it look more natural
          if (Math.random() > 0.3) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', (x * dotSpacing).toString());
            circle.setAttribute('cy', (y * dotSpacing).toString());
            circle.setAttribute('r', dotSize.toString());
            circle.setAttribute('fill', '#CCCCCC');
            svg.appendChild(circle);
          }
        }
      }
    }
    
    container.appendChild(svg);
  };
  
  onMounted(() => {
    createDottedMap();
    
    // Recreate the map when window is resized
    window.addEventListener('resize', createDottedMap);
  });
  </script>
  
  <style scoped>
  /* Additional styles can be added here if needed */
  </style>