<template>
    <SubscriptionsModule />
  </template>
  
  <script setup lang="ts">
  import SubscriptionsModule from '~/components/SubscriptionsModule.vue'
  import { definePageMeta } from '#imports'
  
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
  })
  </script>
  