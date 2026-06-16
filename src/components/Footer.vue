<template>
  <footer class="bg-[#1a0a0a] text-white/60 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-display font-bold text-white mb-4 tracking-wide">云声健</h3>
          <p class="text-sm leading-relaxed text-white/40">祖传秘方，纯真酱牛肉的坚守者。<br/>云声健五香牛肉坊全国招商加盟火热进行中。</p>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">快速导航</h4>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <template v-for="link in quickLinks" :key="link.label">
              <a v-if="!link.isBtn" :href="link.href"
                 class="text-white/40 hover:text-brand-gold transition-colors duration-300">{{ link.label }}</a>
              <button v-else @click="emit('goMessage')"
                 class="text-brand-gold hover:text-white transition-colors duration-300 text-left">{{ link.label }}</button>
            </template>
          </div>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">联系方式</h4>
          <div class="space-y-2 text-sm text-white/40">
            <p>加盟热线：18560026427</p>
            <p>电子邮箱：2640015837@qq.com</p>
          </div>
        </div>
      </div>
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/30">Copyright © 2026 云声健五香牛肉坊 All Rights Reserved.</p>
        <a href="#hero" class="text-xs text-white/30 hover:text-brand-gold transition-colors duration-300 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          回到顶部
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const emit = defineEmits(['goMessage'])

const quickLinks = [
  { label: '产品展示', href: '#products' },
  { label: '流动车经营', href: '#truck' },
  { label: '加盟优势', href: '#advantages' },
  { label: '加盟流程', href: '#process' },
  { label: '联系我们', href: '#contact' },
  { label: '在线留言', id: 'message', isBtn: true },
]
</script>
