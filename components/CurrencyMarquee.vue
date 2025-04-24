<template>
    <div class="currency-marquee-container">
      <!-- Infinite scrolling marquee -->
      <div class="marquee-wrapper">
        <div class="marquee" ref="marqueeRef">
          <div class="marquee-content" :style="{ transform: `translateX(${marqueePosition}px)` }">
            <div v-for="(item, index) in duplicatedItems" :key="`currency-${index}`" class="marquee-item">
              <!-- <img src="@/assets/img/countries-supported.png" /> -->
              <span class="country-name">{{ item.country }}</span>
              <span :class="item.size === 'small' ? 'text-[14px]' : 'text-[30px]'" class="currency-symbol text-white">{{ item.symbol }}</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Toggle button for coverage list -->
     <section class="px-10">
      <div class="coverage-toggle" @click="toggleCoverageList">
        <span class="text-[18px]">{{ isListOpen ? 'Close coverage list' : 'View full coverage list' }}</span>
        <span class="toggle-icon">{{ isListOpen ? '−' : '+' }}</span>
      </div>
  
      <div class="divider"></div>
  
      <!-- Coverage list grid -->
      <div v-if="isListOpen" class="coverage-grid mx-10">
        <div v-for="region in regions" :key="region.name" class="region-column">
          <h3 class="region-title">{{ region.name }}</h3>
          <ul class="country-list">
            <li v-for="country in region.countries" :key="country" class="country-item">
              {{ country }}
            </li>
          </ul>
        </div>
      </div>
  
      <div v-if="isListOpen" class="divider mx-10"></div>
     </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import countriesSupported from "@/assets/img/countries-supported.png"
  
  // State for toggling the coverage list
  const isListOpen = ref(false);
  
  // Marquee animation state
  const marqueePosition = ref(0);
  const marqueeSpeed = 0.5;
  const marqueeWidth = ref(0);
  const contentWidth = ref(0);
  const marqueeRef = ref<HTMLElement | null>(null);
  let animationId: number | null = null;
  
  // Currency items for the marquee
  const currencyItems = [
    { country: 'Germany', symbol: '€', symbolClass: 'eur', size: 'big' },
    { country: 'United States', symbol: '$', symbolClass: 'usd', size: 'big' },
    { country: 'United Kingdom', symbol: '£', symbolClass: 'gbp', size: 'big' },
    { country: 'Nigeria', symbol: '₦', symbolClass: 'ngn', size: 'big' },
    { country: 'China', symbol: 'CNY', symbolClass: 'cny', size: 'small' },
    { country: 'Canada', symbol: 'CAD', symbolClass: 'cad', size: 'small' },
    { country: 'Ghana', symbol: 'GHS', symbolClass: 'ghs', size: 'small' },
    { country: 'Kenya', symbol: 'KES', symbolClass: 'kes', size: 'small' },
    { country: 'Cameroon', symbol: 'XAF', symbolClass: 'xaf', size: 'small' },
    { country: 'Ivory Coast', symbol: 'XOF', symbolClass: 'xof', size: 'small' },
    { country: 'Portugal', symbol: '€', symbolClass: 'eur', size: 'big' },
    { country: 'Scotland', symbol: '£', symbolClass: 'usd', size: 'big' }
  ];
  
  // Duplicate items to create seamless infinite scroll effect
  const duplicatedItems = computed(() => {
    return [...currencyItems, ...currencyItems, ...currencyItems];
  });
  
  // Region data for the coverage grid
  const regions = [
    {
      name: 'Europe',
      countries: [
        'Austria', 'Belgium', 'Croatia', 'Cyprus', 'Estonia', 'Finland', 'France', 
        'Germany', 'Greece', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 
        'Malta', 'Netherland', 'Portugal', 'Scotland', 'Slovakia', 'Slovenia', 
        'South Georgia', 'Spain', 'United Kingdom', 'British Antarctic Territory', 
        'Falkland Islands', 'Gibraltar', 'Guernsey', 'Isle of Man'
      ]
    },
    {
      name: 'Africa',
      countries: [
        'Benin', 'Burkina Faso', 'Côte d\'Ivoire', 'Cameroon', 'Central African Republic',
        'Chad', 'Republic of the Congo', 'Equatorial Guinea', 'Gabon', 'Ghana',
        'Guinea-Bissau', 'Kenya', 'Mali', 'Niger', 'Nigeria', 'Senegal', 'Togo'
      ]
    },
    {
      name: 'Middle East',
      countries: [
        'UAE', 'Turkey', 'Saudi Arabia'
      ]
    },
    {
      name: 'Americas',
      countries: [
        'United States', 'Canada', 'Mexico'
      ]
    },
    {
      name: 'APAC',
      countries: [
        'China', 'Hong Kong', 'Singapore'
      ]
    },
    {
      name: 'Coming soon',
      countries: [
        'Rwanda', 'Uganda', 'South Africa', 'Zambia', 'Egypt'
      ]
    }
  ];
  
  // Toggle the coverage list visibility
  const toggleCoverageList = () => {
    isListOpen.value = !isListOpen.value;
  };
  
  // Animate the marquee
  const animateMarquee = () => {
    marqueePosition.value -= marqueeSpeed;
    
    // Reset position when first set of items has scrolled out of view
    if (Math.abs(marqueePosition.value) >= contentWidth.value / 3) {
      marqueePosition.value = 0;
    }
    
    animationId = requestAnimationFrame(animateMarquee);
  };
  
  // Initialize and clean up the animation
  onMounted(() => {
    if (marqueeRef.value) {
      const marqueeElement = marqueeRef.value;
      const firstChild = marqueeElement.querySelector('.marquee-content') as HTMLElement;
      
      if (firstChild) {
        contentWidth.value = firstChild.offsetWidth;
      }
      
      marqueeWidth.value = marqueeElement.offsetWidth;
    }
    
    animationId = requestAnimationFrame(animateMarquee);
  });
  
  onUnmounted(() => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
  });
  </script>
  
  <style scoped>
  .currency-marquee-container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #333;
  }
  
  .marquee-wrapper {
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
  }
  
  .marquee {
    width: 100%;
    overflow: hidden;
  }
  
  .marquee-content {
    display: flex;
    white-space: nowrap;
  }
  
  .marquee-item {
    display: flex;
    align-items: center;
    margin-right: 30px;
    color: #D7D7D7;
  }
  
  .country-name {
    margin-right: 8px;
    font-size: 34px;
    font-weight: 500;
    color: #D7D7D7;
  }
  
  .currency-symbol {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: #D7D7D7;
    /* font-size: 14px; */
    font-weight: 500;
  }
  
  .coverage-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    cursor: pointer;
    color: #D7D7D7;
    font-size: 18px;
  }
  
  .toggle-icon {
    font-size: 30px;
    font-weight: 300;
  }
  
  .divider {
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin: 10px 0;
  }
  
  .coverage-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px 0;
  }
  
  .region-column {
    flex: 1;
    min-width: 150px;
  }
  
  .region-title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #333;
  }
  
  .country-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .country-item {
    font-size: 14px;
    color: #9e9e9e;
    margin-bottom: 10px;
  }
  
  /* Currency symbol specific styles */
  .usd, .eur, .gbp, .ngn, .cny, .cad, .ghs {
    color: #9e9e9e;
    background-color: #e0e0e0;
  }
  
  @media (max-width: 768px) {
    .coverage-grid {
      flex-direction: column;
    }
    
    .region-column {
      width: 100%;
    }
  }
  </style>