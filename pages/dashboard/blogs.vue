<template>
    <BlogsModule />
  </template>
  
  <script setup lang="ts">
  import BlogsModule from '~/components/BlogsModule.vue'
  import { definePageMeta } from '#imports'
  
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
  })
  </script>
  