<template>
    <div class="">
      <div class="w-full max-w-md rounded-3xl overflow-hidden bg-[#5cb85c] pt-6 p-2">
        <div class="bg-white rounded-2xl p-6 space-y-6">
          <div>
            <label class="text-[#1A1A1B] text-base font-medium">Enter amount</label>
            <div class="flex justify-between items-center">
              <input
                v-model="amount"
                type="text"
                class="text-2xl font-semibold focus:outline-none w-1/2"
                @input="calculateExchange"
              />
              <div class="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full cursor-pointer" @click="showSourceCurrencies = true">
                <img :src="getFlag(sourceCurrency)" alt="Currency flag" class="w-6 h-6 rounded-full" />
                <span class="text-xl font-semibold">{{ sourceCurrency }}</span>
                <ChevronDown class="h-5 w-5" />
              </div>
            </div>
          </div>
  
          <div class="flex justify-center">
            <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <ArrowDown class="h-6 w-6 text-gray-500" />
            </div>
          </div>
  
          <div>
            <label class="text-[#1A1A1B] text-base font-medium">You'll get</label>
            <div class="flex justify-between items-center">
              <div class="text-xl font-semibold">{{ formattedTargetAmount }}</div>
              <div class="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full cursor-pointer" @click="showTargetCurrencies = true">
                <img :src="getFlag(targetCurrency)" alt="Currency flag" class="w-6 h-6 rounded-full" />
                <span class="text-xl font-semibold">{{ targetCurrency }}</span>
                <ChevronDown class="h-5 w-5" />
              </div>
            </div>
          </div>
  
          <div class="space-y-3 mt-6">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                <span class="text-[#1A1A1B]">{{ transferFee }} {{ sourceCurrency }}</span>
              </div>
              <span class="text-[#1A1A1B]">Transfer fee</span>
            </div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                <span class="text-[#1A1A1B]">{{ ourFee }} {{ sourceCurrency }}</span>
              </div>
              <span class="text-[#1A1A1B]">Our fee</span>
            </div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <Minus class="h-4 w-4 text-[#1A1A1B] mr-2" />
                <span class="text-[#1A1A1B]">{{ totalFees }} {{ sourceCurrency }}</span>
              </div>
              <span class="text-[#1A1A1B]">Total fees</span>
            </div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <Equal class="h-4 w-4 text-[#1A1A1B] mr-2" />
                <span class="text-[#1A1A1B]">{{ amountToConvert }} {{ sourceCurrency }}</span>
              </div>
              <span class="text-[#1A1A1B]">Total amount we'll convert</span>
            </div>
            
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <X class="h-4 w-4 text-[#1A1A1B] mr-2" />
                <span class="text-[#1A1A1B]">{{ exchangeRate }}</span>
              </div>
              <span class="text-gray-900">Guaranteed rate (1h)</span>
            </div>
          </div>
  
          <button class="w-full bg-[#3BAB22] text-white py-4 rounded-full text-sm font-medium mt-6">
            Exchange money now
          </button>
        </div>
      </div>
  
      <!-- Source Currency Selection Modal -->
      <div v-if="showSourceCurrencies" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
        <div class="bg-white rounded-lg p-4 w-80">
          <h3 class="text-base font-semibold mb-4">Select source currency</h3>
          <div class="space-y-2 max-h-60 overflow-y-auto">
            <div 
              v-for="currency in currencies" 
              :key="currency.code"
              class="flex items-center text-sm p-2 hover:bg-gray-100 rounded cursor-pointer"
              @click="selectSourceCurrency(currency.code)"
            >
              <img :src="currency.flag" alt="Currency flag" class="w-6 h-6 rounded-full mr-2" />
              <span>{{ currency.code }} - {{ currency.name }}</span>
            </div>
          </div>
          <button @click="showSourceCurrencies = false" class="mt-4 w-full bg-gray-200 py-2 rounded-full">
            Cancel
          </button>
        </div>
      </div>
  
      <!-- Target Currency Selection Modal -->
      <div v-if="showTargetCurrencies" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
        <div class="bg-white rounded-lg p-4 w-80">
          <h3 class="text-base font-semibold mb-4">Select target currency</h3>
          <div class="space-y-2 max-h-60 overflow-y-auto">
            <div 
              v-for="currency in currencies" 
              :key="currency.code"
              class="flex text-sm items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
              @click="selectTargetCurrency(currency.code)"
            >
              <img :src="currency.flag" alt="Currency flag" class="w-6 h-6 rounded-full mr-2" />
              <span>{{ currency.code }} - {{ currency.name }}</span>
            </div>
          </div>
          <button @click="showTargetCurrencies = false" class="mt-4 w-full bg-gray-200 py-2 rounded-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { ChevronDown, ArrowDown, Minus, Equal, X } from 'lucide-vue-next';
  
  // Currency data
  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: 'https://flagcdn.com/w20/us.png', rate: 1 },
    { code: 'CNY', name: 'Chinese Yuan', flag: 'https://flagcdn.com/w20/cn.png', rate: 7.24 },
    { code: 'EUR', name: 'Euro', flag: 'https://flagcdn.com/w20/eu.png', rate: 0.92 },
    { code: 'GBP', name: 'British Pound', flag: 'https://flagcdn.com/w20/gb.png', rate: 0.79 },
    { code: 'JPY', name: 'Japanese Yen', flag: 'https://flagcdn.com/w20/jp.png', rate: 151.76 },
  ];
  
  // State
  const amount = ref('1,000');
  const sourceCurrency = ref('USD');
  const targetCurrency = ref('CNY');
  const showSourceCurrencies = ref(false);
  const showTargetCurrencies = ref(false);
  
  // Fees
  const transferFee = ref(5.2);
  const ourFee = ref(3.7);
  
  // Computed values
  const numericAmount = computed(() => {
    return parseFloat(amount.value.replace(/,/g, '')) || 0;
  });
  
  const totalFees = computed(() => {
    return (transferFee.value + ourFee.value).toFixed(1);
  });
  
  const amountToConvert = computed(() => {
    return (numericAmount.value - parseFloat(totalFees.value)).toFixed(2);
  });
  
  const exchangeRate = computed(() => {
    const sourceRate = currencies.find(c => c.code === sourceCurrency.value)?.rate || 1;
    const targetRate = currencies.find(c => c.code === targetCurrency.value)?.rate || 1;
    return (targetRate / sourceRate).toFixed(2);
  });
  
  const targetAmount = computed(() => {
    return parseFloat(amountToConvert.value) * parseFloat(exchangeRate.value);
  });
  
  const formattedTargetAmount = computed(() => {
    return targetAmount.value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  });
  
  // Methods
  function getFlag(currencyCode: string): string {
    return currencies.find(c => c.code === currencyCode)?.flag || '';
  }
  
  function selectSourceCurrency(code: string) {
    sourceCurrency.value = code;
    showSourceCurrencies.value = false;
    calculateExchange();
  }
  
  function selectTargetCurrency(code: string) {
    targetCurrency.value = code;
    showTargetCurrencies.value = false;
    calculateExchange();
  }
  
  function calculateExchange() {
    // Format the input with commas
    if (amount.value) {
      const value = amount.value.replace(/,/g, '');
      if (!isNaN(parseFloat(value))) {
        amount.value = parseFloat(value).toLocaleString('en-US');
      }
    }
  }
  
  // Initialize
  calculateExchange();
  </script>
  
  <style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  </style>