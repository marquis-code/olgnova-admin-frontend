<template>
  <div>
    <NavbarSticky />
    <main>
      <AboutHeroSection />
      <AboutOurStorySection />
      <AboutCaperaDescription />
      <AboutFeatures />

      <PaymentFooter 
        title="Want to make an impact with CAPERA?" 
        description="Join our vibrant team of professionals across the globe or become our partner in your local market"
        :actions="[
          { text: 'Explore careers', onClick: () => console.log('Start clicked') },
          { text: 'Partner with us', onClick: () => console.log('Docs clicked') }
        ]"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app' // or 'nuxt/app'
import { useSeoMeta } from '#imports' // or directly from 'nuxt/head'

// Basic page metadata
definePageMeta({
  title: 'About CAPERA',
  description: 'Learn about CAPERA\'s journey, our mission to make an impact, and how we\'re transforming the industry.'
})

// Enhanced SEO with useHead for basic head elements
useHead({
  title: 'About CAPERA | Our Story and Mission',
  link: [
    {
      rel: 'canonical',
      href: 'https://yourdomain.com/about'
    }
  ],
})

// Comprehensive SEO meta tags with useSeoMeta
useSeoMeta({
  title: 'About CAPERA | Our Story and Mission',
  description: 'Learn about CAPERA\'s journey, our mission to make an impact, and how we\'re transforming the industry with innovative solutions.',
  
  // OpenGraph meta tags for social sharing
  ogTitle: 'About CAPERA | Our Story and Mission',
  ogDescription: 'Learn about CAPERA\'s journey, our mission to make an impact, and how we\'re transforming the industry with innovative solutions.',
  ogImage: 'https://yourdomain.com/images/about-og-image.jpg',
  ogUrl: 'https://yourdomain.com/about',
  ogType: 'website',
  ogSiteName: 'CAPERA',
  
  // Twitter Card meta tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'About CAPERA | Our Story and Mission',
  twitterDescription: 'Learn about CAPERA\'s journey, our mission to make an impact, and how we\'re transforming the industry with innovative solutions.',
  twitterImage: 'https://yourdomain.com/images/about-og-image.jpg',
  
  // Additional SEO meta tags
  keywords: 'CAPERA, about us, our story, company mission, team, partners, careers',
  robots: 'index, follow',
  author: 'CAPERA',
  applicationName: 'CAPERA Website',
})

// Structured data for rich search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CAPERA',
  url: 'https://yourdomain.com',
  logo: 'https://yourdomain.com/images/logo.png',
  description: 'Learn about CAPERA\'s journey, our mission to make an impact, and how we\'re transforming the industry with innovative solutions.',
  sameAs: [
    'https://twitter.com/capera',
    'https://www.linkedin.com/company/capera',
    'https://www.facebook.com/capera'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 CAPERA Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'Country'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-123-456-7890',
    contactType: 'customer service'
  }
}

</script>