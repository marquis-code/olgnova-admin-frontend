<template>
  <section class="mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h3 class="uppercase tracking-wider text-[20px] font-medium text-gray-800 mb-2">PLATFORM FEATURES</h3>
      <div class="mb-2">
        <h2 class="text-5xl md:text-8xl font-bold text-[#1A1A1B]">PAYMENTS</h2>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-10 h-3 bg-[#3BAB22] lg:mr-4"></div>
        <h2 class="text-5xl lg:text-8xl md:text-8xl font-bold text-[#3BAB22]">WITHOUT BORDERS</h2>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto gap-4 mb-12">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="setActiveTab(tab.id)"
        class="flex items-center py-3 rounded-full justify-center text-xs lg:text-sm font-medium transition-all duration-300"
        :class="activeTab === tab.id ? 'bg-[#E2FEDC] text-[#3BAB22]' : 'text-gray-700'"
      >
        <span class="flex items-center justify-center mr-2">
          <div class="w-5 h-5">
            <img :src="activeTab === tab.id ? tab.activeIcon : tab.icon" alt="" />
          </div>
        </span>
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Fixed height and width container for tab content -->
    <div 
      class="mt-8 relative" 
      @mouseenter="isPaused = true" 
      @mouseleave="isPaused = false"
      style="min-height: 500px;" 
    >
      <TransitionGroup name="tab" mode="out-in">
        <div
          v-for="tab in tabs"
          v-show="activeTab === tab.id"
          :key="tab.id"
          class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12 absolute w-full"
        >
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <img :src="activeTab === tab.id ? tab.activeIcon : tab.icon" alt="" class="h-[96px] w-[96px]" />
              </div>
              <h2 class="text-4xl md:text-7xl font-bold text-[#1A1A1B] mb-6 whitespace-pre-line">{{ tab.content.title }}</h2>
              <p class="text-gray-700 mb-6 text-[16px] lg:text-lg leading-relaxed">{{ tab.content.description }}</p>
              <NuxtLink
                :to="tab.content.learnMoreLink"
                class="inline-flex items-center text-[#3BAB22] font-medium space-x-3"
              >
                <span>{{ tab.content.learnMoreText }}</span>
                <ChevronRight class="h-5 w-5 text-[#3BAB22]" />
              </NuxtLink>
            </div>
            <div class="flex justify-center md:justify-end">
              <img
                :src="tab.content.illustration"
                :alt="`${tab.label} Illustration`"
                class="max-w-full h-auto max-h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import globalPayoutsIllustration from "@/assets/icons/global_payouts.svg"
import currencyExchangeIllustration from "@/assets/icons/currency_exchange.svg"
import apiIntegrationIllustration from "@/assets/icons/api_integration.svg"
import otcIllustration from "@/assets/icons/over_the_counter.svg"

import globalPayouts from "@/assets/icons/global-payouts.svg"
import currencyExchange from "@/assets/icons/currency-exchange.svg"
import apiIntegration from "@/assets/icons/api-integration.svg"
import counter from "@/assets/icons/over-the-counter.svg"

import activeGlobalPayouts from '@/assets/icons/active-global-payouts.svg'
import activeCurrencyExchange from '@/assets/icons/active-currency-exchange.svg'
import activeApiIntegration from '@/assets/icons/active-api-integration.svg'
import activeOTC from '@/assets/icons/active-over-the-counter.svg'

interface Tab {
  id: string
  label: string
  icon: string
  activeIcon: string
  content: {
    title: string
    description: string
    learnMoreLink: string
    learnMoreText: string
    illustration: string
  }
}

const activeTab = ref<string>("global-payouts")
const isPaused = ref<boolean>(false)
let interval: NodeJS.Timeout | null = null

const tabs: Tab[] = [
  {
    id: "global-payouts",
    label: "Global Payout",
    icon: globalPayouts,
    activeIcon: activeGlobalPayouts,
    content: {
      title: "Global\nPayouts",
      description:
        "Expand globally with instant payouts to 100+ regions —scale effortlessly across borders, streamline operations, and grow your business without limits.",
      learnMoreLink: "/payouts",
      learnMoreText: "Learn about Payouts",
      illustration: globalPayoutsIllustration,
    },
  },
  {
    id: "currency-exchange",
    label: "Currency Exchange",
    icon: currencyExchange,
    activeIcon: activeCurrencyExchange,
    content: {
      title: "Currency\nExchange",
      description:
        "Seamlessly switch between USD, CNY(RMB), NGN, and more currencies in real-time, enhancing global financial management for your business.",
      learnMoreLink: "/currency-exchange",
      learnMoreText: "Learn about Exchange",
      illustration: currencyExchangeIllustration,
    },
  },
  {
    id: "api-integration",
    label: "API Integration",
    icon: apiIntegration,
    activeIcon: activeApiIntegration,
    content: {
      title: "API\nIntegration",
      description:
        "Integrate global payment capabilities into your products, enabling features like Collections and Payouts in USD, NGN, CNY(RMB) and other currencies.",
      learnMoreLink: "/api-integration",
      learnMoreText: "Learn about API integration",
      illustration: apiIntegrationIllustration,
    },
  },
  {
    id: "otc",
    label: "OTC (Over the counter)",
    icon: counter,
    activeIcon: activeOTC,
    content: {
      title: "(OTC) Over\nthe Counter",
      description:
        "Access a decentralized network to buy and sell directly with Capera, offering flexibility, customization, and access to unique financial instruments.",
      learnMoreLink: "/otc",
      learnMoreText: "Learn about OTC",
      illustration: otcIllustration
    },
  },
]

// Function to get the next tab index
const getNextTabIndex = () => {
  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab.value)
  return (currentIndex + 1) % tabs.length
}

// Function to set active tab
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

// Setup the interval for auto-switching tabs
const startInterval = () => {
  interval = setInterval(() => {
    if (!isPaused.value) {
      const nextTabIndex = getNextTabIndex()
      activeTab.value = tabs[nextTabIndex].id
    }
  }, 5000) // Switch every 5 seconds
}

onMounted(() => {
  startInterval()
})

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.tab-enter-active,
.tab-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
}

.tab-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.tab-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>