<template>
    <UsersModule />
  </template>
  
  <script setup lang="ts">
  import UsersModule from '~/components/UsersModule.vue'
  import { definePageMeta } from '#imports'
  
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
  })
  </script>
  