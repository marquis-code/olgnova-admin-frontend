<template>
  <main>
    <NavbarSticky />
    <div>
      <AboutSiteHeader />
      <ContactSection />
      <ContactCards />
      <ContactFaqSection />
    </div>
  </main>
</template>

<script setup lang="ts">
// import { useHead, useSeoMeta } from '#head'
import { useHead } from '#app' // or 'nuxt/app'
import { useSeoMeta } from '#imports' // or directly from 'nuxt/head'

// Basic page metadata
definePageMeta({
  title: 'Contact Us',
  description: 'Get in touch with CAPERA. Find our contact information, office locations, and answers to frequently asked questions.'
})

// Enhanced SEO with useHead for basic head elements
useHead({
  title: 'Contact Us | CAPERA',
  link: [
    {
      rel: 'canonical',
      href: 'https://yourdomain.com/contact'
    }
  ],
})

// Comprehensive SEO meta tags with useSeoMeta
useSeoMeta({
  title: 'Contact Us | CAPERA',
  description: 'Get in touch with CAPERA. Find our contact information, office locations, and answers to frequently asked questions. We\'re here to help!',
  
  // OpenGraph meta tags for social sharing
  ogTitle: 'Contact CAPERA | Get in Touch With Our Team',
  ogDescription: 'Have questions or need assistance? Contact the CAPERA team for support, partnership inquiries, or general information. We\'re here to help!',
  ogImage: 'https://yourdomain.com/images/contact-og-image.jpg',
  ogUrl: 'https://yourdomain.com/contact',
  ogType: 'website',
  ogSiteName: 'CAPERA',
  
  // Twitter Card meta tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact CAPERA | Get in Touch With Our Team',
  twitterDescription: 'Have questions or need assistance? Contact the CAPERA team for support, partnership inquiries, or general information.',
  twitterImage: 'https://yourdomain.com/images/contact-og-image.jpg',
  
  // Additional SEO meta tags
  keywords: 'CAPERA contact, contact us, customer support, help center, FAQ, office locations, get in touch, contact information',
  robots: 'index, follow',
  author: 'CAPERA',
})

// Structured data for rich search results - using ContactPage schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact CAPERA',
  description: 'Get in touch with CAPERA. Find our contact information, office locations, and answers to frequently asked questions.',
  url: 'https://yourdomain.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'CAPERA',
    url: 'https://yourdomain.com',
    logo: 'https://yourdomain.com/images/logo.png',
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
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-123-456-7892',
        contactType: 'technical support',
        areaServed: 'Worldwide',
        availableLanguage: ['English']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 CAPERA Street',
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'Country'
    },
    sameAs: [
      'https://twitter.com/capera',
      'https://www.linkedin.com/company/capera',
      'https://www.facebook.com/capera'
    ]
  },
  // Adding FAQ structured data for the FAQ section
  mainEntityOfPage: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I contact CAPERA customer support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact our customer support team by phone at +1-123-456-7890, by email at support@yourdomain.com, or by using the contact form on this page.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are CAPERA\'s business hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our customer support team is available Monday through Friday from 9:00 AM to 6:00 PM EST. For urgent matters, we offer 24/7 support through our emergency hotline.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I become a CAPERA partner?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To explore partnership opportunities with CAPERA, please contact our partnerships team at partners@yourdomain.com or fill out the partnership inquiry form on our website.'
        }
      }
    ]
  }
}
</script>