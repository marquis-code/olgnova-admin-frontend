<template>
    <AuditModule />
  </template>
  
  <script setup lang="ts">
  import AuditModule from '~/components/AuditModule.vue'
  import { definePageMeta } from '#imports'
  
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
  })
  </script>
  