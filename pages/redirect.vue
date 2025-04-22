<template>
    <button @click="redirectToEmail">Click to Email Me</button>
  </template>
  
  <script>
  export default {
    methods: {
      redirectToEmail() {
        window.location.href = "mailto:your-email@example.com";
      },
    },
  };
  </script>