<template>
  <header class="fixed top-0 left-0 right-0 px-3 lg:px-0 z-50">
    <div 
      class="backdrop-blur-sm mt-6 border-b max-w-7xl mx-auto rounded-full transition-colors duration-300"
      :class="[
        scrolled 
          ? 'bg-black/40  border-gray-800/50 text-white' 
          : 'bg-white/10 border-white/10'
      ]"
    >
      <div class="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="@/assets/icons/logo-green.svg" />
        </NuxtLink>
        
        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <button 
              @click.stop="toggleDropdown('products')" 
              class="flex items-center transition-colors duration-300 dropdown-trigger group"
              :class="[scrolled ? 'text-white' : 'text-white']"
            >
              Products
              <ChevronDown 
                class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-[#3BAB22]" 
                :class="{ 'rotate-180': activeDropdown === 'products' }" 
              />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="activeDropdown === 'products'" class="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg overflow-hidden z-50">
                <div class="py-1">
                  <NuxtLink 
                    v-for="product in products" 
                    :key="product.name" 
                    :to="product.link" 
                    @click="closeDropdowns"
                    class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-[#3BAB22]/10 hover:text-[#2c5520] group"
                  >
                    <img :src="product.icon" class="h-4 w-4 mr-3" />
                    <span>{{ product.name }}</span>
                    <ChevronRight class="ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#3BAB22]" />
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
          
          <!-- <div class="relative">
            <NuxtLink 
              to="/about" 
              class="transition-colors duration-300"
              :class="[scrolled ? 'text-white' : 'text-white']"
            >
              Company
            </NuxtLink>
          </div> -->
          <div class="relative group">
            <button 
              @click.stop="toggleDropdown('company')" 
              class="flex items-center transition-colors duration-300 dropdown-trigger group"
              :class="[scrolled ? 'text-white' : 'text-white']"
            >
            Company
              <ChevronDown 
                class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-[#3BAB22]" 
                :class="{ 'rotate-180': activeDropdown === 'company' }" 
              />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="activeDropdown === 'company'" class="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg overflow-hidden z-50">
                <div class="py-1">
                  <NuxtLink 
                    v-for="item in company" 
                    :key="item.name" 
                    :to="item.link" 
                    @click="closeDropdowns"
                    class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-[#3BAB22]/10 hover:text-[#2c5520] group"
                  >
                    <img :src="item.icon" class="h-4 w-4 mr-3" />
                    <span>{{ item.name }}</span>
                    <ChevronRight class="ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#3BAB22]" />
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
          
          <div class="relative group">
            <button 
              @click.stop="toggleDropdown('help')" 
              class="flex items-center transition-colors duration-300 dropdown-trigger group"
              :class="[scrolled ? 'text-white' : 'text-white']"
            >
              Help
              <ChevronDown 
                class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-[#3BAB22]" 
                :class="{ 'rotate-180': activeDropdown === 'help' }" 
              />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="activeDropdown === 'help'" class="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg overflow-hidden z-50">
                <div class="py-1">
                  <NuxtLink 
                    v-for="item in help" 
                    :key="item.name" 
                    :to="item.link" 
                    @click="closeDropdowns"
                    class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-[#3BAB22]/10 hover:text-[#2c5520] group"
                  >
                    <img :src="item.icon" class="h-4 w-4 mr-3" />
                    <span>{{ item.name }}</span>
                    <ChevronRight class="ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#3BAB22]" />
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </nav>
        
        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button 
            class="transition-colors duration-300"
            :class="[scrolled ? 'text-white' : 'text-white']"
          >
            Log in
          </button>
          <button class="bg-[#3BAB22] text-white px-4 py-3 rounded-full text-sm font-medium">Register</button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden transition-colors duration-300"
          :class="[scrolled ? 'text-white' : 'text-white']"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <X v-if="isMenuOpen" class="h-6 w-6" />
          <Menu v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="-translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in-out"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-full opacity-0"
    >
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-x-0 top-20 bg-[#2c5520] shadow-lg md:hidden z-40 mx-4 rounded-2xl"
      >
        <div class="px-4 py-6 space-y-4">
          <div class="py-2 border-b border-white/10">
            <button 
              @click="toggleMobileDropdown('products')" 
              class="text-white flex items-center justify-between w-full"
            >
              Products
              <ChevronDown 
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': activeMobileDropdown === 'products' }"
              />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[250px]"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[250px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="activeMobileDropdown === 'products'" class="mt-2 overflow-hidden">
                <NuxtLink 
                  v-for="product in products" 
                  :key="product.name" 
                  :to="product.link" 
                  @click="closeMenu"
                  class="flex items-center py-3 pl-4 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <img :src="product.icon" class="h-4 w-4 mr-3" />
                  {{ product.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <div class="py-2 border-b border-white/10">
            <button 
              @click="toggleMobileDropdown('company')" 
              class="text-white flex items-center justify-between w-full"
            >
              Company
              <ChevronDown 
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': activeMobileDropdown === 'company' }"
              />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[250px]"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[250px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="activeMobileDropdown === 'company'" class="mt-2 overflow-hidden">
                <NuxtLink 
                  v-for="item in company" 
                  :key="item.name" 
                  :to="item.link" 
                  @click="closeMenu"
                  class="flex items-center py-3 pl-4 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <img :src="item.icon" class="h-4 w-4 mr-3" />
                  {{ item.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <div class="py-2 border-b border-white/10">
            <button 
              @click="toggleMobileDropdown('help')" 
              class="text-white flex items-center justify-between w-full"
            >
              Help
              <ChevronDown 
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': activeMobileDropdown === 'help' }"
              />
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[250px]"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-[250px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="activeMobileDropdown === 'help'" class="mt-2 overflow-hidden">
                <NuxtLink 
                  v-for="item in help" 
                  :key="item.name" 
                  :to="item.link" 
                  @click="closeMenu"
                  class="flex items-center py-3 pl-4 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <img :src="item.icon" class="h-4 w-4 mr-3" />
                  {{ item.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <div class="pt-4 flex flex-col space-y-3">
            <button class="text-white w-full text-left py-2">Log in</button>
            <button class="bg-[#3BAB22] text-white px-4 py-3 rounded-full text-sm font-medium w-full">Register</button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import payoutIcon from '@/assets/icons/payouts-nav.svg'
import otcIcon from '@/assets/icons/otc-nav.svg'
import apiIntegrationIcon from '@/assets/icons/api-integration-nav.svg'
import currencyExchangeIcon from '@/assets/icons/exchange-nav.svg'

import aboutIcon from '@/assets/icons/about-nav.svg'
import careersIcon from '@/assets/icons/careers-nav.svg'

import supportIcon from '@/assets/icons/contact-support-icon.svg'
import salesIcon from '@/assets/icons/contact-sales-icon.svg'
import helpCenterIcon from '@/assets/icons/help-center-icon.svg'
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X, 
  Banknote, 
  BarChart3, 
  Code2, 
  RefreshCw 
} from 'lucide-vue-next'

const isMenuOpen = ref(false)
const scrolled = ref(false)
const scrollY = ref(0)

const products = [
  { 
    name: 'Payouts', 
    link: '/payouts',
    icon: payoutIcon
  },
  { 
    name: 'Currency Exchange', 
    link: '/currency-exchange',
    icon: currencyExchangeIcon
  },
  { 
    name: 'API Integration', 
    link: '/api-integration',
    icon: apiIntegrationIcon
  },
  { 
    name: 'OTC', 
    link: '/otc',
    icon: otcIcon
  },
]

const company = [
  { 
    name: 'About', 
    link: '/about',
    icon: aboutIcon
  },
  { 
    name: 'Careers', 
    link: '#',
    icon: careersIcon
  }
]

const help = [
  { 
    name: 'Contact support', 
    link: '/contact',
    icon: supportIcon
  },
  { 
    name: 'Contact sales', 
    link: '/contact',
    icon: salesIcon
  },
  { 
    name: 'Help center', 
    link: '/contact',
    icon: helpCenterIcon
  },
]

// Replace the individual toggle functions with a single activeDropdown ref
const activeDropdown = ref<string | null>(null)

const toggleDropdown = (dropdown: string) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = dropdown
  }
}

// For mobile dropdowns
const activeMobileDropdown = ref<string | null>(null)

const toggleMobileDropdown = (dropdown: string) => {
  if (activeMobileDropdown.value === dropdown) {
    activeMobileDropdown.value = null
  } else {
    activeMobileDropdown.value = dropdown
  }
}

// Close dropdowns when clicking outside
const closeDropdowns = () => {
  activeDropdown.value = null
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Close any open dropdowns when toggling the menu
  if (!isMenuOpen.value) {
    activeMobileDropdown.value = null
  }
}

const closeMenu = () => {
  // Add a small delay to make the animation visible before closing
  setTimeout(() => {
    isMenuOpen.value = false
    activeMobileDropdown.value = null
  }, 150)
}

// Simplified scroll handler - changes navbar to black with white text when scrolled
const handleScroll = () => {
  // Get the current scroll position
  scrollY.value = window.scrollY
  
  // Set scrolled to true if we've scrolled down at all (you can adjust this threshold)
  scrolled.value = scrollY.value > 50
}

// Throttle function to limit how often the scroll event fires
const throttle = (fn: Function, delay: number) => {
  let lastCall = 0
  return function(...args: any[]) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

// Throttled version of handleScroll
const throttledHandleScroll = throttle(handleScroll, 100)

onMounted(() => {
  // Initial check
  handleScroll()
  
  // Add scroll event listener with throttling
  window.addEventListener('scroll', throttledHandleScroll)
  
  // Also check on resize as layout might change
  window.addEventListener('resize', throttledHandleScroll)
  
  // Add click outside listener to close dropdowns
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.dropdown-trigger')) {
      closeDropdowns()
    }
  })
})

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', throttledHandleScroll)
  window.removeEventListener('resize', throttledHandleScroll)
  document.removeEventListener('click', closeDropdowns)
})
</script>

<style scoped>
/* Add a subtle shadow to ensure visibility on any background */
header .backdrop-blur-sm {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

/* Ensure the navbar is always visible with a subtle shadow when scrolled */
header .backdrop-blur-sm.bg-black\/90 {
  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.3), 0 2px 6px -1px rgba(0, 0, 0, 0.2);
}
</style>