<template>
  <header class="fixed top-0 left-0 right-0 z-50">
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
              @click="toggleProductsDropdown" 
              class="flex items-center transition-colors duration-300"
              :class="[scrolled ? 'text-white' : 'text-white']"
            >
              Products
              <ChevronDown 
                class="ml-1 h-4 w-4 transition-transform duration-300" 
                :class="{ 'rotate-180': isProductsDropdownOpen }" 
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
              <div v-if="isProductsDropdownOpen" class="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg overflow-hidden z-50">
                <div class="py-1">
                  <NuxtLink 
                    v-for="product in products" 
                    :key="product.name" 
                    :to="product.link" 
                    class="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-[#3BAB22]/10 hover:text-[#2c5520]"
                  >
                    <component :is="product.icon" class="h-4 w-4 mr-2" />
                    {{ product.name }}
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
          
          <div class="relative">
            <NuxtLink 
              to="/about" 
              class="transition-colors duration-300"
              :class="[scrolled ? 'text-white' : 'text-white']"
            >
              Company
            </NuxtLink>
          </div>
          
          <div class="relative">
            <NuxtLink 
              to="/contact" 
              class="transition-colors duration-300"
              :class="[scrolled ? 'text-white' : 'text-white']"
            >
              Help
            </NuxtLink>
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
              @click="toggleMobileProductsDropdown" 
              class="text-white flex items-center justify-between w-full"
            >
              Products
              <ChevronDown 
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': isMobileProductsOpen }"
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
              <div v-if="isMobileProductsOpen" class="mt-2 overflow-hidden">
                <NuxtLink 
                  v-for="product in products" 
                  :key="product.name" 
                  :to="product.link" 
                  @click="closeMenu"
                  class="flex items-center py-3 pl-4 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <component :is="product.icon" class="h-4 w-4 mr-3" />
                  {{ product.name }}
                </NuxtLink>
              </div>
            </Transition>
          </div>
          
          <div class="py-2 border-b border-white/10">
            <NuxtLink 
              to="/about" 
              @click="closeMenu"
              class="text-white flex items-center justify-between w-full"
            >
              Company
              <ChevronRight class="h-4 w-4" />
            </NuxtLink>
          </div>
          
          <div class="py-2 border-b border-white/10">
            <NuxtLink 
              to="/contact" 
              @click="closeMenu"
              class="text-white flex items-center justify-between w-full"
            >
              Help
              <ChevronRight class="h-4 w-4" />
            </NuxtLink>
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
const isProductsDropdownOpen = ref(false)
const isMobileProductsOpen = ref(false)
const scrolled = ref(false)
const scrollY = ref(0)

const products = [
  { 
    name: 'Payouts', 
    link: '/payouts',
    icon: Banknote
  },
  { 
    name: 'OTC', 
    link: '/otc',
    icon: BarChart3
  },
  { 
    name: 'API Integration', 
    link: '/api-integration',
    icon: Code2
  },
  { 
    name: 'Currency Exchange', 
    link: '/currency-exchange',
    icon: RefreshCw
  }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Close any open dropdowns when toggling the menu
  if (!isMenuOpen.value) {
    isMobileProductsOpen.value = false
  }
}

const toggleProductsDropdown = () => {
  isProductsDropdownOpen.value = !isProductsDropdownOpen.value
}

const toggleMobileProductsDropdown = () => {
  isMobileProductsOpen.value = !isMobileProductsOpen.value
}

const closeMenu = () => {
  // Add a small delay to make the animation visible before closing
  setTimeout(() => {
    isMenuOpen.value = false
    isMobileProductsOpen.value = false
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
})

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', throttledHandleScroll)
  window.removeEventListener('resize', throttledHandleScroll)
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