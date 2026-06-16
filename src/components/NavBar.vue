<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="#hero" class="flex items-center space-x-2 flex-shrink-0">
          <span
            class="text-xl md:text-2xl font-display font-bold tracking-wide transition-colors duration-300"
            :class="isScrolled ? 'text-brand-red' : 'text-white'"
          >
            云声健
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            class="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300"
            :class="activeSection === item.id
              ? (isScrolled ? 'text-brand-red bg-brand-red/10' : 'text-white bg-white/20')
              : (isScrolled ? 'text-brand-gray hover:text-brand-red hover:bg-brand-red/5' : 'text-white/80 hover:text-white hover:bg-white/10')"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="lg:hidden p-2 rounded-lg transition-colors"
          :class="isScrolled ? 'text-brand-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="lg:hidden bg-white shadow-xl border-t">
        <div class="px-4 py-3 space-y-1">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            @click="mobileOpen = false"
            class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
            :class="activeSection === item.id
              ? 'text-brand-red bg-brand-red/10'
              : 'text-brand-dark hover:text-brand-red hover:bg-brand-red/5'"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  activeSection: { type: String, default: 'hero' }
})

const isScrolled = ref(false)
const mobileOpen = ref(false)

const menuItems = [
  { id: 'hero', label: '首页', href: '#hero' },
  { id: 'brand', label: '品牌介绍', href: '#brand' },
  { id: 'advantages', label: '加盟优势', href: '#advantages' },
  { id: 'truck', label: '流动车', href: '#truck' },
  { id: 'products', label: '产品展示', href: '#products' },
  { id: 'nutrition', label: '营养价值', href: '#nutrition' },
  { id: 'process', label: '加盟流程', href: '#process' },
  { id: 'contact', label: '联系我们', href: '#contact' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.slide-enter-active { transition: all 0.3s ease-out; }
.slide-leave-active { transition: all 0.25s ease-in; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
