<template>
    <div class="relative min-h-screen overflow-hidden bg-gray-50">
      <!-- Animated Background -->
      <div class="animated-background absolute inset-0 overflow-hidden opacity-[0.03] select-none" ref="backgroundRef">
        <div v-for="i in 100" :key="i" class="absolute text-5xl md:text-7xl font-bold text-[#1A1A1B]"
          :style="`top: ${Math.random() * 200}%; left: ${Math.random() * 200}%; transform: rotate(${Math.random() * 360}deg); animation-delay: ${Math.random() * 20}s;`">
          CAPERA
        </div>
      </div>
  
      <!-- Content -->
      <div class="relative z-10">
        <DarkStickyNavBar />
  
        <main class="container mx-auto px-4 py-12 max-w-4xl mt-20">
          <div class="bg-white rounded-xl p-8 md:p-12 animate-fade-in">
            <h1 class="text-3xl font-bold text-[#1A1A1B] mb-8 animate-slide-up">
              Capera Limited - Privacy Policy
            </h1>
            
            <div class="text-[#1A1A1B] space-y-6 policy-content">
              <p class="text-[#1A1A1B] mb-8">Effective Date: 25th April 2025.</p>
              
              <p>Capera Limited ("Capera", "we", "our", or "us") is committed to protecting the privacy of individuals who use our mobile application and related services (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.</p>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">1. Information We Collect</h2>
                <p>We may collect the following types of personal data:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Identity data: full name, date of birth, picture photograph, BVN, NIN, government-issued ID.</li>
                  <li>Contact data: email address, phone number, home address.</li>
                  <li>Financial data: bank account details, transaction history.</li>
                  <li>Technical data: IP address, device identifiers, mobile device information, app usage logs.</li>
                  <li>Geolocation data where applicable.</li>
                </ul>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Facilitate domestic and international money transfers.</li>
                  <li>Verify your identity and comply with KYC/AML obligations.</li>
                  <li>Detect and prevent fraud.</li>
                  <li>Communicate with you regarding transactions or updates.</li>
                  <li>Improve our services and user experience.</li>
                  <li>Fulfill legal and regulatory obligations.</li>
                </ul>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">3. Legal Basis for Processing</h2>
                <p>We process your data on the basis of:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Consent;</li>
                  <li>Performance of a contract;</li>
                  <li>Legal obligation;</li>
                  <li>Legitimate interest (e.g., fraud prevention).</li>
                </ul>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">4. Data Sharing</h2>
                <p>We may share your data with:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Regulatory authorities (e.g., CBN, NFIU, EFCC);</li>
                  <li>Partner financial institutions and payment service providers;</li>
                  <li>Fraud prevention and identity verification partners;</li>
                  <li>IT and cloud service providers under confidentiality agreements.</li>
                </ul>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">5. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to safeguard your data, including encryption and secure storage.</p>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">6. Data Retention</h2>
                <p>Your personal data will be retained for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Access and correct your data;</li>
                  <li>Withdraw consent;</li>
                  <li>Object to processing;</li>
                  <li>Lodge a complaint with the NDPC or any relevant authority.</li>
                </ul>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">8. Children's Privacy</h2>
                <p>Our services are not intended for persons under 18. We do not knowingly collect data from children.</p>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">9. Changes to This Policy</h2>
                <p>We may update this policy from time to time. You will be notified of material changes via the App or email.</p>
              </section>
              
              <section class="policy-section">
                <h2 class="text-lg font-bold text-[#1A1A1B] mb-4">10. Contact Us</h2>
                <p>
                  Capera Limited<br>
                  42, Local airport Road, Ikeja, Lagos<br>
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
import DarkStickyNavBar from '../components/DarkStickyNavBar.vue';
  
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
  
    // Animate policy sections on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.policy-section').forEach(section => {
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
  
  .policy-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .policy-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
