import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
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
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" },    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap',
      }],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
          type: "text/javascript",
        },
      ],
    },
  },

  googleFonts: {
    families: {
      'Lexend+Tera': [400, 500, 700], // Specify font weights as needed
    },
    display: 'swap', // Optional: Controls how the font is displayed
    prefetch: true, // Optional: Prefetch the font for faster loading
    preconnect: true, // Optional: Preconnect to the font server
    preload: true, // Optional: Preload the font
  },
  css: ["/assets/css/main.css"],
  modules: ['@kevinmarrec/nuxt-pwa', "@nuxtjs/tailwindcss", '@nuxtjs/google-fonts'],
  pwa: {
    workbox: {
      enabled: true
    },
    meta: {
      title: "Withcapera Website",
      author: "Marquis",
      mobileAppIOS: false,
      mobileApp: true,
      description:
        "Withcapera Website",
      theme_color: "#27396B"
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    manifest: {
      name: "Marquis",
      lang: "fa",
    }
  }
});
