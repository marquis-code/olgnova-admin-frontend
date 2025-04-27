<template>
  <div class="font-sans text-gray-900">
    <NavbarSticky />
    <!-- Hero Section -->
 <section class="p-4">
  <section class="bg-[#1C5310] text-white pt-56 pb-16 rounded-3xl relative overflow-hidden">
    <div class="absolute inset-0 grid-background"></div>
      <!-- <div class="absolute inset-0 opacity-20">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-white/10"></div>
        </div>
        <div class="grid grid-rows-12 h-full absolute inset-0">
          <div v-for="i in 12" :key="i" class="border-b border-white/10"></div>
        </div>
      </div> -->
      <div class="container mx-auto px-4 relative">
        <p class="text-center text-[16px] lg:text-[20px] mb-2 opacity-90">(OTC) OVER THE COUNTER</p>

        <div class="relative z-10 container mx-auto px-4 text-center">
        <h1 class="text-5xl lg:text-8xl md:text-8xl font-bold text-white mb-4">
         TRADE BEYOND
          <div class="flex items-center justify-center">
            <span class="text-white">EXCHANGES</span>
          </div>
          <!-- <span class="text-[#3BAB22]">CUSTOMERS</span> -->
        </h1>
        </div>
        <p 
          class="text-center max-w-xl mx-auto text-lg pt-4 leading-relaxed mb-12 opacity-90"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
        >
        Access a decentralized network to buy and sell directly with Capera, offering flexibility, customization, and access to unique financial instruments.
        </p>
        <div class="flex justify-center mb-16">
          <a 
            href="mailto:hello@withcapera.com"
            class="bg-[#3BAB22] block hover:bg-green-500 text-white px-8 py-3.5 rounded-full transition-all transform"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 500 } }"
          >
            Talk to us
          </a>
        </div>
        
         
        <div class="flex justify-center items-center">
          <img src="@/assets/icons/currency-exchange-illustration.svg" />
         </div>
        
      </div>
    </section>
 </section>

    <!-- What is OTC Section -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <p class="text-center text-[20px] font-medium text-[#1A1A1B] mb-2">OTC</p>
        <h2 
          class="text-5xl lg:text-8xl md:text-8xl font-bold text-[#1A1A1B] text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          WHAT IS OTC?
        </h2>
        
        <div 
          class="bg-gray-50 rounded-xl p-8 md:p-12 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <p style="font-weight: 400;" class="text-[#7A7A7A] text-[20px] font-[400] lg:text-4xl mb-6 leading-loose">
            Briefly, OTC (Over-the-counter) is a market where participants exchange equities, commodities, currencies or other instruments. The owners of the assets list with the required information such as the amount, exchange rate and other conditions, then wait for buyers to meet these requirements.
          </p>
          
          <p style="font-weight: 400;" class="text-[#7A7A7A] text-[20px] font-[400] lg:text-4xl mb-6 leading-loose">
            Unlike larger exchange companies, market-makers quote prices at which they will buy and sell in an OTC market. This point distinguishes OTC desk from traditional exchanges, whereas its price is not necessarily publicly disclosed.
          </p>
          
          <p style="font-weight: 400;" class="text-[#7A7A7A] text-[20px] font-[400] lg:text-4xl leading-loose">
            Moreover, the OTC market does not have this limitation, unlike the well-standardised products traded on the deal with a narrow range of quantity, quality, and identity to be transparent in trading. Therefore, we are talking about an independent and full of opportunities in Over The Counter trading.
          </p>
        </div>
      </div>
    </section>

    <!-- Unlock Potential Section -->
    <section class="py-20">
      <div class="">
        <h2 
          class="text-[28px] font-medium md:text-6xl text-[#1A1A1B] text-center mb-4"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Unlock Your Potential with Capera's<br>OTC Markets.
        </h2>
        
        <p 
          class="text-center text-[#454745] text-[16px] font-medium max-w-lg leading-loose mx-auto mb-16"
          v-motion
          :initial="{ opacity: 0 }"
          :visibleOnce="{ opacity: 1, transition: { delay: 200, duration: 800 } }"
        >
          Capera puts the power of the OTC markets in your hands, offering unparalleled flexibility and customization in trading. Whether you're a seasoned trader or a growing business, our OTC solutions empower you to:
        </p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16 container mx-auto px-4">
          <div 
            class="bg-white p-8"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
          >
            <div class="text-green-600 mb-4">
             <img src="@/assets/icons/trendingUp.svg" />
            </div>
            <h3 class="text-[18px] font-medium lg:text-2xl mb-3">Hedge Against Volatility</h3>
            <p class="text-[#454745] text-[14px] font-[400] lg:text-lg leading-relaxed">Protect your funds and manage risk with tailored options.</p>
          </div>
          
          <div 
            class="bg-white p-8"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
          >
            <div class="text-green-600 mb-4">
              <img src="@/assets/icons/keyIcon.svg" />
            </div>
            <h3 class="text-[18px] font-medium lg:text-2xl mb-3">Access Emerging Opportunities</h3>
            <p class="text-[#454745] text-[14px] font-[400] lg:text-lg leading-relaxed">Trade currencies not listed on major exchanges, unlocking potential for higher returns.</p>
          </div>
          
          <div 
            class="bg-white p-8"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 700, duration: 800 } }"
          >
            <div class="text-green-600 mb-4">
              <img src="@/assets/icons/settingsIcon.svg" />
            </div>
            <h3 class="text-[18px] font-medium lg:text-2xl mb-3">Customize Your Trades</h3>
            <p class="text-[#454745] text-[14px] font-[400] lg:text-lg leading-relaxed">Enjoy flexibility in transaction terms to meet your unique needs.</p>
          </div>
        </div>
        
        <div 
          class="overflow-hidden p-6"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 1000 } }"
        >
          <img src="@/assets/img/smiling-texting.png" alt="Trader using mobile app" class="w-full h-auto" />
        </div>
      </div>
    </section>

    <!-- Start Trading Now Section -->
    <section class="py-20 bg-[#3BAB22] m-3 rounded-xl  text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-white/10"></div>
        </div>
        <div class="grid grid-rows-12 h-full absolute inset-0">
          <div v-for="i in 12" :key="i" class="border-b border-white/10"></div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 relative">
        <h2 
          class="text-5xl lg:text-8xl md:text-8xl font-semibold text-center mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          START TRADING NOW
        </h2>
        
        <p 
          class="text-center max-w-2xl text-[16px] lg:text-lg mx-auto mb-10 opacity-90"
          v-motion
          :initial="{ opacity: 0 }"
          :visibleOnce="{ opacity: 1, transition: { delay: 200, duration: 800 } }"
        >
          Discover how Capera's expertise can elevate your financial strategy. Explore our comprehensive OTC trading solutions today!
        </p>
        
        <!-- <div class="flex justify-center mb-16">
          <button 
            class="bg-white text-green-600 px-8 py-3 rounded-full flex items-center transition-all transform hover:scale-105"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 500 } }"
          >
            Contact us
            <ChevronRightIcon class="h-5 w-5 ml-2" />
          </button>
        </div> -->
        <div class="flex justify-center mb-16">
        <a href="mailto:hello@withcapera.com" class="inline-flex text-lg items-center text-white font-medium hover:underline">
          Talk to us
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.50005 6C9.50005 6 15.5 10.4189 15.5 12C15.5 13.5812 9.5 18 9.5 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </a>
          </div>
        <div class="relative flex justify-center items0-center">
    <!-- Original image -->
    <img 
      src="@/assets/icons/start-trading-otc-illustration.svg" 
      class="lg:h-[700px] lg:w-auto" 
      alt="Trading OTC illustration" 
    />
    
    <!-- Dark transparent overlay -->
    <div class="absolute inset-0 bg-[#3BAB22]/50"></div>
  </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="">
        <p class="text-center text-[16px] font-[500] lg:text-[20px] text-gray-600 mb-2">FEATURES</p>
        <h2 
          class="text-[28px] font-medium md:text-6xl text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Large currency trades with private,<br>personalized services
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8 p-4">
          <div 
            class="bg-gray-50 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
          >
            <div class="flex mb-6">
              <div class="p-4 mr-4">
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M68 5.00342C55.4252 5.00342 45 14.7898 45 27.1369C45 33.0507 47.412 38.4065 51.3 42.3544C51.402 42.7552 51.2792 44.024 49.9744 45.8968C49.3068 46.718 49.1212 47.8304 49.4864 48.824C49.8512 49.8176 50.7132 50.5452 51.7536 50.7388C55.3164 51.4016 59.7408 50.4152 62.898 48.736C64.3556 49.01 66.5152 49.272 68 49.2704C80.5748 49.2704 91 39.4839 91 27.1369C91 14.7898 80.5748 5.00342 68 5.00342ZM61.9688 25.0034C60.312 25.0034 58.9688 26.3466 58.9688 28.0034C58.9688 29.6603 60.312 31.0034 61.9688 31.0034H62.0012C63.658 31.0034 65.0012 29.6603 65.0012 28.0034C65.0012 26.3466 63.658 25.0034 62.0012 25.0034H61.9688ZM73.9688 25.0034C72.312 25.0034 70.9688 26.3466 70.9688 28.0034C70.9688 29.6603 72.312 31.0034 73.9688 31.0034H74.0012C75.658 31.0034 77.0012 29.6603 77.0012 28.0034C77.0012 26.3466 75.658 25.0034 74.0012 25.0034H73.9688Z" fill="#1A1A1B"/>
<g opacity="0.4">
<path d="M16.001 49.0036C16.001 41.2716 22.269 35.0034 30.001 35.0034C37.7329 35.0034 44.0011 41.2716 44.0011 49.0036C44.0011 56.7356 37.7329 63.0036 30.001 63.0036C22.269 63.0036 16.001 56.7356 16.001 49.0036Z" fill="#1A1A1B"/>
<path d="M15.3044 70.7055C24.3123 65.7687 35.6898 65.7687 44.6976 70.7055C46.4232 71.5999 50.1984 73.5631 52.1336 75.3067C53.3268 76.3815 54.704 78.0003 54.96 80.1571C55.2432 82.5419 54.0708 84.5927 52.2368 86.2007C49.244 88.8255 45.5612 91.0027 40.7788 91.0027H19.2232C14.4411 91.0027 10.7583 88.8255 7.76516 86.2007C5.93148 84.5927 4.75888 82.5419 5.04208 80.1571C5.2982 78.0003 6.67552 76.3815 7.86872 75.3067C9.80392 73.5631 13.5788 71.5999 15.3044 70.7055Z" fill="#1A1A1B"/>
</g>
</svg>

              </div>
            </div>
            <h3 class="text-[24px] lg:text-5xl py-[32px] font-bold">Expert OTC Support</h3>
            <p class="text-[#454745] text-[16px] font-[400] lg:text-lg leading-relaxed">Our easy-to-use, self-service Request for Quotation (RFQ) offers expert OTC support. Receive executable quotes in seconds and settle trades instantly using the existing funds in your account.</p>
          </div>
          
          <div 
            class="bg-gray-50 p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="flex mb-6">
              <div class="p-4 mr-4">
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M55.218 5.58398C52.8692 5.2021 50.4576 5.00342 48 5.00342C24.3809 5.00342 5 23.3569 5 46.2702C5 57.261 9.47888 67.2294 16.738 74.601C17.8091 75.6886 18.1575 76.8034 18.0035 77.6242C17.4345 80.6086 16.1479 83.3814 14.2767 85.683C13.609 86.5042 13.4234 87.6166 13.7885 88.6102C14.1536 89.6034 15.0152 90.331 16.0558 90.5246C22.5002 91.7234 29.1817 90.6434 34.9086 87.5978C35.8427 87.101 36.4529 86.7774 36.911 86.5598C37.0372 86.491 37.3734 86.3662 37.7078 86.4178C38.1564 86.479 38.7592 86.5914 39.7079 86.7698C42.4412 87.283 45.2164 87.5406 48 87.537C71.6192 87.537 91 69.1834 91 46.2702C91 43.5674 90.7304 40.9278 90.2156 38.3746C88.8556 40.025 87.3796 41.409 85.9352 42.5438C83.5572 44.4126 81.2164 45.6618 79.4796 46.4474C79.0168 46.657 78.2336 46.9942 77.4072 47.2886C76.8352 47.4926 75.3996 48.001 73.9928 48.0002C72.586 48.001 71.15 47.4926 70.578 47.2886C69.7516 46.9942 68.9684 46.657 68.5056 46.4474C66.7688 45.6618 64.4284 44.4126 62.05 42.5438C57.1972 38.7311 51.9928 32.1095 51.9928 22.0034V12.0034C51.9928 9.37482 53.2604 7.0423 55.218 5.58398Z" fill="#1A1A1B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 48.0034C28 45.7942 29.7909 44.0034 32 44.0034H32.0359C34.245 44.0034 36.0359 45.7942 36.0359 48.0034C36.0359 50.2126 34.245 52.0034 32.0359 52.0034H32C29.7909 52.0034 28 50.2126 28 48.0034ZM43.982 48.0034C43.982 45.7942 45.7728 44.0034 47.982 44.0034H48.018C50.2272 44.0034 52.018 45.7942 52.018 48.0034C52.018 50.2126 50.2272 52.0034 48.018 52.0034H47.982C45.7728 52.0034 43.982 50.2126 43.982 48.0034Z" fill="#1A1A1B"/>
<path d="M73.9922 5.00342C74.5162 5.03294 75.2006 5.20466 75.6522 5.50454C76.2518 5.83158 77.9826 6.76858 79.1062 7.21798C81.3674 8.12242 84.481 9.00342 87.9922 9.00342C89.649 9.00342 90.9922 10.3466 90.9922 12.0034V22.0034C90.9922 30.1667 86.8542 35.4627 82.8454 38.6124C80.8594 40.1726 78.8878 41.2274 77.4162 41.893C76.6438 42.243 74.8278 43.0034 73.9922 43.0002C73.1562 43.0034 71.3406 42.243 70.5682 41.893C69.0962 41.2274 67.1246 40.1726 65.1386 38.6124C61.1298 35.4627 56.9922 30.1667 56.9922 22.0034V12.0034C56.9922 10.3466 58.3354 9.00342 59.9922 9.00342C63.5034 9.00342 66.617 8.12242 68.8778 7.21798C70.0014 6.76858 71.7354 5.82962 72.335 5.50258C72.7866 5.2027 73.4678 5.03294 73.9922 5.00342Z" fill="#1A1A1B"/>
</svg>

              </div>
            </div>
            <h3 class="text-[24px] lg:text-5xl py-[32px] font-bold">Trade via chat</h3>
            <p class="text-[#454745] text-[16px] font-[400] lg:text-lg leading-relaxed">Chat securely with our trade desk to confirm the amount and exchange rate for your trade. Benefit from white-glove, personalized service from initial consultation to trade execution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-20">
      <div class="px-4">
        <h2 
          class="text-4xl md:text-6xl font-medium text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Flexible solutions with benefits you can't get<br>trading on the exchanges.
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            class="bg-[#F7F7F7] p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          >
            <div class="flex mb-6">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M70 9.00342H26C16.6112 9.00342 9 16.6146 9 26.0034C9 35.3923 16.6112 43.0034 26 43.0034H70C79.3888 43.0034 87 35.3923 87 26.0034C87 16.6146 79.3888 9.00342 70 9.00342Z" fill="#1A1A1B"/>
