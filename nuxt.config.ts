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
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/manifest.json" }
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