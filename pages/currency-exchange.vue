<template>
  <div class="font-sans text-gray-900">
    <!-- Navigation -->
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
      <div class="container mx-auto px-4 relative">
        <p class="text-center mb-2 opacity-90 text-[16px] lg:text-[20px] uppercase">Currency exchange</p>
        <div class="relative z-10 container mx-auto px-4 text-center">
        <h1 class="text-5xl lg:text-8xl md:text-8xl font-bold text-white mb-4">
          YOUR CURRENCY
          <div class="flex items-center justify-center">
            <div class="w-16 h-3 bg-[#3BAB22] mr-4"></div>
            <span class="text-[#3BAB22] text-5xl lg:text-8xl md:text-8xl">OUR EXPERTISE</span>
          </div>
          <!-- <span class="text-[#3BAB22]">CUSTOMERS</span> -->
        </h1>
        </div>
        <p 
          class="text-center max-w-lg text-lg mx-auto leading-relaxed opacity-90"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
        >
          Effortlessly convert USD, CNY (RMB), NGN, and other currencies in real time. Streamline cross-border transactions and elevate your business's global financial agility.
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
          <img src="@/assets/icons/otc-hero-illustration.svg" class="h-[460px] w-[535px]" />
        </div>
      </div>
    </section>
</section>

    <CurrencyExchangeFeatureSection />

    <!-- Features Section -->
    <section id="features" class="py-32 bg-white">
      <div class="px-4">
        <h2 
          class="text-4xl md:text-6xl max-w-5xl mx-auto text-center mb-16"
        >
          Receive payments & convert to your preferred currency
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            class="bg-gray-50 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
          >
            <div class="flex mb-6">
              <div class="p-4 mr-4">
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0979 20.9688L26.2652 24.7758C26.913 25.5544 27.9099 25.9536 28.9161 25.8373C29.9222 25.7209 30.8018 25.1047 31.2547 24.1988L34.6833 17.3416C35.1483 16.4117 35.0986 15.3072 34.552 14.4228C34.0053 13.5384 33.0397 13 32 13C28.8498 13 25.8201 13.5391 23.0021 14.5331C12.5105 18.2337 5 28.2278 5 40C5 41.6568 6.34316 43 8 43C9.65684 43 11 41.6568 11 40C11 31.5742 15.9442 24.3152 23.0979 20.9688Z" fill="#1A1A1B"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M72.902 75.0312L69.7348 71.224C69.0872 70.4456 68.09 70.0464 67.084 70.1628C66.0776 70.2792 65.1984 70.8952 64.7452 71.8012L61.3168 78.6584C60.8516 79.5884 60.9016 80.6928 61.448 81.5772C61.9948 82.4616 62.9604 83 64 83C67.15 83 70.18 82.4608 72.998 81.4668C83.4896 77.7664 91 67.772 91 56C91 54.3432 89.6568 53 88 53C86.3432 53 85 54.3432 85 56C85 64.4256 80.056 71.6848 72.902 75.0312Z" fill="#1A1A1B"/>
                  <path opacity="0.4" d="M86.8016 5.73863C83.1616 5.07131 76.0024 3.9301 67.8564 7.28899C61.0568 10.0927 54.168 10.698 50.2624 10.6226C47.1944 10.5634 45 13.1802 45 15.9788V41.8276C45 44.1412 46.6368 46.8844 49.7072 46.9816C54.142 47.1224 62.1456 46.5052 70.1436 43.2076C76.342 40.6516 81.8488 41.3256 85.2404 41.9252C88.676 42.5328 91 39.5972 91 36.8171V10.9812C91 8.63787 89.4432 6.22295 86.8016 5.73863Z" fill="#1A1A1B"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M67.9732 20C64.6744 20 62 22.6863 62 26C62 29.3137 64.6744 32 67.9732 32H68.0268C71.3256 32 74 29.3137 74 26C74 22.6863 71.3256 20 68.0268 20H67.9732Z" fill="#1A1A1B"/>
                  <path opacity="0.4" d="M46.8016 49.7389C43.1616 49.0713 36.0023 47.9301 27.8564 51.2889C21.0568 54.0929 14.1679 54.6981 10.2625 54.6229C7.1944 54.5637 5 57.1805 5 59.9789V85.8277C5 88.1413 6.63668 90.8845 9.70704 90.9817C14.142 91.1225 22.1455 90.5053 30.1436 87.2077C36.3421 84.6517 41.8488 85.3257 45.2404 85.9253C48.676 86.5329 51 83.5973 51 80.8173V54.9813C51 52.6381 49.4432 50.2229 46.8016 49.7389Z" fill="#1A1A1B"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9732 64C24.6743 64 22 66.6864 22 70C22 73.3136 24.6743 76 27.9732 76H28.0268C31.3257 76 34 73.3136 34 70C34 66.6864 31.3257 64 28.0268 64H27.9732Z" fill="#1A1A1B"/>
                </svg>
              </div>
            </div>
            <h3 class="text-[24px] lg:text-5xl text-[#1A1A1B] max-w-xs py-[32px] lg:py-[64px] font-bold lg:mb-4">Instant conversions</h3>
            <p class="text-[#454745] text-[16px] font-[400] lg:text-lg leading-relaxed">Convert your funds in seconds with no hidden charges..</p>
          </div>
          
          <div 
            class="bg-gray-50 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="flex mb-6">
              <div class="p-4 mr-4">
                <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M54.7634 4.58892C57.5902 5.79368 59.5206 8.65036 59.5206 12.0672L59.5234 39.139C59.5234 39.5808 59.8814 39.9389 60.3234 39.9389H72.7302C76.2734 39.9389 78.7146 42.3304 79.7194 44.8404C80.7226 47.3476 80.5874 50.568 78.5842 53.1396L50.591 89.0712C48.3458 91.9532 44.815 92.6516 41.8998 91.4092C39.0733 90.2044 37.1429 87.3476 37.1429 83.9308L37.1403 56.8592C37.1402 56.4172 36.7821 56.0592 36.3403 56.0592H23.9331C20.3899 56.0592 17.9488 53.6676 16.9442 51.1576C15.9407 48.6504 16.076 45.43 18.0793 42.8584L46.0722 6.92676C48.3178 4.0446 51.8482 3.34632 54.7634 4.58892Z" fill="#1A1A1B"/>
                  <path d="M60.3206 39.9405H72.7278C76.271 39.9405 78.7122 42.332 79.7166 44.842C80.7202 47.3492 80.585 50.5696 78.5814 53.1412L50.5886 89.0728C48.3434 91.9552 44.8126 92.6532 41.8974 91.4108C39.0708 90.206 37.1404 87.3492 37.1404 83.9324L37.1377 56.8608L59.5206 39.1406C59.5206 39.5824 59.879 39.9405 60.3206 39.9405Z" fill="#1A1A1B"/>
                </svg>
              </div>
            </div>
            <h3 class="text-[24px] lg:text-5xl text-[#1A1A1B] max-w-xs py-[32px] lg:py-[64px] font-bold lg:mb-4">Faster withdrawals</h3>
            <p class="text-[#454745] text-[16px] font-[400] lg:text-lg leading-relaxed">Withdraw your funds to local accounts within minutes.</p>
          </div>

          <div 
            class="bg-gray-50 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="flex mb-6">
              <div class="p-4 mr-4">
                <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M48.6514 5C52.8486 5 56.1546 8.17012 58.265 12.4476L65.3134 26.6606C65.527 27.1005 66.0338 27.7199 66.7954 28.2866C67.5562 28.8526 68.3014 29.1648 68.7914 29.2472L81.5498 31.3845C86.1586 32.1589 90.0214 34.418 91.2754 38.3516C92.5282 42.282 90.6926 46.3664 87.3782 49.6864L87.375 49.69L77.4634 59.6836C77.0706 60.0796 76.6306 60.8256 76.3546 61.7976C76.0806 62.7632 76.0562 63.6428 76.1806 64.2108L76.1822 64.2188L79.0178 76.5816C80.1942 81.7268 79.8042 86.8292 76.1754 89.4968C72.5338 92.1732 67.5578 90.9868 63.037 88.2944L51.0774 81.156C50.575 80.856 49.7126 80.6128 48.6714 80.6128C47.6378 80.6128 46.7574 80.8528 46.2222 81.164L46.2146 81.1684L34.2785 88.2928C29.7632 90.9948 24.7931 92.16 21.1514 89.4808C17.5249 86.8128 17.1155 81.72 18.2954 76.5788L21.1306 64.2188L21.1323 64.2108C21.2566 63.6428 21.2323 62.7632 20.9582 61.7976C20.6822 60.8256 20.2421 60.0796 19.8493 59.6836L9.93038 49.6824C6.63758 46.3624 4.80782 42.2816 6.05078 38.357C7.29734 34.421 11.1527 32.1592 15.7643 31.3842L28.5123 29.2488L28.5163 29.2481C28.9837 29.167 29.7178 28.8582 30.4769 28.2907C31.2374 27.7222 31.7453 27.1014 31.9595 26.6606L31.9703 26.6387L39.0095 12.4439L39.0123 12.4383C41.143 8.16432 44.459 5 48.6514 5Z" fill="#1A1A1B"/>
                  <path d="M39.0123 12.4383C41.143 8.16432 44.459 5 48.6514 5V80.6128C47.6266 80.616 46.7538 80.8548 46.2222 81.164L46.2146 81.1684L34.2785 88.2928C29.7632 90.9948 24.7931 92.16 21.1514 89.4808C17.5249 86.8128 17.1155 81.72 18.2954 76.5788L21.1306 64.2188L21.1323 64.2108C21.2566 63.6428 21.2323 62.7632 20.9582 61.7976C20.6822 60.8256 20.2421 60.0796 19.8493 59.6836L9.93038 49.6824C6.63758 46.3624 4.80782 42.2816 6.05078 38.357C7.29734 34.421 11.1527 32.1592 15.7643 31.3842L28.5123 29.2488L28.5163 29.2481C28.9837 29.167 29.7178 28.8582 30.4769 28.2907C31.2374 27.7222 31.7453 27.1014 31.9595 26.6606L31.9703 26.6387L39.0095 12.4439L39.0123 12.4383Z" fill="#1A1A1B"/>
                </svg>
              </div>
            </div>
            <h3 class="text-[24px] lg:text-5xl text-[#1A1A1B] max-w-xs py-[32px] lg:py-[64px] font-bold lg:mb-4">The best FX rates</h3>
            <p class="text-[#454745] text-[16px] font-[400] lg:text-lg leading-relaxed">Benefit from the most competitive rates available..</p>
          </div>
        </div>
      </div>
    </section>
    <PaymentFooter 
      title="Exchange on CAPERA" 
      description="Sign up on Capera to enjoy great FX rates."
      :actions="[
        { text: 'Get started', onClick: () => console.log('Start clicked') }
      ]"
    />
  </div>
