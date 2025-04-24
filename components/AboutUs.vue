<template>
<main>
  <div class="hidden lg:block mx-auto px-4 py-8 md:py-16">
    <div class="relative rounded-3xl overflow-hidden">
      <!-- Main container with rounded corners -->
      <div class="relative">
        <!-- Hero image with coworking space -->
        <div class="relative pt-28">
          <img 
            src="@/assets/img/smiling-discussion.png" 
            alt="People collaborating in a coworking space" 
            class="w-full h-auto object-cover rounded-3xl"
          />
          
          <!-- Capera text overlay with blend effect -->
          <div class="absolute inset-0 flex items-center top-[-500px] justify-center pointer-events-none">
            <h1 class="text-[120px] md:text-[380px] font-bold text-[#1A1A1B] opacity-30 mix-blend-overlay tracking-tighter">
              Capera
            </h1>
          </div>
        </div>
        
        <!-- Text content with rounded white background -->
        <div class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12 lg:mt-[-150px] relative z-10 mx-4 md:mx-8">
          <p class="text-center text-[#1A1A1B] text-lg md:text-4xl leading-relaxed max-w-4xl mx-auto">
            Capera enables seamless cross-border money transfers, facilitates local account fund reception, reduces foreign exchange fees, simplifies reconciliation processes, and accelerates settlement times, empowering your business to expand smoothly into new markets.
          </p>
          
          <div class="flex justify-center mt-8">
            <NuxtLink to="/about" class="inline-flex text-lg items-center text-[#3BAB22] font-medium">
              <span class="pr-2">About us</span>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.50005 6C9.50005 6 15.5 10.4189 15.5 12C15.5 13.5812 9.5 18 9.5 18" stroke="#3BAB22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

<section class="lg:hidden">
  <section class="relative">
  <div class="p-3">
  <img 
     src="@/assets/img/smiling-discussion.png" 
            alt="People collaborating in a coworking space" 
            class="w-full h-screen object-cover rounded-3xl"
          />
</div>
<div class="absolute inset-0 flex items-center -top-[750px] justify-center pointer-events-none">
            <h1 class="text-[120px] md:text-[380px] font-bold text-[#1A1A1B] opacity-30 mix-blend-overlay leading-loose tracking-tighter">
              Capera
            </h1>
          </div>

                  <!-- Text content with rounded white background -->
</section>
<div class="bg-[#F7F7F7] rounded-3xl p-8 md:p-12 -mt-60 relative z-10 mx-6 md:mx-8">
          <p class="text-center text-gray-800 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Capera enables seamless cross-border money transfers, facilitates local account fund reception, reduces foreign exchange fees, simplifies reconciliation processes, and accelerates settlement times, empowering your business to expand smoothly into new markets.
          </p>
          
          <div class="flex justify-center mt-8">
            <NuxtLink to="/about" class="inline-flex items-center text-[#3BAB22] font-medium">
              About us
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
</div>
</section>
          
</main>
</template>

<script setup lang="ts">
// No additional script logic needed for this component
</script>

<style scoped>
/* Custom styles for the blend effect */
.mix-blend-overlay {
  mix-blend-mode: overlay;
}

/* Additional styling to match the design exactly */
@media (min-width: 768px) {
  .mix-blend-overlay {
    letter-spacing: -0.05em;
  }
}
</style>