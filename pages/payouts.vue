<template>
  <div class="font-sans text-gray-900">
<NavbarSticky />

    <!-- Hero Section -->
    <section class="p-4">
  <section class="bg-[#1C5310] text-white rounded-3xl pt-56 relative overflow-hidden">
    <div class="absolute inset-0 grid-background"></div>
      <!-- <div class="absolute inset-0 opacity-20">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-white/10"></div>
        </div>
        <div class="grid grid-rows-12 h-full absolute inset-0">
          <div v-for="i in 12" :key="i" class="border-b border-white/10"></div>
        </div>
      </div> -->
      <!-- Instant Payouts,
— instantly loyal customers -->
      <div class="container mx-auto px-4 relative">
        <p class="text-center text-[20px] mb-2 opacity-90 uppercase">Global Payouts</p>
        <div class="relative z-10 container mx-auto px-4 text-center">
        <h1 class="text-5xl lg:text-8xl md:text-8xl font-bold text-white mb-4">
          INSTANT PAYOUTS
          <div class="flex items-center justify-center">
            <div class="w-16 h-3 bg-[#3BAB22] mr-4"></div>
            <span class="text-[#3BAB22]">INSTANT LOYAL</span>
          </div>
          <span class="text-[#3BAB22]">CUSTOMERS</span>
        </h1>
        </div>
        <p 
          class="text-center max-w-lg text-[18px] lg:text-[20px] mx-auto leading-relaxed opacity-90"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
        >
        Instant Payouts give your customers exactly what they want when they want it. Whether it's refunds, withdrawals or earnings — we send it in seconds.
        </p>
        <div class="flex justify-center mb-16 mt-10">
          <a 
            href="mailto:hello@withcapera.com"
            class="bg-green-600 block text-white px-8 py-3.5 rounded-full transition-all transform hover:scale-105"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 500 } }"
          >
            Talk to us
          </a>
        </div>
        
        <div class="flex justify-center items-center">
          <img src="@/assets/icons/payout-illustration.svg" class="" />
        </div>
      </div>
    </section>