<path d="M26 36.0034C31.5228 36.0034 36 31.5263 36 26.0034C36 20.4806 31.5228 16.0034 26 16.0034C20.4772 16.0034 16 20.4806 16 26.0034C16 31.5263 20.4772 36.0034 26 36.0034Z" fill="#1A1A1B"/>
<path opacity="0.4" d="M70 53.0034H26C16.6112 53.0034 9 60.6146 9 70.0034C9 79.3923 16.6112 87.0034 26 87.0034H70C79.3888 87.0034 87 79.3923 87 70.0034C87 60.6146 79.3888 53.0034 70 53.0034Z" fill="#1A1A1B"/>
<path d="M70 80.0034C75.5228 80.0034 80 75.5263 80 70.0034C80 64.4806 75.5228 60.0034 70 60.0034C64.4772 60.0034 60 64.4806 60 70.0034C60 75.5263 64.4772 80.0034 70 80.0034Z" fill="#1A1A1B"/>
</svg>

            </div>
            <h3 class="text-[24px] lg:text-4xl font-bold pb-[32px] lg:py-[64px]">Customizable solutions for your business</h3>
            <p class="text-[#7A7A7A] text-[16px] font-[400] lg:text-lg leading-relaxed">We structure every OTC trade with your unique profile in mind – a benefit you will not see on the exchanges.</p>
          </div>
          
          <div 
            class="bg-[#F7F7F7] p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="flex mb-6">
              <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.334 8.00342C14.5431 8.00342 16.334 9.7943 16.334 12.0034V56.0034C16.334 62.7162 16.3425 67.3482 16.8109 70.8322C17.2638 74.201 18.0797 75.8914 19.2629 77.0746C20.4461 78.2578 22.1363 79.0734 25.5052 79.5266C28.9891 79.995 33.6213 80.0034 40.334 80.0034H84.334C86.5432 80.0034 88.334 81.7942 88.334 84.0034C88.334 86.2126 86.5432 88.0034 84.334 88.0034H40.046C33.6913 88.0034 28.5186 88.0038 24.4392 87.455C20.1833 86.883 16.5234 85.6486 13.6061 82.7314C10.6887 79.8138 9.45443 76.1542 8.88223 71.8982C8.33375 67.8186 8.33387 62.6462 8.33399 56.2914V12.0034C8.33399 9.7943 10.1249 8.00342 12.334 8.00342Z" fill="#1A1A1B"/>
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M40.334 16.0034C42.5432 16.0034 44.334 17.7943 44.334 20.0034V24.0034H48.334C50.5432 24.0034 52.334 25.7943 52.334 28.0034C52.334 30.2126 50.5432 32.0034 48.334 32.0034H44.334V68.0034C44.334 70.2126 42.5432 72.0034 40.334 72.0034C38.1249 72.0034 36.334 70.2126 36.334 68.0034V64.0034H32.334C30.1249 64.0034 28.334 62.2126 28.334 60.0034C28.334 57.7942 30.1249 56.0034 32.334 56.0034H36.334V28.005V20.0034C36.334 17.7943 38.1249 16.0034 40.334 16.0034Z" fill="#1A1A1B"/>
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M72.334 16.0034C74.5432 16.0034 76.334 17.7943 76.334 20.0034V24.0034H80.334C82.5432 24.0034 84.334 25.7943 84.334 28.0034C84.334 30.2126 82.5432 32.0034 80.334 32.0034H76.334V68.0034C76.334 70.2126 74.5432 72.0034 72.334 72.0034C70.1248 72.0034 68.334 70.2126 68.334 68.0034V64.0034H64.334C62.1248 64.0034 60.334 62.2126 60.334 60.0034C60.334 57.7942 62.1248 56.0034 64.334 56.0034H68.334V28.005V20.0034C68.334 17.7943 70.1248 16.0034 72.334 16.0034Z" fill="#1A1A1B"/>
</svg>

            </div>
            <h3 class="text-[24px] lg:text-4xl font-bold pb-[32px] lg:py-[64px]">Negotiate Your Rate Directly with Our Experts</h3>
            <p class="text-[#7A7A7A] text-[16px] font-[400] lg:text-lg leading-relaxed">Tailor terms with our specialists—secure competitive rates and flexible settlements, backed by deep liquidity and support.</p>
          </div>
          
          <div 
            class="bg-[#F7F7F7] p-8 rounded-xl"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
          >
            <div class="flex mb-6">
              <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.666 20.0034C57.666 11.7191 64.3816 5.00342 72.666 5.00342C80.9504 5.00342 87.666 11.7191 87.666 20.0034C87.666 28.2877 80.9504 35.0034 72.666 35.0034C64.3816 35.0034 57.666 28.2877 57.666 20.0034Z" fill="#1A1A1B"/>
