import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Withcapera Website",
      htmlAttrs: { lang: "en" },
      meta: [
        { name: 'description', content: 'WithCapera' },
        { name: 'keywords', content: 'WithCapera, Fintech, Finance, website' },
        { name: 'robots', content: 'index, follow' }, // Allow indexing and following links

        // Open Graph Meta Tags
        { property: 'og:title', content: 'WithCapera' }, // Open Graph title
        { property: 'og:description', content: 'Your website description for Open Graph' },
        { property: 'og:image', content: 'https://example.com/image.jpg' }, // Open Graph image
        { property: 'og:url', content: 'https://www.yourwebsite.com' }, // Open Graph URL
        { property: 'og:type', content: 'website' },
      
      // Twitter Cards (Optional)
      { name: 'twitter:card', content: 'summary_large_image' }, // This creates a large image preview on Twitter
      { name: 'twitter:title', content: 'Your Website Title' },
      { name: 'twitter:description', content: 'Your website description' },
      { name: 'twitter:image', content: 'https://example.com/og-image.jpg' }, // Example image
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
          type: "text/javascript",
        },
      ],
    },
  },

  build: {
    transpile: ["lucide-vue-next"],
  },

  css: ['/assets/css/font/stylesheet.css', "/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],

  compatibilityDate: '2025-04-08'
});