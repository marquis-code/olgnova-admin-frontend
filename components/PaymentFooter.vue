<template>
    <main class="m-2 lg:m-4">
      <div class="relative w-full overflow-hidden rounded-3xl bg-[#1A1A1B] text-white">
        <!-- Main content -->
        <div class="relative z-10 px-6 py-16 text-center md:px-12 md:py-24 mb-[600px]">
          <h2 class="mb-4 text-5xl lg:text-8xl md:text-8xl font-bold uppercase mx-auto tracking-tight">
            {{title}}
          </h2>
          <p class="mx-auto mb-10 text-[16px] max-w-2xl text-base md:text-lg">
           {{description}}
          </p>
  
          <!-- Action Buttons -->
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              v-for="(action, index) in actions"
              :key="index"
              class="rounded-full px-8 py-3 font-medium transition"
              :class="[
                index === 0
                  ? 'bg-[#3BAB22] text-white hover:bg-green-600'
                  : 'bg-white text-[#1A1A1B]'
              ]"
              @click="handleClick(action)"
            >
              {{ action.text }}
            </button>
          </div>
        </div>
  
        <!-- Dotted map background -->
        <div class="absolute inset-0 z-0 overflow-hidden">
          <div class="absolute bottom-0 left-0 w-full text-center opacity-10">
            <span class="text-[20vw] font-bold leading-none text-gray-500">Capera</span>
          </div>
  
          <!-- Map image -->
          <img src="@/assets/icons/map-vector.svg" class="mt-96 absolute bottom-0 h-full w-full" />
  
          <!-- Green dots -->
          <div class="absolute left-[28%] top-[68%] h-2 w-2 rounded-full bg-green-500"></div>
          <div class="absolute left-[12%] top-[78%] h-2 w-2 rounded-full bg-green-500"></div>
          <div class="absolute left-[85%] top-[72%] h-2 w-2 rounded-full bg-green-500"></div>
          <div class="absolute left-[52%] top-[60%] h-2 w-2 rounded-full bg-green-500"></div>
          <div class="absolute left-[65%] top-[80%] h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: 'START MAKING PAYMENTS',
    },
    description: {
      type: String,
      default:
        'Secure, instant transactions with no hidden fees—begin your journey to smarter financial management now.',
    },
    actions: {
      type: Array as () => { text: string; onClick?: () => void }[],
      required: true,
    },
  })
  
  function handleClick(action: { onClick?: () => void, text: string }) {
  if (action.text === 'Talk to us') {
    window.location.href = 'mailto:hello@withcapera.com'; // replace with your actual email
    return; // optionally prevent further execution
  }

  if (action.onClick) {
    action.onClick();
  }
}
  </script>
  