<template>
  <main>
    <div class="">
      <LandingHero />
    </div>
    <div class="pt-10">
      <CurrencyMarquee />
    </div>
    <div class="platform-container space-y-10 mt-32">
      <div class="flex justify-center space-y-2 items-center flex-col">
        <h2 class="text-[#1A1A1B]">Our Platform</h2>
        <p class="text-[#1A1A1B] mx-3 lg:px-0 text-6xl max-w-6xl text-center">Gain seamless access to top-tier global payment solutions with a single contract and API integration.</p>
      </div>

      <div class="flex justify-center items-center">
        <img src="@/assets/img/plattform.png" class="w-auto lg:h-[920px]" />
      </div>
    </div>
    <!-- <PlatformFeatures /> -->
    <PaymentTabs />
    <AboutUs />
    <GlobalTransferCard />
    <CurrencyExchange />
    <PlatformBenefits />
    <!-- <IndustrySolutions /> -->
    <!-- <GlobalPayouts /> -->
    <GlobalPayments class="pt-20" />
    <TestimonialCarousel />
    <SecuritySection />
    <PaymentFooter 
      title="Ready to start your CAPERA journey?" 
      description="Join other business users today.
Contact our professional service team to learn more or open an account online for free."
      :actions="[
        { text: 'Get started', onClick: () => console.log('Start clicked') },
        { text: 'Contact Sales', onClick: () => console.log('Docs clicked') }
      ]"
    />
  </main>
</template>

<script setup lang="ts">
// import { useHead, useSeoMeta } from '#head'
import { useHead } from '#app' // or 'nuxt/app'
import { useSeoMeta } from '#imports' // or directly from 'nuxt/head'
import GlobalPayments from '~/components/GlobalPayments.vue';
import GlobalPayouts from '~/components/GlobalPayouts.vue';

// Basic page metadata
definePageMeta({
  title: 'CAPERA - Global Payment Solutions',
  description: 'Access top-tier global payment solutions with a single contract and API integration. Simplify cross-border transactions, currency exchange, and international payments.'
})

// Enhanced SEO with useHead for basic head elements
useHead({
  title: 'CAPERA - Global Payment Solutions & Currency Exchange Platform',
  titleTemplate: '%s | Simplify Cross-Border Transactions',
  link: [
    {
      rel: 'canonical',
      href: 'https://yourdomain.com'
    }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' }
  ]
})

// Comprehensive SEO meta tags with useSeoMeta
useSeoMeta({
  title: 'CAPERA - Global Payment Solutions & Currency Exchange Platform',
  description: 'Access top-tier global payment solutions with a single contract and API integration. Simplify cross-border transactions, currency exchange, and international payments with CAPERA.',
  
  // OpenGraph meta tags for social sharing
  ogTitle: 'CAPERA - Simplify Global Payments & Currency Exchange',
  ogDescription: 'Access top-tier global payment solutions with a single contract and API integration. Join other businesses using CAPERA for seamless cross-border transactions.',
  ogImage: 'https://yourdomain.com/images/capera-homepage-og.jpg',
  ogUrl: 'https://yourdomain.com',
  ogType: 'website',
  ogSiteName: 'CAPERA',
  
  // Twitter Card meta tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'CAPERA - Simplify Global Payments & Currency Exchange',
  twitterDescription: 'Access top-tier global payment solutions with a single contract and API integration. Join other businesses using CAPERA for seamless cross-border transactions.',
  twitterImage: 'https://yourdomain.com/images/capera-homepage-og.jpg',
  
  // Additional SEO meta tags
  keywords: 'CAPERA, global payments, currency exchange, cross-border transactions, international payments, payment platform, financial services, USD, CNY, RMB, NGN',
  robots: 'index, follow',
  author: 'CAPERA',
  applicationName: 'CAPERA Payment Platform',
})

// Structured data for rich search results - using Organization and WebSite schema
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CAPERA',
    url: 'https://yourdomain.com',
    logo: 'https://yourdomain.com/images/logo.png',
    description: 'CAPERA provides global payment solutions and currency exchange services for businesses worldwide.',
    sameAs: [
      'https://twitter.com/capera',
      'https://www.linkedin.com/company/capera',
      'https://www.facebook.com/capera'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-123-456-7890',
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Spanish', 'French']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-123-456-7891',
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Spanish', 'French']
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CAPERA',
    url: 'https://yourdomain.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://yourdomain.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yourdomain.com'
      }
    ]
  }
]

// Add structured data to the page
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd)
    }
  ]
})
</script>