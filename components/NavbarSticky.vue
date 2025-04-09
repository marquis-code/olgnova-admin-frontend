<!-- <template>
    <header class="fixed top-0 left-0 right-0 z-50">
      <div 
        class="backdrop-blur-sm mt-6 border-b max-w-7xl mx-auto rounded-full transition-colors duration-300"
        :class="[
          isOverWhiteBackground 
            ? 'bg-white/80 border-gray-200/20' 
            : 'bg-white/10 border-white/10'
        ]"
      >
        <div class="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
    
          <NuxtLink to="/" class="flex items-center">
            <img src="@/assets/icons/logo-green.svg" />
          </NuxtLink>
          

          <nav class="hidden md:flex items-center space-x-8">
            <div class="relative group">
              <button 
                @click="toggleProductsDropdown" 
                class="flex items-center transition-colors duration-300"
                :class="[isOverWhiteBackground ? 'text-gray-800' : 'text-white']"
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
                :class="[isOverWhiteBackground ? 'text-gray-800' : 'text-white']"
              >
                Company
              </NuxtLink>
            </div>
            
            <div class="relative">
              <NuxtLink 
                to="/contact" 
                class="transition-colors duration-300"
                :class="[isOverWhiteBackground ? 'text-gray-800' : 'text-white']"
              >
                Help
              </NuxtLink>
            </div>
          </nav>
          

          <div class="hidden md:flex items-center space-x-4">
            <button 
              class="transition-colors duration-300"
              :class="[isOverWhiteBackground ? 'text-gray-800' : 'text-white']"
            >
              Log in
            </button>
            <button class="bg-[#3BAB22] text-white px-4 py-3 rounded-full text-sm font-medium">Register</button>
          </div>
  

          <button 
            class="md:hidden transition-colors duration-300"
            :class="[isOverWhiteBackground ? 'text-gray-800' : 'text-white']"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <X v-if="isMenuOpen" class="h-6 w-6" />
            <Menu v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
  

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
  

      <div ref="backgroundDetector" class="fixed top-0 left-0 w-full h-1 opacity-0 pointer-events-none"></div>
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
  const isOverWhiteBackground = ref(false)
  const backgroundDetector = ref<HTMLElement | null>(null)
  
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
  
  // Function to check if the background is white
  const checkBackgroundColor = (entries: IntersectionObserverEntry[]) => {
    if (!backgroundDetector.value) return
    
    // Get the element that's currently intersecting with our detector
    const intersectingElements = entries.filter(entry => entry.isIntersecting)
    
    if (intersectingElements.length > 0) {
      // Get computed background color of the element below our detector
      const elementsBelow = document.elementsFromPoint(
        window.innerWidth / 2,
        backgroundDetector.value.getBoundingClientRect().top + 50
      )
      
      // Find the first non-header element (skip our own components)
      const targetElement = elementsBelow.find(el => {
        const tagName = el.tagName.toLowerCase()
        return tagName !== 'header' && !el.closest('header')
      })
      
      if (targetElement) {
        const bgColor = window.getComputedStyle(targetElement).backgroundColor
        
        // Check if background is white or very light
        // This regex checks for rgb/rgba values close to white
        const isLight = /rgba?$$(\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?$$/.test(bgColor) && 
          RegExp.$1 > 200 && RegExp.$2 > 200 && RegExp.$3 > 200
        
        isOverWhiteBackground.value = isLight
      }
    }
  }
  
  // Set up intersection observer
  let observer: IntersectionObserver | null = null
  
  onMounted(() => {
    if (backgroundDetector.value) {
      observer = new IntersectionObserver(checkBackgroundColor, {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '0px'
      })
      
      // Observe the detector element
      observer.observe(backgroundDetector.value)
      
      // Initial check
      checkBackgroundColor([{ isIntersecting: true } as IntersectionObserverEntry])
      
      // Also check on scroll
      window.addEventListener('scroll', () => {
        checkBackgroundColor([{ isIntersecting: true } as IntersectionObserverEntry])
      })
    }
  })
  
  onUnmounted(() => {
    if (observer && backgroundDetector.value) {
      observer.unobserve(backgroundDetector.value)
      observer.disconnect()
    }
    
    window.removeEventListener('scroll', () => {
      checkBackgroundColor([{ isIntersecting: true } as IntersectionObserverEntry])
    })
  })
  </script>
  
  <style scoped>
  /* Optional: Add any additional custom styles here if needed */
  </style> -->



  <template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div 
      class="backdrop-blur-sm mt-6 border-b max-w-7xl mx-auto rounded-full transition-colors duration-300"
      :class="[
        isOverWhiteBackground 
          ? 'bg-red-600/80 border-red-400/20 text-white' 
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
              :class="[isOverWhiteBackground ? 'text-white' : 'text-white']"
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
              :class="[isOverWhiteBackground ? 'text-white' : 'text-white']"
            >
              Company
            </NuxtLink>
          </div>
          
          <div class="relative">
            <NuxtLink 
              to="/contact" 
              class="transition-colors duration-300"
              :class="[isOverWhiteBackground ? 'text-white' : 'text-white']"
            >
              Help
            </NuxtLink>
          </div>
        </nav>
        
        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button 
            class="transition-colors duration-300"
            :class="[isOverWhiteBackground ? 'text-white' : 'text-white']"
          >
            Log in
          </button>
          <button class="bg-[#3BAB22] text-white px-4 py-3 rounded-full text-sm font-medium">Register</button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden transition-colors duration-300"
          :class="[isOverWhiteBackground ? 'text-white' : 'text-white']"
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

    <!-- Intersection observer target elements -->
    <div class="bg-detector-container">
      <div ref="whiteBackgroundDetector" class="white-section-detector"></div>
    </div>
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
const isOverWhiteBackground = ref(false)
const whiteBackgroundDetector = ref<HTMLElement | null>(null)

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

// Function to handle intersection with white backgrounds
const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  // Check each entry to see if it's intersecting
  entries.forEach(entry => {
    // Get the background color of the element that's being intersected
    if (entry.isIntersecting) {
      // Find elements below the navbar
      const elementsBelow = document.elementsFromPoint(
        window.innerWidth / 2,
        entry.boundingClientRect.top + 50
      )
      
      // Find the first non-header element
      const targetElement = elementsBelow.find(el => {
        const tagName = el.tagName.toLowerCase()
        return tagName !== 'header' && !el.closest('header')
      })

      if (targetElement) {
        const bgColor = window.getComputedStyle(targetElement).backgroundColor
        
        // Check if background is white or very light
        const isWhiteBackground = isLightBackground(bgColor)
        
        // Update the state to trigger the navbar style change
        isOverWhiteBackground.value = isWhiteBackground
      }
    }
  })
}

