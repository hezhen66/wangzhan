<template>
  <nav class="z-50 transition-all duration-300" :class="isScrolled ? 'fixed top-0 inset-x-0 bg-white/95 backdrop-blur-md shadow-sm' : 'absolute top-0 inset-x-0'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14 md:h-16">
        <!-- Logo — 点击回首页 -->
        <a v-if="!onMessagePage" href="#hero" class="flex items-center space-x-2 flex-shrink-0">
          <span class="text-lg md:text-xl font-display font-bold tracking-wide" :class="isScrolled ? 'text-brand-red' : 'text-white'">云声健</span>
        </a>
        <button v-else @click="$emit('goMain', 'hero')" class="flex items-center space-x-2 flex-shrink-0">
          <span class="text-lg md:text-xl font-display font-bold tracking-wide" :class="isScrolled ? 'text-brand-red' : 'text-white'">云声健</span>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-0.5">
          <template v-for="item in menuItems" :key="item.id">
            <a v-if="!onMessagePage" :href="item.href"
               class="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300"
               :class="activeSection === item.id ? 'text-brand-red bg-brand-red/10' : (isScrolled ? 'text-brand-gray hover:text-brand-red hover:bg-brand-red/5' : 'text-white/80 hover:text-white hover:bg-white/10')">
              {{ item.label }}
            </a>
            <button v-else @click="$emit('goMain', item.id)"
               class="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 text-brand-gray hover:text-brand-red hover:bg-brand-red/5">
              {{ item.label }}
            </button>
          </template>

          <!-- 在线留言 — 两种模式都显示，留言页高亮 -->
          <button v-if="!onMessagePage" @click="$emit('goMessage')"
                  class="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300"
                  :class="activeSection === 'message' ? 'text-brand-red bg-brand-red/10' : (isScrolled ? 'text-brand-gray hover:text-brand-red hover:bg-brand-red/5' : 'text-white/80 hover:text-white hover:bg-white/10')">
            在线留言
          </button>
          <span v-else
                  class="px-3 py-1.5 text-sm font-medium rounded-lg"
                  :class="activeSection === 'message' ? 'text-brand-red bg-brand-red/10' : (isScrolled ? 'text-brand-gray hover:text-brand-red hover:bg-brand-red/5' : 'text-white/80 hover:text-white hover:bg-white/10')">
            在线留言
          </span>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileOpen = !mobileOpen"
                class="lg:hidden p-2 rounded-lg transition-colors"
                :class="isScrolled ? 'text-brand-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="lg:hidden bg-white shadow-xl border-t">
        <div class="px-4 py-2 space-y-0.5">
          <template v-for="item in menuItems" :key="item.id">
            <a v-if="!onMessagePage" :href="item.href" @click="mobileOpen = false"
               class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
               :class="activeSection === item.id ? 'text-brand-red bg-brand-red/10' : 'text-brand-dark hover:text-brand-red hover:bg-brand-red/5'">
              {{ item.label }}
            </a>
            <button v-else @click="goMainFromMobile(item.id)"
               class="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors text-brand-dark hover:text-brand-red hover:bg-brand-red/5">
              {{ item.label }}
            </button>
          </template>

          <button v-if="!onMessagePage" @click="goMessageFromMobile"
                  class="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors text-brand-dark hover:text-brand-red hover:bg-brand-red/5 mt-1">
            在线留言
          </button>
          <span v-else
                  class="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-brand-red bg-brand-red/10 mt-1">
            在线留言
          </span>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  activeSection: { type: String, default: 'hero' },
  onMessagePage: { type: Boolean, default: false },
})

const emit = defineEmits(['goMessage', 'goMain'])

const mobileOpen = ref(false)
const isScrolled = ref(false)

function onScroll() { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const menuItems = [
  { id: 'hero', label: '首页', href: '#hero' },
  { id: 'products', label: '产品展示', href: '#products' },
  { id: 'truck', label: '流动车', href: '#truck' },
  { id: 'advantages', label: '加盟优势', href: '#advantages' },
  { id: 'process', label: '加盟流程', href: '#process' },
  { id: 'contact', label: '联系我们', href: '#contact' },
]

function goMessageFromMobile() {
  mobileOpen.value = false
  emit('goMessage')
}

function goMainFromMobile(id) {
  mobileOpen.value = false
  emit('goMain', id)
}
</script>

<style scoped>
.slide-enter-active { transition: all 0.2s ease-out; }
.slide-leave-active { transition: all 0.15s ease-in; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
