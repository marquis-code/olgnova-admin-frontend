<template>
  <div class="">
    <div
      class="w-full lg:w-[606px] rounded-3xl overflow-hidden bg-[#5cb85c] pt-6 p-2"
    >
      <div class="bg-white rounded-2xl pt-6 px-6">
     <section class="border-[0.5px] rounded-xl border-gray-100">
      <div class="p-3">
          <label class="text-[#1A1A1B] text-sm"
            >Enter amount</label
          >
          <div class="flex justify-between items-center">
            <input
              v-model="amount"
              type="text"
              class="text-2xl font-medium  focus:outline-none w-1/2"
              @input="calculateExchange"
            />
            <div
              class="flex items-center space-x-2 bg-[#F7F7F7] px-4 py-2 rounded-full cursor-pointer"
              @click="showSourceCurrencies = true"
            >
              <img
                :src="getFlag(sourceCurrency)"
                alt="Currency flag"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-xl font-semibold">{{ sourceCurrency }}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
          </div>
        </div>

        <div class="flex justify-center relative">
          <div class="border-[0.5px] border-gray-50 w-full top-6 absolute"></div>
          <div
            class="w-12 h-12 space-x-2 rounded-full bg-[#F7F7F7] flex items-center justify-center"
          >
          <svg width="9" height="22" viewBox="0 0 9 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.16684 1.90916C6.16684 1.17278 6.7638 0.575831 7.50018 0.575831C8.23656 0.575831 8.83351 1.17278 8.83351 1.90916L8.83324 18.2565C8.83341 18.8852 8.83357 19.5035 8.75897 19.9816C8.68792 20.4369 8.46224 21.376 7.41541 21.7689C6.38452 22.1558 5.51695 21.6483 5.11866 21.3768C4.69628 21.0889 4.21636 20.6539 3.72432 20.2078L3.72431 20.2078L2.76373 19.3373C2.25896 18.8802 1.76912 18.4365 1.44421 18.0458C1.14389 17.6848 0.554296 16.8686 0.986059 15.889C1.41782 14.9093 2.45592 14.7079 2.94339 14.6443C3.47078 14.5756 4.15611 14.5757 4.86232 14.5759L6.16684 14.5759L6.16684 1.90916Z" fill="#101828"/>
</svg>

<svg width="9" height="22" viewBox="0 0 9 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2.83291 20.5757C2.83291 21.3121 2.23596 21.909 1.49958 21.909C0.7632 21.909 0.166246 21.3121 0.166246 20.5757L0.166522 4.22835C0.166352 3.5997 0.166186 2.98132 0.240788 2.50326C0.311836 2.04798 0.537516 1.1089 1.58434 0.715978C2.61524 0.32904 3.4828 0.836525 3.8811 1.10802C4.30347 1.39592 4.78339 1.831 5.27544 2.27707L5.27545 2.27708L6.23603 3.14751C6.74079 3.60471 7.23064 4.04839 7.55555 4.43903C7.85587 4.8001 8.44546 5.61627 8.0137 6.5959C7.58193 7.57552 6.54384 7.77697 6.05637 7.84053C5.52898 7.90929 4.84365 7.90915 4.13744 7.909L2.83291 7.909L2.83291 20.5757Z" fill="#101828"/>
</svg>

          </div>
        </div>

        <div class="p-3">
          <label class="text-[#1A1A1B] text-sm">You'll get</label>
          <div class="flex justify-between items-center">
            <!-- <div class="text-xl font-semibold  w-1/2">{{ formattedTargetAmount }}</div> -->
            <input
              v-model="formattedTargetAmount"
              type="text"
              disabled
              class="text-2xl bg-white font-medium  disabled:opacity-90  focus:outline-none w-1/2"
            />
            <div
              class="flex items-center space-x-2  bg-[#F7F7F7] px-4 py-2 rounded-full cursor-pointer"
              @click="showTargetCurrencies = true"
            >
              <img
                :src="getFlag(targetCurrency)"
                alt="Currency flag"
                class="w-6 h-6 rounded-full"
              />
              <span class="text-xl font-semibold">{{ targetCurrency }}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
     </section>

        <div class="space-y-3 mt-6">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="7.64941" r="4" fill="#DDDDDD"/>
</svg>

              <span class="text-[#1A1A1B] pl-1"
                >{{ transferFee }} {{ sourceCurrency }}</span
              >
            </div>
            <span class="text-[#454745] font-light">Transfer fee</span>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="7.64941" r="4" fill="#DDDDDD"/>