// Helper function to determine if the background is light
const isLightBackground = (color: string) => {
  // Extract RGB values from the color string
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/)
  
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10)
    const g = parseInt(rgbMatch[2], 10) 
    const b = parseInt(rgbMatch[3], 10)
    
    // Check if colors are close to white (threshold set to 200)
    return r > 220 && g > 220 && b > 220
  }
  
  // If we can't parse the color, return false
  return false
}

// Observer instance
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Set up the intersection observer
  if (whiteBackgroundDetector.value) {
    observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.1, 0.5, 0.9],
      rootMargin: '0px'
    })
    
    // Start observing the detector element
    observer.observe(whiteBackgroundDetector.value)
    
    // Also check on scroll for better responsiveness
    window.addEventListener('scroll', () => {
      if (whiteBackgroundDetector.value) {
        const entry = {
          isIntersecting: true,
          boundingClientRect: whiteBackgroundDetector.value.getBoundingClientRect()
        } as IntersectionObserverEntry
        
        handleIntersection([entry])
      }
    })
  }
})

onUnmounted(() => {
  // Clean up the observer when the component is unmounted
  if (observer && whiteBackgroundDetector.value) {
    observer.unobserve(whiteBackgroundDetector.value)
    observer.disconnect()
  }
  
  // Remove scroll event listener
  window.removeEventListener('scroll', () => {
    if (whiteBackgroundDetector.value) {
      const entry = {
        isIntersecting: true,
        boundingClientRect: whiteBackgroundDetector.value.getBoundingClientRect()
      } as IntersectionObserverEntry
      
      handleIntersection([entry])
    }
  })
})
</script>

<style scoped>
.bg-detector-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
}

.white-section-detector {
  position: absolute;
  top: 80px; /* Position under the nav bar */
  left: 0;
  width: 100%;
  height: 1px; /* Just a thin line for detection */
  opacity: 0;
}
</style>