<template>
    <header class="bg-green-800 py-4 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Navbar container with glassy effect -->
        <nav class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 6V12C4 15.31 7.58 20 12 22C16.42 20 20 15.31 20 12V6L12 2Z" fill="#5CB85C" />
                <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <span class="text-white text-xl font-semibold">Capera</span>
          </div>
  
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <div class="relative group">
              <button class="text-white flex items-center focus:outline-none">
                Products
                <ChevronDown class="ml-1 w-4 h-4" />
              </button>
              <!-- Dropdown content can be added here -->
            </div>
            <div class="relative group">
              <button class="text-white flex items-center focus:outline-none">
                Company
                <ChevronDown class="ml-1 w-4 h-4" />
              </button>
              <!-- Dropdown content can be added here -->
            </div>
            <div class="relative group">
              <button class="text-white flex items-center focus:outline-none">
                Help
                <ChevronDown class="ml-1 w-4 h-4" />
              </button>
              <!-- Dropdown content can be added here -->
            </div>
          </div>
  
          <!-- Desktop Auth Buttons -->
          <div class="hidden md:flex items-center space-x-4">
            <a href="#" class="text-white hover:text-gray-200 transition-colors">Log in</a>
            <a href="#" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors">
              Register
            </a>
          </div>
  
          <!-- Mobile Menu Button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </nav>
      </div>
  
      <!-- Mobile Sidebar -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-full"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="fixed inset-0 z-50 md:hidden"
        >
          <!-- Backdrop -->
          <div 
            class="fixed inset-0 bg-black/30 backdrop-blur-sm"
            @click="isMobileMenuOpen = false"
          ></div>
          
          <!-- Sidebar -->
          <div class="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-green-800 p-6 overflow-y-auto">
            <div class="flex items-center mb-8">
              <div class="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V12C4 15.31 7.58 20 12 22C16.42 20 20 15.31 20 12V6L12 2Z" fill="#5CB85C" />
                  <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span class="text-white text-xl font-semibold">Capera</span>
            </div>
            
            <div class="space-y-6">
              <div>
                <button 
                  @click="toggleDropdown('products')"
                  class="flex items-center justify-between w-full text-white py-2"
                >
                  <span>Products</span>
                  <ChevronDown 
                    class="w-4 h-4 transition-transform" 
                    :class="{ 'rotate-180': openDropdown === 'products' }"
                  />
                </button>
                <div v-if="openDropdown === 'products'" class="pl-4 mt-2 space-y-2">
                  <a href="#" class="block text-white/80 hover:text-white py-1">Product 1</a>
                  <a href="#" class="block text-white/80 hover:text-white py-1">Product 2</a>
                  <a href="#" class="block text-white/80 hover:text-white py-1">Product 3</a>
                </div>
              </div>
              
              <div>
                <button 
                  @click="toggleDropdown('company')"
                  class="flex items-center justify-between w-full text-white py-2"
                >
                  <span>Company</span>
                  <ChevronDown 
                    class="w-4 h-4 transition-transform" 
                    :class="{ 'rotate-180': openDropdown === 'company' }"
                  />
                </button>
                <div v-if="openDropdown === 'company'" class="pl-4 mt-2 space-y-2">
                  <a href="#" class="block text-white/80 hover:text-white py-1">About</a>
                  <a href="#" class="block text-white/80 hover:text-white py-1">Careers</a>
                  <a href="#" class="block text-white/80 hover:text-white py-1">Contact</a>
                </div>
              </div>
              
              <div>
                <button 
                  @click="toggleDropdown('help')"
                  class="flex items-center justify-between w-full text-white py-2"
                >
                  <span>Help</span>
                  <ChevronDown 
                    class="w-4 h-4 transition-transform" 
                    :class="{ 'rotate-180': openDropdown === 'help' }"
                  />
                </button>
                <div v-if="openDropdown === 'help'" class="pl-4 mt-2 space-y-2">
                  <a href="#" class="block text-white/80 hover:text-white py-1">Documentation</a>
                  <a href="#" class="block text-white/80 hover:text-white py-1">Support</a>
                  <a href="#" class="block text-white/80 hover:text-white py-1">FAQ</a>
                </div>
              </div>
              
              <div class="pt-6 border-t border-white/20">
                <a href="#" class="block text-white hover:text-gray-200 py-2">Log in</a>
                <a href="#" class="block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full mt-4 text-center transition-colors">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Menu, X, ChevronDown } from 'lucide-vue-next';
  
  const isMobileMenuOpen = ref(false);
  const openDropdown = ref<string | null>(null);
  
  const toggleDropdown = (name: string) => {
    openDropdown.value = openDropdown.value === name ? null : name;
  };
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>