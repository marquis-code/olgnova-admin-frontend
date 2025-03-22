<template>
  <main>
    <GlassyNavbar />
    <div class="platform-container space-y-10 mt-32">
    <div class="flex justify-center space-y-2 items-center flex-col">
      <h2 class="text-[#1A1A1B]">Our Platform</h2>
      <p class="text-[#1A1A1B] text-3xl max-w-xl text-center">Gain seamless access to top-tier global payment solutions with a single contract and API integration.</p>
    </div>

   <div class="flex justify-center items-center">
    <img src="@/assets/img/plattform.png" class="w-auto h-[920px]" />
   </div>
     </div>
     <PlatformFeatures />
    <AboutUs />
    <GlobalTransferCard />
    <CurrencyExchange />
    <IndustrySolutions />
    <PlatformBenefits />
    <GlobalPayouts />
    <GlobalPayments />
    <TestimonialCarousel />
    <SecuritySection />
    <!-- <CaperaCta /> -->
  </main>
</template>

<script setup>
import GlobalPayments from '~/components/GlobalPayments.vue';
import GlobalPayouts from '~/components/GlobalPayouts.vue';

useHead({
  title: 'WithCapera',
  meta: [
    { name: 'description', content: 'Home page description for SEO' },
    { property: 'og:title', content: 'Home Page Title' },
    { property: 'og:description', content: 'Home page description for Open Graph' },
    { property: 'og:image', content: 'https://example.com/home-og-image.jpg' },
    { property: 'og:url', content: 'https://www.yourwebsite.com/home' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Home Page Title' },
    { name: 'twitter:description', content: 'Home page description' },
    { name: 'twitter:image', content: 'https://example.com/home-og-image.jpg' },
  ]
})
</script>
