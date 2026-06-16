<template>
  <div class="relative">
    <NavBar :activeSection="activeSection" />

    <section id="hero">
      <HeroBanner />
    </section>

    <section id="brand">
      <BrandIntro />
    </section>

    <section id="advantages">
      <FranchiseAdvantages />
    </section>

    <section id="truck">
      <MobileTruck />
    </section>

    <section id="products">
      <ProductShowcase />
    </section>

    <section id="nutrition">
      <NutritionValue />
    </section>

    <section id="process">
      <FranchiseProcess />
    </section>

    <section id="contact">
      <ContactUs />
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import BrandIntro from './components/BrandIntro.vue'
import FranchiseAdvantages from './components/FranchiseAdvantages.vue'
import MobileTruck from './components/MobileTruck.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import NutritionValue from './components/NutritionValue.vue'
import FranchiseProcess from './components/FranchiseProcess.vue'
import ContactUs from './components/ContactUs.vue'
import Footer from './components/Footer.vue'

const activeSection = ref('hero')
const sections = ['hero', 'brand', 'advantages', 'truck', 'products', 'nutrition', 'process', 'contact']

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        activeSection.value = visible[0].target.id
      }
    },
    { threshold: [0.25, 0.5], rootMargin: '-80px 0px 0px 0px' }
  )

  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
