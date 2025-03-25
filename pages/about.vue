<template>
    <div>
      <NavbarSticky />
      <main>
        <AboutHeroSection />
        <AboutOurStorySection />
      <AboutCaperaDescription />
      <AboutFeatures />

    <PaymentFooter 
    title="Want to make an impact with CAPERA?" 
    description="Join our vibrant team of professionals across the globe or become our partner in your local market"
:actions="[
    { text: 'Explore careers', onClick: () => console.log('Start clicked') },
    { text: 'Partner with us', onClick: () => console.log('Docs clicked') }
  ]"
/>
      </main>
    </div>
  </template>
  