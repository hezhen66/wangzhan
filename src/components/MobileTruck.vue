<template>
  <div class="py-12 md:py-16 bg-brand-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">成熟流动车经营模式</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 品牌统一形象，灵活经营全覆盖 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <!-- 左图右文 -->
      <div class="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-8">
        <!-- 图片侧 -->
        <div class="rounded-2xl overflow-hidden shadow-xl border-4 border-white/80 bg-[#f5ede0] max-w-sm mx-auto md:mx-0">
          <img src="@/assets/images/truck-front.png" alt="流动车" loading="lazy" decoding="async" class="w-full h-auto" @error="onImgError" />
        </div>
        <!-- 文字侧 -->
        <div class="space-y-2.5">
          <div v-for="item in features" :key="item"
               class="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
              <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-base font-bold text-brand-dark">{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- 为什么选择流动车 -->
      <div class="max-w-3xl mx-auto">
        <p class="text-center text-sm text-brand-gray mb-4">—— 为什么选择流动车？ ——</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 border border-brand-gold/10">
            <svg class="w-8 h-8 mx-auto mb-2 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <h4 class="font-bold text-brand-dark text-sm mb-1.5">统一形象</h4>
            <p class="text-xs text-brand-gray leading-relaxed">标准餐车，移动吸睛，自带街头流量，品牌辨识度极高</p>
          </div>
          <div class="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 border border-brand-gold/10">
            <svg class="w-8 h-8 mx-auto mb-2 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            <h4 class="font-bold text-brand-dark text-sm mb-1.5">投资极低</h4>
            <p class="text-xs text-brand-gray leading-relaxed">无需高额房租与高档装修，1部餐车就是1家店</p>
          </div>
          <div class="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 border border-brand-gold/10">
            <svg class="w-8 h-8 mx-auto mb-2 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z"/></svg>
            <h4 class="font-bold text-brand-dark text-sm mb-1.5">灵活经营</h4>
            <p class="text-xs text-brand-gray leading-relaxed">夜市、社区、菜场，哪里人多去哪里，即停即营业</p>
          </div>
        </div>
        <!-- 第四张技术扶持卡片 — 单列居中 -->
        <div class="max-w-xs mx-auto mt-4">
          <div class="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 border border-brand-gold/10">
            <svg class="w-8 h-8 mx-auto mb-2 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>
            <h4 class="font-bold text-brand-dark text-sm mb-1.5">技术扶持</h4>
            <p class="text-xs text-brand-gray leading-relaxed">手把手教核心技术，标准化流程，无经验也能快速上手</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const features = [
  '灵活经营，不限场地',
  '投资成本低，万元起步',
  '总部全程技术支持',
  '统一品牌形象',
  '全国招商加盟',
  '小本创业首选',
]

function onImgError(e) {
  e.target.style.display = 'none'
  const el = e.target.parentElement
  el.classList.add('bg-gradient-to-br', 'from-brand-cream-dark', 'to-brand-cream', 'flex', 'items-center', 'justify-center', 'min-h-[200px]')
  el.innerHTML = '<span class="text-brand-gray text-sm">图片加载中...</span>'
}
</script>
