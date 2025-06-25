<template>
    <EnquiriesModule />
  </template>
  
  <script setup lang="ts">
  import EnquiriesModule from '~/components/EnquiriesModule.vue'
  import { definePageMeta } from '#imports'
  
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
  })
  </script>
  