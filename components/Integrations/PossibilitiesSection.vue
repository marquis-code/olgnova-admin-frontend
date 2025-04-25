<template>
  <div class="mx-auto px-4 py-8">
    <div class="bg-[#3BAB22] rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <!-- Grid overlay - only covers the background, not the globe -->
      <div class="absolute inset-0 grid-pattern"></div>
      
      <!-- Content container -->
      <div class="relative z-10 space-y-20">
        <!-- Heading -->
        <h1 class="text-white uppercase text-5xl lg:text-8xl md:text-8xl font-bold text-center leading-tight mb-6">
          The possibilities are endless.
        </h1>
        
                                                                                                                                                                                          
        <div class="flex justify-center items-center py-20-">
          <img src="@/assets/img/twist.png" class="lg:w-[720px] lg:h-[346px]" />
        </div>

         <div class="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-7xl mx-auto lg:mt-0 lg:grid-cols-3 gap-6 py-6">
          <div class=" text-white max-w-xs text-[16px] lg:text-lg" v-for="(item, idx) in possibilitiesList" :key="idx">
            {{item}}
         </div>
         </div>                                                                                                                                                                             
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const possibilitiesList = ref(['Automate invoice payments, recurring transfers, standing orders, or payroll', 'Track exchange rates and automate conversions', 'Add Capera as a disbursement option to your website'])
// No additional script logic needed for this component
</script>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 60px 60px;
}

.globe-container {
  width: 300px;
  height: 300px;
  position: relative;
}

.globe {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 100, 0, 0.8); /* Darker green for the globe */
  position: relative;
  overflow: hidden;
}

/* Apply the mesh pattern ONLY to the globe */
.globe::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(255,255,255,0.05) 30.5%, rgba(255,255,255,0.05) 31%, transparent 31.5%, transparent 100%),
                    radial-gradient(circle at 70% 40%, transparent 0%, transparent 20%, rgba(255,255,255,0.1) 20.5%, rgba(255,255,255,0.1) 21%, transparent 21.5%, transparent 100%);
  background-size: 20px 20px, 30px 30px;
  opacity: 0.7;
}

/* Create the continents effect with a dotted pattern */
.globe::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,.3)' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 50px 50px;
  mask-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,30 C60,10 140,10 170,30 C190,60 190,140 170,170 C140,190 60,190 30,170 C10,140 10,60 30,30 Z' fill='black'/%3E%3C/svg%3E");
  mask-size: 100% 100%;
  mask-position: center;
}
</style>