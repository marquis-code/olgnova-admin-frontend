<template>
  <main>
    <GlassyNavbar />
    <!-- <HeroSection /> -->
    <AboutUs />
    <CaperaCta />
    <CurrencyExchange />
    <GlobalTransferCard />
    <IndustrySolutions />
    <PlatformFeatures />
    <PlatformGlobe />
    <SecuritySection />
    <TestimonialCarousel />
  </main>
</template>

<script setup>
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