<path d="M9.66602 76.0034C9.66602 67.719 16.3817 61.0034 24.666 61.0034C32.9503 61.0034 39.666 67.719 39.666 76.0034C39.666 84.2878 32.9503 91.0034 24.666 91.0034C16.3817 91.0034 9.66602 84.2878 9.66602 76.0034Z" fill="#1A1A1B"/>
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M16.666 34.0034C16.666 24.0623 24.7249 16.0034 34.666 16.0034H48.666C50.8752 16.0034 52.666 17.7943 52.666 20.0034C52.666 22.2125 50.8752 24.0034 48.666 24.0034H34.666C29.1432 24.0034 24.666 28.4806 24.666 34.0034C24.666 39.5263 29.1432 44.0034 34.666 44.0034H62.666C72.6072 44.0034 80.666 52.0622 80.666 62.0034C80.666 71.9446 72.6072 80.0034 62.666 80.0034H48.666C46.4568 80.0034 44.666 78.2126 44.666 76.0034C44.666 73.7942 46.4568 72.0034 48.666 72.0034H62.666C68.1888 72.0034 72.666 67.5262 72.666 62.0034C72.666 56.4806 68.1888 52.0034 62.666 52.0034H34.666C24.7249 52.0034 16.666 43.9446 16.666 34.0034Z" fill="#1A1A1B"/>
</svg>

            </div>
            <h3 class="text-[24px] lg:text-4xl font-bold pb-[32px] lg:py-[64px]">Better liquidity than other exchanges</h3>
            <p class="text-[#7A7A7A] text-[16px] font-[400] lg:text-lg leading-relaxed">Deep liquidity lets you hold currency positions longer than typical exchange-traded timelines, offering FX flexibility.</p>
          </div>
        </div>
      </div>
    </section>


    <PaymentFooter 
    title="Start trading OTC with CAPERA" 
    description="If you're ready to unlock OTC trading with Capera, send us an email. A member of the Capera team will reach out to help you get set up."
