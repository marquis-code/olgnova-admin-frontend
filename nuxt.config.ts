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
      title: "Capera",
      htmlAttrs: { lang: "en" },
      meta: [
        { name: 'description', content: 'Capera' },
        { name: 'keywords', content: 'Capera, Fintech, Finance, website' },
        { name: 'robots', content: 'index, follow' }, // Allow indexing and following links

        // Open Graph Meta Tags
        { property: 'og:title', content: 'Capera' }, // Open Graph title
        { property: 'og:description', content: 'Make money move globally.' },
        { property: 'og:image', content: 'https://example.com/image.jpg' }, // Open Graph image
        { property: 'og:url', content: 'https://www.capera.netlify.com' }, // Open Graph URL
        { property: 'og:type', content: 'website' },
      
      // Twitter Cards (Optional)
      { name: 'twitter:card', content: 'summary_large_image' }, // This creates a large image preview on Twitter
      { name: 'twitter:title', content: 'Capera' },
      { name: 'twitter:description', content: 'Make money move globally.' },
      { name: 'twitter:image', content: 'https://example.com/og-image.jpg' }, // Example image
      ],
      link: [
        { rel: "icon", href: "/icon.png", type: "image/x-icon" },
        { rel: "apple-touch-icon", sizes: "57x57", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/icon.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/icon.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/icon.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/icon.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/icon.png" },
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