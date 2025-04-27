<template>
    <section class="py-16 md:py-24 mt-10">
      <div class="container mx-auto px-4 md:px-8 max-w-6xl">
        <p class="text-center text-[16px] font-[500] lg:text-[20px] text-[#1A1A1B] mb-4">GOT QUESTIONS?</p>
        
        <h2 class="text-5xl lg:text-8xl md:text-8xl text-[#1A1A1B]  font-bold text-center mb-12 md:mb-16">
          FREQUENTLY ASKED<br />QUESTIONS
        </h2>
        
        <div class="max-w-7xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
            <div 
              class="bg-[#F7F7F7] rounded-xl p-6 py-10 cursor-pointer"
              @click="toggleFaq(index)"
            >
              <div class="flex justify-between items-center">
                <h3 class="text-[20px] lg:text-xl text-[#1A1A1B] md:text-4xl font-bold">{{ faq.question }}</h3>
                <button class="text-2xl font-bold">
                    <img class="h-6 w-6" v-if="!faq.isOpen" src="@/assets/icons/plus.svg" />
                    <img class="h-6 w-6" v-else src="@/assets/icons/minus.svg" />
                  <!-- {{ faq.isOpen ? '−' : '+' }} -->
                </button>
              </div>
              
              <div v-if="faq.isOpen" class="mt-4 text-[#454745] leading-relaxed space-y-4">
                <p class="text-lg lg:text-3xl font-[400]" v-for="(paragraph, pIndex) in faq.answer" :key="pIndex">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface Faq {
    question: string;
    answer: string[];
    isOpen: boolean;
  }
  
  const faqs = ref<Faq[]>([
    {
      question: 'What is Capera',
      answer: [
        'Capera is a next-generation international money transfer operator (IMTO) with a vision to redefine global cross-border financial transactions securely and efficiently.',
        'We leverage cutting-edge technology, deep technical expertise and global partnerships to efficiently deliver our services.'
      ],
      isOpen: true
    },
    {
      question: 'What do I need to apply for an account?',
      answer: [
        'To apply for an account, you will need to provide identification documents, proof of address, and complete our verification process. The specific requirements may vary depending on your country of residence and the type of account you are applying for.'
      ],
      isOpen: false
    },
    {
      question: 'What currencies does Capera support?',
      answer: [
        'Capera supports a wide range of currencies for international transfers. Our platform currently handles major currencies including USD, EUR, GBP, CNY, CAD, NGN, and many others. We are continuously expanding our currency support to serve more markets globally.'
      ],
      isOpen: false
    }
  ]);
  
  const toggleFaq = (index: number) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen;
  };
  </script>
