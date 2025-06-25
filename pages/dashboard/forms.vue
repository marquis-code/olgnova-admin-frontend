<template>
    <FormsModule />
  </template>
  
  <script setup lang="ts">
  import FormsModule from '~/components/FormsModule.vue'
  import { definePageMeta } from '#imports'
  
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
  })
  </script>
  