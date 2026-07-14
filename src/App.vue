<template>
  <div class="relative">
    <!-- 始终使用同一个 NavBar -->
    <NavBar
      :activeSection="activeSection"
      :onMessagePage="showMessage"
      @goMain="closeMessage"
      @goMessage="openMessage"
    />

    <!-- 单页滚动 — v-show 保活，不销毁 DOM -->
    <div v-show="!showMessage">
      <section id="hero">
        <HeroBanner />
      </section>

      <section id="products">
        <ProductShowcase />
      </section>

      <section id="slogan">
        <BrandSlogan />
      </section>

      <section id="truck">
        <MobileTruck />
      </section>

      <section id="scene">
        <SceneProof />
      </section>

      <section id="advantages">
        <FranchiseAdvantages />
      </section>

      <section id="process">
        <FranchiseProcess />
      </section>

      <section id="contact">
        <ContactUs @goMessage="openMessage" />
      </section>

      <Footer @goMessage="openMessage" />
    </div>

    <!-- 留言页 — v-show 保活 -->
    <div v-show="showMessage">
      <MessagePage />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import SceneProof from './components/SceneProof.vue'
import BrandSlogan from './components/BrandSlogan.vue'
import MobileTruck from './components/MobileTruck.vue'
import FranchiseAdvantages from './components/FranchiseAdvantages.vue'
import FranchiseProcess from './components/FranchiseProcess.vue'
import ContactUs from './components/ContactUs.vue'
import MessagePage from './components/MessagePage.vue'
import Footer from './components/Footer.vue'

const showMessage = ref(false)
const activeSection = ref('hero')
const sections = ['hero', 'products', 'truck', 'scene', 'advantages', 'process', 'contact']

let observer = null

onMounted(() => {
  history.scrollRestoration = 'manual'
  setTimeout(() => window.scrollTo(0, 0), 0)
  setTimeout(() => window.scrollTo(0, 0), 100)

  // 浏览器返回按钮：关闭留言页
  window.addEventListener('popstate', () => {
    if (showMessage.value) {
      showMessage.value = false
    }
  })

  const navH = 64
  observer = new IntersectionObserver(
    () => {
      let current = 'hero'
      let best = Infinity
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top
        if (top < navH + 100 && navH - top < best) {
          best = navH - top
          current = id
        }
      })
      activeSection.value = current
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] }
  )
  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

function openMessage() {
  showMessage.value = true
  history.pushState({ page: 'message' }, '', '#message')
  window.scrollTo({ top: 0, behavior: 'instant' })
}

function closeMessage(section) {
  showMessage.value = false
  if (history.state?.page === 'message') history.back()
  nextTick(() => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'instant' })
      activeSection.value = section
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  })
}
</script>
