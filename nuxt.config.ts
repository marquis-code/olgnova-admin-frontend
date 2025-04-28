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
      title: "Capera - Move Money Globally",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Move Money Globally" },
        { name: "format-detection", content: "telephone=no" },
        { name: "keywords", content: "Capera, Fintech, Finance, Global Payments, Money Transfer" },
        { name: "robots", content: "index, follow" },

        // Open Graph Meta Tags
        { property: "og:title", content: "Capera - Move Money Globally" },
        { property: "og:description", content: "Move Money Globally." },
        { property: "og:image", content: "/images/capera-og-image.jpg" },
        { property: "og:url", content: "https://www.capera.com" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Capera" },
      
        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Capera - Move Money Globally" },
        { name: "twitter:description", content: "Move Money Globally." },
        { name: "twitter:image", content: "/images/capera-twitter-image.jpg" },
        { name: "twitter:site", content: "@capera" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "manifest", href: "/site.webmanifest" }
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
    "@nuxtjs/robots",
  ],

  googleFonts: {
    families: {
      // Add your preferred fonts here
      "Inter": [400, 500, 600, 700],
      "Poppins": [400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
  },

  compatibilityDate: '2025-04-08'
});