:actions="[
    { text: 'Talk to us', onClick: () => console.log('Start clicked') }
  ]"
/>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <p class="text-center text-[16px] lg:text-[20px] font-medium text-[#1A1A1B] mb-2">GOT QUESTIONS ABOUT OTC?</p>
        <h2 
          class="text-5xl lg:text-8xl text-[#1A1A1B] md:text-8xl font-bold text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          FREQUENTLY ASKED<br>QUESTIONS
        </h2>
        
        <div class="max-w-3xl mx-auto">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="mb-4 bg-gray-50 rounded-xl overflow-hidden"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 100), duration: 500 } }"
          >
            <div 
              class="p-6 flex justify-between items-center cursor-pointer"
              @click="toggleFaq(index)"
            >
              <h3 class="text-[20px] text-[#1A1A1B] lg:text-4xl font-bold">{{ faq.question }}</h3>
              <div>
                <MinusIcon v-if="faq.open" class="h-6 w-6" />
                <PlusIcon v-else class="h-6 w-6" />
              </div>
            </div>
            <div 
              v-if="faq.open" 
              class="p-6 pt-0 text-[#454745]"
              v-motion
              :initial="{ opacity: 0, height: 0 }"
              :enter="{ opacity: 1, height: 'auto', transition: { duration: 300 } }"
            >
              <p style="font-weight: 400;" v-for="(paragraph, pIndex) in faq.answer" :key="pIndex" class="mb-4 text-lg font-[400] lg:text-3xl">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  MenuIcon, 
  XIcon, 
  MessageSquareIcon, 
  CheckIcon, 
  CreditCardIcon,
  ChevronRightIcon,
  TrendingUpIcon,
  KeyIcon,
  SettingsIcon,
  MessageCircleIcon,
  ShieldIcon,
  BarChartIcon,
  MinusIcon,
  PlusIcon
} from 'lucide-vue-next'