</template>

<script setup lang="ts">
// import { useHead, useSeoMeta } from '#head'
import { useHead } from '#app' // or 'nuxt/app'
import { useSeoMeta } from '#imports' // or directly from 'nuxt/head'

// Basic page metadata
definePageMeta({
  title: 'Currency Exchange',
  description: 'Convert USD, CNY (RMB), NGN, and other currencies in real time with CAPERA. Enjoy instant conversions, faster withdrawals, and the best FX rates.'
})

// Enhanced SEO with useHead for basic head elements
useHead({
  title: 'Currency Exchange | CAPERA',
  link: [
    {
      rel: 'canonical',
      href: 'https://yourdomain.com/currency-exchange'
    }
  ],
})

// Comprehensive SEO meta tags with useSeoMeta
useSeoMeta({
  title: 'Currency Exchange | CAPERA',
  description: 'Effortlessly convert USD, CNY (RMB), NGN, and other currencies in real time. Streamline cross-border transactions and elevate your business\'s global financial agility with CAPERA.',
  
  // OpenGraph meta tags for social sharing
  ogTitle: 'Currency Exchange Services | CAPERA',
  ogDescription: 'Convert currencies instantly with the best FX rates. Streamline cross-border transactions and enjoy faster withdrawals with CAPERA\'s currency exchange services.',
  ogImage: 'https://yourdomain.com/images/currency-exchange-og-image.jpg',
  ogUrl: 'https://yourdomain.com/currency-exchange',
  ogType: 'website',
  ogSiteName: 'CAPERA',
  
  // Twitter Card meta tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'Currency Exchange Services | CAPERA',
  twitterDescription: 'Convert currencies instantly with the best FX rates. Streamline cross-border transactions and enjoy faster withdrawals with CAPERA.',
  twitterImage: 'https://yourdomain.com/images/currency-exchange-og-image.jpg',
  
  // Additional SEO meta tags
  keywords: 'currency exchange, forex, FX rates, USD, CNY, RMB, NGN, currency conversion, cross-border transactions, instant conversions, CAPERA',
  robots: 'index, follow',
  author: 'CAPERA',
})

// Structured data for rich search results - using Service schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CAPERA Currency Exchange',
  description: 'Effortlessly convert USD, CNY (RMB), NGN, and other currencies in real time. Streamline cross-border transactions and elevate your business\'s global financial agility.',
  provider: {
    '@type': 'Organization',
    name: 'CAPERA',
    url: 'https://yourdomain.com',
    logo: 'https://yourdomain.com/images/logo.png'
  },
  serviceType: 'Currency Exchange',
  areaServed: 'Worldwide',
  offers: {
    '@type': 'Offer',
    description: 'Currency exchange services with competitive rates',
    price: '0',
    priceCurrency: 'USD'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Currency Exchange Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instant Currency Conversion',
          description: 'Convert your funds in seconds with no hidden charges'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fast Withdrawals',
          description: 'Withdraw your funds to local accounts within minutes'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Competitive FX Rates',
          description: 'Benefit from the most competitive rates available'
        }
      }
    ]
  }
}

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