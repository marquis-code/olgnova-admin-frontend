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
      title: "OLGNova | Admin",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content:
            "OLGNova - Health research publications and resources for healthcare professionals in Africa",
        },
        {
          name: "keywords",
          content:
            "health research, publications, Africa, healthcare, medical research",
        },
        { name: "author", content: "OLGNova" },
        { property: "og:title", content: "OLGNova" },
        {
          property: "og:description",
          content:
            "Health research publications and resources for healthcare professionals in Africa",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://olgnova.com" },
        { property: "og:image", content: "https://olgnova.com/icon.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://olgnova.com" },
        { name: "twitter:title", content: "olgnova" },
        {
          name: "twitter:description",
          content:
            "Health research publications and resources for healthcare professionals in Africa",
        },
        {
          name: "twitter:image",
          content: "https://olgnova.com/icon.jpg",
        },
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