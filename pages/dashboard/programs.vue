<template>
    <ProgramsModule />
  </template>
  
  <script setup lang="ts">
  import ProgramsModule from '~/components/ProgramsModule.vue'
  import { definePageMeta } from '#imports'
  
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
  })
  </script>
  