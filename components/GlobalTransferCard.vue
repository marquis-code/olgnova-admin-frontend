<template>
  <div class="relative flex flex-col rounded-3xl m-3 py-32 items-center justify-center min-h-screen bg-[#3BAB22]">
    <div class="absolute inset-0 grid-pattern"></div>
    <h1 class="text-white text-5xl lg:text-8xl md:text-8xl z-40 font-bold text-center leading-tight mb-6">
      MOVE MONEY GLOBALLY<br />IN SECONDS
    </h1>
    
    <p class="text-white text-center max-w-xl px-3 lg:px-0 mx-auto mb-8 opacity-90 text-base md:text-lg">
      Transfer funds faster to and from your digital accounts via 
      bank transfers or mobile wallets in 60+ countries. Enjoy 
      real-time payments at a fraction of the cost of bank wires.
    </p>
    
    <div class="flex justify-center z-50 mb-12">
      <NuxtLink to="/payouts" class="inline-flex items-center text-white font-medium hover:underline">
        Learn about Payout
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.50005 6C9.50005 6 15.5 10.4189 15.5 12C15.5 13.5812 9.5 18 9.5 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
    </div>

    <!-- Globe container with relative positioning -->
    <div class="relative">
      <img src="@/assets/icons/circular-globe.svg" class="w-[560px] h-[522px]" />
      
      <!-- Transaction notification - positioned in the center of the globe -->
      <div class="absolute top-1/2 left-1/2 scroll-px-16 lg:px-0 px-2  transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out w-full">
        <div class="flex items-center justify-between bg-white rounded-full px-4 py-4 shadow-lg">
          <section class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <!-- Flag -->
              <div class="w-full h-full">
                <img :src="currentTransfer.flagIcon" />
              </div>
            </div>
            
            <div class="lg:text-2xl text-lg font-semibold">
              {{ currentState }}
            </div>
          </section>
          
          <div class="font-bold text-lg lg:text-2xl">
            {{ currentTransfer.amount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import nigeriaFlag from '@/assets/icons/nigeria-flag.svg'
import usFlag from '@/assets/icons/us-flag.svg'
import cnFlag from "@/assets/icons/cn-flag.svg"
import euFlag from "@/assets/icons/eu-flag.svg"
import gbFlag from "@/assets/icons/gb-flag.svg"
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// Two states: sent and received
const currentState = ref<'Sent' | 'Received'>('Sent');

// Define the transfers with proper matching between sending and receiving
const transfers = [
  // Based on your frames, these are the transaction pairs we need to show
  {
    // Frame 48095948 -> Frame 48096316
    sentFlag: 'us',
    sentAmount: '398 USD',
    sentFlagIcon: usFlag,
    receivedFlag: 'cn',
    receivedAmount: '12,653.79 CNY',
    receivedFlagIcon:  cnFlag
  },
  {
    // Frame 48096315 -> Frame 48096314
    sentFlag: 'gb',
    sentAmount: '1,350 GBP',
    sentFlagIcon: gbFlag,
    receivedFlag: 'eu',
    receivedAmount: '365 EUR',
    receivedFlagIcon: euFlag
  },
  {
    // Frame 48096317 -> Frame 48096318
    sentFlag: 'us',
    sentAmount: '250 USD',
    sentFlagIcon: usFlag,
    receivedFlag: 'ng',
    receivedAmount: '387,500.00 NGN',
    receivedFlagIcon: nigeriaFlag
  }
];

// Current transfer index
const currentTransferIndex = ref(0);
const currentTransfer = computed(() => {
  const transfer = transfers[currentTransferIndex.value];
  return currentState.value === 'Sent' 
    ? { 
        flag: transfer.sentFlag, 
        amount: transfer.sentAmount,
        flagIcon: transfer.sentFlagIcon
      }
    : {
        flag: transfer.receivedFlag,
        amount: transfer.receivedAmount,
        flagIcon: transfer.receivedFlagIcon
      };
});

// Animation timer variable
let animationTimer: number | null = null;

// Run the animation
const startAnimation = () => {
  // Toggle between sent and received states every 3 seconds
  animationTimer = window.setInterval(() => {
    // Toggle state
    currentState.value = currentState.value === 'Sent' ? 'Received' : 'Sent';
    
    // If we just switched back to Sent, move to the next transfer pair
    if (currentState.value === 'Sent') {
      currentTransferIndex.value = (currentTransferIndex.value + 1) % transfers.length;
    }
  }, 3000);
};

// Start animation on mount
onMounted(() => {
  setTimeout(() => {
    startAnimation();
  }, 1000);
});

// Clean up on unmount
onBeforeUnmount(() => {
  if (animationTimer) clearInterval(animationTimer);
});
</script>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>