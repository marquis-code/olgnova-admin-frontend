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
        { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
<<<<<<< HEAD

  googleFonts: {
    families: {
      "Lexend+Tera": [400, 500, 700], // Specify font weights as needed
    },
    display: "swap", // Optional: Controls how the font is displayed
    prefetch: true, // Optional: Prefetch the font for faster loading
    preconnect: true, // Optional: Preconnect to the font server
    preload: true, // Optional: Preload the font
  },
  css: ["/assets/css/main.css"],
  modules: [
    "@kevinmarrec/nuxt-pwa",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ]
=======
  css: ["/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts'],
>>>>>>> b971005 (updated code to remove sitemap)
});