// Mobile menu state
const mobileMenuOpen = ref(false)

// FAQ state
const faqs = ref([
  {
    question: 'What are OTC markets?',
    answer: [
      'OTC markets are decentralized platforms where currencies are traded directly between parties without exchange intermediaries. They specialize in customized, complex, or less liquid currency transactions that public exchanges can\'t handle. For businesses managing FX risk—like importers/exporters, multinational corporations, or treasury teams—OTC trading helps hedge against currency volatility.',
      'Capera offers tailored solutions, from standard forwards and swaps to structured currency products, to meet your unique hedging needs.'
    ],
    open: true
  },
  {
    question: 'What OTC products does Capera offer?',
    answer: [
      'Capera offers a comprehensive suite of OTC products including spot transactions, forwards, swaps, and options. Our solutions are tailored to meet specific hedging and trading needs across various currency pairs.',
      'We specialize in both major and exotic currency pairs, providing competitive rates and flexible settlement options that traditional exchanges cannot match.'
    ],
    open: false
  },
  {
    question: 'How do I get started',
    answer: [
      'Getting started with Capera\'s OTC trading is simple. Click the "Talk to us" button on our website or send us an email with your requirements.',
      'A dedicated member of our team will reach out to discuss your needs, explain our services, and guide you through the onboarding process. We\'ll help you set up your account and provide all the necessary information to begin trading.'
    ],
    open: false
  }
])

// Toggle FAQ open/close
const toggleFaq = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open
}

// Animation on scroll with Intersection Observer
onMounted(() => {
  // Initialize any additional functionality here
})
</script>

<style>
/* Custom animations */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 3s ease-in-out infinite;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
}

.grid-background {
  background-color: #1C5210; /* Match the base color */
  background-image: url('/assets/icons/bg-mesh.svg'); /* Replace with the actual path */
  /* background-size: 100px 100px; */
  /* background-position: center center; */
  /* background-repeat: repeat; */
  z-index: 0;
}
</style>