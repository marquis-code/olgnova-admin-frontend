<template>
  <div>
    <IntegrationsHeroSection />
    <IntegrationsFeaturesSection />
    <IntegrationsVersatileApiSection />
    <IntegrationsPossibilitiesSection />
    <IntegrationsGettingStartedSection />
    <IntegrationsScaleSection />
    <IntegrationsCtaSection />
  </div>
</template>

<script setup lang="ts">
// import { useHead, useSeoMeta } from '#head'
import { useHead } from '#app' // or 'nuxt/app'
import { useSeoMeta } from '#imports' // or directly from 'nuxt/head'

// Basic page metadata
definePageMeta({
  title: 'Integrations & API',
  description: 'Explore CAPERA\'s powerful API integrations and discover how to connect your systems with our versatile solutions.'
})

useHead({
  title: 'Integrations & API | CAPERA',
  link: [
    {
      rel: 'canonical',
      href: 'https://yourdomain.com/integrations'
    }
  ],
})

// Comprehensive SEO meta tags with useSeoMeta
useSeoMeta({
  title: 'Integrations & API | CAPERA',
  description: 'Explore CAPERA\'s powerful API integrations and discover how to connect your systems with our versatile solutions. Scale your business with our developer-friendly API.',
  
  // OpenGraph meta tags for social sharing
  ogTitle: 'Powerful API Integrations | CAPERA',
  ogDescription: 'Connect your systems with CAPERA\'s versatile API solutions. Easy implementation, powerful features, and scalable architecture for developers.',
  ogImage: 'https://yourdomain.com/images/integrations-og-image.jpg',
  ogUrl: 'https://yourdomain.com/integrations',
  ogType: 'website',
  ogSiteName: 'CAPERA',
  
  // Twitter Card meta tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'Powerful API Integrations | CAPERA',
  twitterDescription: 'Connect your systems with CAPERA\'s versatile API solutions. Easy implementation, powerful features, and scalable architecture for developers.',
  twitterImage: 'https://yourdomain.com/images/integrations-og-image.jpg',
  
  // Additional SEO meta tags
  keywords: 'CAPERA API, integrations, API documentation, developer tools, API reference, system integration, API features, scalable API',
  robots: 'index, follow',
  author: 'CAPERA',
  applicationName: 'CAPERA Integrations',
})

// Structured data for rich search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'CAPERA API Integrations',
  description: 'Explore CAPERA\'s powerful API integrations and discover how to connect your systems with our versatile solutions.',
  url: 'https://yourdomain.com/integrations',
  provider: {
    '@type': 'Organization',
    name: 'CAPERA',
    url: 'https://yourdomain.com'
  },
  offers: {
    '@type': 'Offer',
    name: 'API Integration Services',
    description: 'Connect your systems with CAPERA\'s versatile API solutions',
    url: 'https://yourdomain.com/integrations'
  },
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'CAPERA API',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  }
}
</script>