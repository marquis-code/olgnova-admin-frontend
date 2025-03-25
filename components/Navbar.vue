<template>
        <header class="fixed top-0 left-0 right-0 z-50">
      <!-- Glassy navbar background -->
      <div class="absolute inset-0 bg-dark-green/80 backdrop-blur-2xl"></div>
      
      <!-- Navbar content -->
      <div class="container mx-auto px-6 py-4 relative border- rounded-full">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-10 h-10 mr-2">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30L20 20L30 30L20 40L10 30Z" fill="#7BC67B" />
                <path d="M20 20L30 10L40 20L30 30L20 20Z" fill="#5EB45E" />
                <path d="M10 10L20 0L30 10L20 20L10 10Z" fill="#3D9D3D" />
              </svg>
            </div>
            <span class="text-white text-2xl font-medium">Capera</span>
          </div>
          
          <!-- Navigation - Desktop -->
          <nav class="hidden md:flex items-center space-x-10">
            <div class="relative group">
              <button class="text-white flex items-center text-base font-normal">
                Products
                <!-- <Icon name="lucide:chevron-down" class="ml-1 w-4 h-4" /> -->
              </button>
              <!-- Dropdown would go here -->
            </div>
            <div class="relative group">
              <button class="text-white flex items-center text-base font-normal">
                Company
                <!-- <Icon name="lucide:chevron-down" class="ml-1 w-4 h-4" /> -->
              </button>
              <!-- Dropdown would go here -->
            </div>
            <div class="relative group">
              <button class="text-white flex items-center text-base font-normal">
                Help
                <!-- <Icon name="lucide:chevron-down" class="ml-1 w-4 h-4" /> -->
              </button>
              <!-- Dropdown would go here -->
            </div>
          </nav>
          
          <!-- Auth Buttons -->
          <div class="flex items-center space-x-4">
            <button class="text-white hover:text-green-300 transition">Log in</button>
            <button class="bg-light-green text-white px-6 py-2 rounded-full hover:bg-green-500 transition">Register</button>
            
            <!-- Mobile menu button (hidden on desktop) -->
            <button class="md:hidden text-white">
              <!-- <Icon name="lucide:menu" class="w-6 h-6" /> -->
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile Navigation Menu (hidden by default) -->
      <div class="md:hidden hidden bg-dark-green/95 backdrop-blur-md">
        <div class="container mx-auto px-6 py-4">
          <div class="flex flex-col space-y-4">
            <button class="text-white flex items-center justify-between py-2 border-b border-white/10">
              Products
              <!-- <Icon name="lucide:chevron-down" class="w-4 h-4" /> -->
            </button>
            <button class="text-white flex items-center justify-between py-2 border-b border-white/10">
              Company
              <!-- <Icon name="lucide:chevron-down" class="w-4 h-4" /> -->
            </button>
            <button class="text-white flex items-center justify-between py-2 border-b border-white/10">
              Help
              <!-- <Icon name="lucide:chevron-down" class="w-4 h-4" /> -->
            </button>
          </div>
        </div>
      </div>
    </header>
</template>