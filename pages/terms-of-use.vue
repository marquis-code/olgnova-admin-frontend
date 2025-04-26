<template>
    <div class="relative min-h-screen overflow-hidden bg-gray-50">
      <!-- Animated Background -->
      <div class="animated-background absolute inset-0 overflow-hidden opacity-[0.03] select-none" ref="backgroundRef">
        <div v-for="i in 100" :key="i" class="absolute text-5xl md:text-7xl font-bold text-[#1A1A1B]"
          :style="`top: ${Math.random() * 200}%; left: ${Math.random() * 200}%; transform: rotate(${Math.random() * 360}deg); animation-delay: ${Math.random() * 20}s;`">
          <img src="@/assets/icons/logo.svg" />
        </div>
      </div>
  
      <!-- Content -->
      <div class="relative z-10">
        <DarkStickyNavBar />
        <!-- <header class="bg-white shadow-md">
          <div class="container mx-auto px-4 py-6 flex justify-between items-center">
            <div class="flex items-center">
                <img src="@/assets/icons/logo-black.svg" />
            </div>
            <nav>
              <ul class="flex space-x-6">
                <li><NuxtLink to="/" class="text-gray-600 hover:text-[#1A1A1B] transition-colors">Home</NuxtLink></li>
                <li><NuxtLink to="/terms-of-use" class="text-[#1A1A1B] font-medium">Terms</NuxtLink></li>
                <li><NuxtLink to="/privacy-policy" class="text-gray-600 hover:text-[#1A1A1B] transition-colors">Privacy</NuxtLink></li>
              </ul>
            </nav>
          </div>
        </header> -->
  
        <main class="container mx-auto px-4 py-12 max-w-4xl mt-20">
          <div class="bg-white rounded-xl p-8 md:p-12 animate-fade-in">
            <h1 class="text-3xl font-bold text-[#1A1A1B] mb-8 animate-slide-up">
              Capera Limited - Terms and Conditions
            </h1>
            
            <div class="text-[#1A1A1B] space-y-6 terms-content">
              <p class="text-[#1A1A1B] mb-8">Effective Date: 25th April 2025.</p>
              
              <p>These Terms and Conditions ("Terms") govern your access to and use of Capera Limited's mobile application and services platform. By using our App, you agree to these Terms.</p>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">1. Eligibility</h2>
                <p>To use Capera, you must be at least 18 years old and legally capable of entering a binding agreement.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">2. Account Registration</h2>
                <p>You must create an account and provide accurate information. You are responsible for maintaining the confidentiality of your credentials. Capera shall not be responsible for any transaction on your account with us arising from the compromise or breach of your account credentials.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">3. Services Offered</h2>
                <p>Capera facilitates cross-border and local remittance services. Transactions are subject to applicable limits, fees, and regulatory approvals as required by the Central Bank of Nigeria (CBN).</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">4. User Obligations</h2>
                <p>You agree to:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Use the App in accordance with applicable laws and regulations.</li>
                  <li>Not engage in fraudulent or illegal activity.</li>
                  <li>Provide accurate KYC documents when required.</li>
                </ul>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">5. Fees and Charges</h2>
                <p>Transaction fees and exchange rates apply and are disclosed before you complete a transaction. You consent to these charges by proceeding with the transaction.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">6. Transaction Limits</h2>
                <p>We may set limits on the amount you can send or receive, subject to regulatory requirements by the CBN or any regulator of financial activities in the jurisdictions we operate.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">7. Suspension and Termination</h2>
                <p>We may suspend or terminate your account if we detect suspicious activity or if you breach these Terms.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">8. Limitation of Liability</h2>
                <p>Capera shall not be liable for indirect or consequential damages, delays, or losses caused by third parties or force majeure events.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">9. Dispute Resolution</h2>
                <p>Disputes shall be resolved amicably. If unresolved, disputes may be submitted to arbitration in Lagos under the Arbitration and Conciliation Act or referred to appropriate regulatory bodies.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">10. Governing Law</h2>
                <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">11. Changes to Terms</h2>
                <p>We may amend these Terms. Updates will be communicated via the App or email.</p>
              </section>
              
              <section class="terms-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">12. Contact Us</h2>
                <p>
                  Capera Limited<br>
                  42, Local Airport Road, Ikeja, Lagos – Nigeria<br>
                  Email: <a href="mailto:hello@withcapera.com" class="text-primary-600 hover:underline">hello@withcapera.com</a><br>
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const backgroundRef = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    // Animate background elements
    const animateBackground = () => {
      if (!backgroundRef.value) return;
      
      const elements = backgroundRef.value.children;
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement;
        el.style.transform = `rotate(${Math.random() * 360}deg)`;
        el.style.top = `${Math.random() * 200}%`;
        el.style.left = `${Math.random() * 200}%`;
      }
    };
  
    // Initial animation
    animateBackground();
    
    // Continue animation at intervals
    setInterval(animateBackground, 20000);
  
    // Animate terms sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.terms-section').forEach(section => {
      observer.observe(section);
    });
  });
  </script>
  
  <style scoped>
  .logo-animation {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    font-weight: bold;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  .logo-animation-white {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: white;
    color: #3b82f6;
    font-weight: bold;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
  }
  
  .animated-background div {
    animation: float 20s infinite linear;
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(30px, 20px) rotate(180deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .terms-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .terms-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