</svg>

              <span class="text-[#1A1A1B] pl-1"
                >{{ ourFee }} {{ sourceCurrency }}</span
              >
            </div>
            <span class="text-[#454745] font-light">Our fee</span>
          </div>

          <div class="flex justify-between items-center border-gray-100 border-t-[0.5px] pt-3">
            <div class="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="#DDDDDD"/>
              <path d="M12 8L4 8" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-[#1A1A1B] pl-2"
                >{{ totalFees }} {{ sourceCurrency }}</span
              >
            </div>
            <span class="text-[#454745] font-light">Total fees</span>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="#DDDDDD"/>
              <path d="M4 6L12 6" stroke="#222222" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M4 10L12 10" stroke="#222222" stroke-width="1.5" stroke-linecap="round"/>
              </svg>

              <div class="text-[#1A1A1B] flex pl-2">
                <!-- {{ amountToConvert }}  -->
                <input
                  v-model="amountToConvert"
                  type="text"
                  disabled
                  class="text-[#1A1A1B]  bg-white py-0 w-1/2  focus:outline-none"
                />

                <p class="">{{ sourceCurrency }}</p>
                </div>
            </div>
            <span class="text-[#454745] font-light">Total amount we'll convert</span>
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center">
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="8" fill="#DDDDDD"/>
<path d="M11 5L8 8M8 8L5 11M8 8L11 11M8 8L5 5" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <span class="text-[#1A1A1B] pl-2">{{ exchangeRate }}</span>
            </div>
            <span class="text-gray-900 font-medium">Guaranteed rate (1h)</span>
          </div>
        </div>

  <div class="pb-6 pt-9">
    <button
          class="w-full bg-[#3BAB22] text-white py-4 rounded-full text-sm font-medium mt-6"
        >
          Exchange money now
        </button>
  </div>
      </div>
    </div>

    <!-- Source Currency Selection Modal -->
    <div
      v-if="showSourceCurrencies"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
    >
      <div class="bg-white rounded-lg p-4 w-80">
        <h3 class="text-base font-semibold mb-4">Select source currency</h3>
        <div class="space-y-2 max-h-60 overflow-y-auto">
          <div
            v-for="currency in currencies"
            :key="currency.code"
            class="flex items-center text-sm p-2 hover:bg-gray-100 rounded cursor-pointer"
            @click="selectSourceCurrency(currency.code)"
          >
            <img
              :src="currency.flag"
              alt="Currency flag"
              class="w-6 h-6 rounded-full mr-2"
            />
            <span>{{ currency.code }} - {{ currency.name }}</span>
          </div>
        </div>
        <button
          @click="showSourceCurrencies = false"
          class="mt-4 w-full bg-gray-200 py-2 rounded-full"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- Target Currency Selection Modal -->
    <div
      v-if="showTargetCurrencies"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
    >
      <div class="bg-white rounded-lg p-4 w-80">
        <h3 class="text-base font-semibold mb-4">Select target currency</h3>
        <div class="space-y-2 max-h-60 overflow-y-auto">
          <div
            v-for="currency in currencies"
            :key="currency.code"
            class="flex text-sm items-center p-2 hover:bg-gray-100 text-[#222222] rounded cursor-pointer"
            @click="selectTargetCurrency(currency.code)"
          >
            <img
              :src="currency.flag"
              alt="Currency flag"
              class="w-6 h-6 rounded-full mr-2"
            />
            <span>{{ currency.code }} - {{ currency.name }}</span>
          </div>
        </div>
        <button
          @click="showTargetCurrencies = false"
          class="mt-4 w-full bg-gray-200 py-2 rounded-full"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronDown, ArrowDown, Minus, Equal, X } from "lucide-vue-next";
import usFlag from "@/assets/icons/us-flag.svg"
import euFlag from "@/assets/icons/eu-flag.svg"
import gbFlag from "@/assets/icons/gb-flag.svg"
import cnFlag from "@/assets/icons/cn-flag.svg"

// Currency data
const currencies = [
  {
    code: "USD",
    name: "US Dollar",
    flag: usFlag,
    rate: 1,
  },
  {
    code: "CNY",
    name: "Chinese Yuan",
    flag: cnFlag,
    rate: 7.24,
  },
  {
    code: "EUR",
    name: "Euro",
    flag: euFlag,
    rate: 0.92,
  },
  {
    code: "GBP",
    name: "British Pound",
    flag: gbFlag,
    rate: 0.79,
  },
  // {
  //   code: "JPY",
  //   name: "Japanese Yen",
  //   flag: "https://flagcdn.com/w20/jp.png",
  //   rate: 151.76,
  // },
];

// State
const amount = ref("1,000");
const sourceCurrency = ref("USD");
const targetCurrency = ref("CNY");
const showSourceCurrencies = ref(false);
const showTargetCurrencies = ref(false);

// Fees
const transferFee = ref(5.2);
const ourFee = ref(3.7);

// Computed values
const numericAmount = computed(() => {
  return parseFloat(amount.value.replace(/,/g, "")) || 0;
});

const totalFees = computed(() => {
  return (transferFee.value + ourFee.value).toFixed(1);
});

const amountToConvert = computed(() => {
  return (numericAmount.value - parseFloat(totalFees.value)).toFixed(2);
});

const exchangeRate = computed(() => {
  const sourceRate =
    currencies.find((c) => c.code === sourceCurrency.value)?.rate || 1;
  const targetRate =
    currencies.find((c) => c.code === targetCurrency.value)?.rate || 1;
  return (targetRate / sourceRate).toFixed(2);
});

const targetAmount = computed(() => {
  return parseFloat(amountToConvert.value) * parseFloat(exchangeRate.value);
});

const formattedTargetAmount = computed(() => {
  return targetAmount.value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
});

// Methods
function getFlag(currencyCode: string): string {
  return currencies.find((c) => c.code === currencyCode)?.flag || "";
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
    const value = amount.value.replace(/,/g, "");
    if (!isNaN(parseFloat(value))) {
      amount.value = parseFloat(value).toLocaleString("en-US");
    }
  }
}

// Initialize
calculateExchange();
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
</style>