</section>

    <PayoutsOverview />

    <div>
      <PayoutsCoverageSection />
      <PayoutsGlobalPayoutSection />
      <PayoutsStreamlinedProcessesSection />
      <!-- <PayoutsIntegrationSection /> -->
      <PayoutsShared />
      <div class="pt-32">
        <PlatformBenefits />
      </div>
    </div>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="px-4">
        <p class="text-center uppercase text-[16px] lg:text-[20px] font-medium text-gray-600 mb-2">Integrations</p>
        <h2
          class="text-[28px] md:text-6xl py-4 font- max-w-xs lg:max-w-4xl mx-auto text-center"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Access to a complete payments infrastructure through  a single
          integration.
        </h2>
        <p class="text-lg max-w-xl mx-auto text-[#454745] text-center py-6">
          Whether you want to connect to us via our dashboard or our API, safety
          and security are always top of mind. You’ll be working with the
          world’s leading infrastructure providers, so you can rest easy knowing
          your funds are taken care of.
        </p>

        <div class="grid md:grid-cols-2 gap-8 pt-10">
          <div
            class="bg-gray-50 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { delay: 200, duration: 800 },
            }"
          >
            <div class="flex mb-6">
              <div class="">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M5 48.8369C5 37.7049 12.9066 28.4226 23.412 26.2951C25.5492 14.6552 35.7434 5.83691 48 5.83691C61.5432 5.83691 72.5712 16.6059 72.9876 30.0478C83.1708 31.4983 91 40.2533 91 50.8369C91 62.4349 81.598 71.8369 70 71.8369H28C15.2974 71.8369 5 61.5393 5 48.8369Z"
                    fill="#1A1A1B"
                  />
                  <path
                    d="M45 71.8369V75.8369H44C40.8288 75.8369 38.1504 77.9453 37.2899 80.8369H20C18.3432 80.8369 17 82.1801 17 83.8369C17 85.4937 18.3432 86.8369 20 86.8369H37.2899C38.1504 89.7285 40.8288 91.8369 44 91.8369H52C55.1712 91.8369 57.8496 89.7285 58.71 86.8369H76C77.6568 86.8369 79 85.4937 79 83.8369C79 82.1801 77.6568 80.8369 76 80.8369H58.71C57.8496 77.9453 55.1712 75.8369 52 75.8369H51V71.8369H45Z"
                    fill="#1A1A1B"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-[24px] lg:text-5xl font-semibold my-6">API</h3>
            <p class="text-[#454745] leading-relaxed text-[16px] lg:text-lg">
              Putting you in control of your payments. Customise our payout
              flows with your branding via our API. Automatically collect all
              payout information in the format that works for you.
            </p>
            <NuxtLink to="/" class="text-[#3BAB22] font-medium flex items-center space-x-2 pt-4">Read our docs
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00005 6.83691C9.00005 6.83691 15 11.2558 15 12.8369C15 14.4181 9 18.8369 9 18.8369" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </NuxtLink>
          </div>

          <div
            class="bg-gray-50 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
              transition: { delay: 400, duration: 800 },
            }"
          >
            <div class="flex mb-6">
              <div class="">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M10.9838 39.8369H85.0164C86.882 39.8369 87.8152 39.8369 88.4004 40.4204C88.986 41.004 88.9888 41.9316 88.9948 43.7864C89 45.3268 89 46.9332 89 48.6084V49.0656C89 57.8284 89 64.7112 88.2776 70.0848C87.5372 75.5916 85.9892 79.9604 82.5564 83.3932C79.1236 86.826 74.7544 88.374 69.248 89.1144C63.8744 89.8372 56.9916 89.8368 48.2288 89.8368H47.7712C39.0084 89.8368 32.1258 89.8372 26.7521 89.1144C21.2455 88.374 16.8764 86.826 13.4436 83.3932C10.0109 79.9604 8.46272 75.5916 7.72236 70.0848C6.99992 64.7112 6.99996 57.8284 7 49.0656V48.608C7 46.9336 7 45.3268 7.00504 43.7864C7.01108 41.9316 7.01412 41.004 7.59952 40.4204C8.18488 39.8369 9.11784 39.8369 10.9838 39.8369Z"
                    fill="#1A1A1B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.7688 7.83692H48.226C56.9884 7.83684 63.8716 7.8368 69.2452 8.55928C74.752 9.29964 79.1212 10.8478 82.554 14.2806C85.9868 17.7134 87.5348 22.0824 88.2752 27.589C88.3644 28.2544 88.4428 28.943 88.5116 29.6555C88.696 31.5693 88.7884 32.5262 88.1932 33.1816C87.598 33.8369 86.6016 33.8369 84.6092 33.8369H11.3858C9.39329 33.8369 8.39701 33.8369 7.80177 33.1816C7.20657 32.5262 7.29881 31.5693 7.48333 29.6555C7.55201 28.943 7.63037 28.2544 7.71985 27.589C8.46021 22.0824 10.0083 17.7134 13.4411 14.2806C16.8739 10.8478 21.2429 9.29964 26.7496 8.55928C32.1232 7.8368 39.006 7.83684 47.7688 7.83692ZM27.9609 16.8369C25.7518 16.8369 23.9609 18.6278 23.9609 20.8369C23.9609 23.046 25.7518 24.8369 27.9609 24.8369H27.9969C30.206 24.8369 31.9969 23.046 31.9969 20.8369C31.9969 18.6278 30.206 16.8369 27.9969 16.8369H27.9609ZM39.9609 20.8369C39.9609 18.6278 41.7516 16.8369 43.9608 16.8369H43.9968C46.206 16.8369 47.9968 18.6278 47.9968 20.8369C47.9968 23.046 46.206 24.8369 43.9968 24.8369H43.9608C41.7516 24.8369 39.9609 23.046 39.9609 20.8369Z"
                    fill="#1A1A1B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31 74.8369C31 65.4481 38.6112 57.8369 48 57.8369C57.3888 57.8369 65 65.4481 65 74.8369C65 76.4937 66.3432 77.8369 68 77.8369C69.6568 77.8369 71 76.4937 71 74.8369C71 62.1345 60.7024 51.8369 48 51.8369C35.2974 51.8369 25 62.1345 25 74.8369C25 76.4937 26.3432 77.8369 28 77.8369C29.6568 77.8369 31 76.4937 31 74.8369ZM52.9496 70.1301C54.1212 68.9585 54.1212 67.0589 52.9496 65.8877C51.778 64.7161 49.8784 64.7161 48.7068 65.8877L43.05 71.5445C41.8784 72.7161 41.8784 74.6153 43.05 75.7869C44.2216 76.9585 46.1212 76.9585 47.2924 75.7869L52.9496 70.1301Z"
                    fill="#1A1A1B"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-[24px] lg:text-5xl font-semibold my-6">Portal</h3>
            <p class="text-[#454745] leading-relaxed text-[16px] lg:text-lg">
              Quickly unlock access to new markets by using our ready to go
              portal. Gain real-time insight into all of your payments, pull
              reports and easily track all of your money movements.
            </p>
            <NuxtLink to="/" class="text-[#3BAB22] font-medium flex items-center space-x-2 pt-4">Read our docs
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00005 6.83691C9.00005 6.83691 15 11.2558 15 12.8369C15 14.4181 9 18.8369 9 18.8369" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <PayoutsDeveloperSection />

    <PaymentFooter 
    title="START MAKING PAYMENTS TODAY" 
    description="Secure, instant transactions with no hidden fees—begin your journey to smarter financial management now."
:actions="[
    { text: 'Get started', onClick: () => console.log('Start clicked') },
    { text: 'Explore our docs', onClick: () => console.log('Docs clicked') }
  ]"
/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { PayoutsOverview } from "#components";

// Mobile menu state
const mobileMenuOpen = ref(false);

// Animation on scroll with Intersection Observer
onMounted(() => {
  // Initialize any additional functionality here
});

</script>

<style>
/* Custom animations */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 3s ease-in-out infinite;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
}

.grid-background {
  background-color: #1C5210; /* Match the base color */
  background-image: url('/assets/icons/bg-mesh.svg'); /* Replace with the actual path */
  /* background-size: 100px 100px; */
  /* background-position: center center; */
  /* background-repeat: repeat; */
  z-index: 0;
}

</style>
