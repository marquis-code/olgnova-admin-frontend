<template>
  <DashboardOverview />
</template>

<script setup lang="ts">
import DashboardOverview from '~/components/DashboardOverview.vue'
import { definePageMeta } from '#imports'

// Meta
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
</script>
