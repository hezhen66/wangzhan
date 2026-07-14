<template>
  <div class="py-16 md:py-20 bg-gradient-to-b from-white to-brand-cream">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">联系我们</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 期待与您的合作 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <!-- 转化卡片 -->
      <div class="bg-gradient-to-br from-[#1a0a0a] via-[#2d1111] to-[#1a0a0a] rounded-3xl overflow-hidden shadow-2xl">
        <div class="grid md:grid-cols-2 gap-0">
          <!-- 左侧：电话 + 文案 -->
          <div class="p-8 md:p-12 flex flex-col justify-center">
            <p class="text-brand-gold text-xs tracking-widest mb-3">—— 招商加盟热线 ——</p>
            <a href="tel:18560026427"
               class="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wide mb-2 hover:text-brand-gold transition-colors duration-300">
              185 6002 6427
            </a>
            <p class="text-white/40 text-sm mb-1">胡先生</p>
            <a href="tel:0531-82052955"
               class="text-2xl md:text-3xl font-black text-white tracking-wide mb-1 hover:text-brand-gold transition-colors duration-300">
              0531-82052955
            </a>
            <p class="text-white/30 text-xs mb-6">加盟热线</p>

            <p class="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              如果您对我们的品牌与产品感兴趣，欢迎直接致电或添加微信咨询。我们将为您提供详细的加盟资料与专业解答。
            </p>

            <div class="flex flex-row gap-3">
              <a href="tel:18560026427"
                 class="inline-flex items-center justify-center gap-1.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-brand-red/40 hover:scale-105 text-sm tracking-wide whitespace-nowrap flex-shrink-0">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                立即致电咨询
              </a>
              <button @click="$emit('goMessage')"
                 class="inline-flex items-center justify-center gap-1.5 border-2 border-brand-gold/50 hover:border-brand-gold text-brand-gold font-bold py-3 px-5 rounded-full transition-all duration-300 hover:bg-brand-gold/10 text-sm tracking-wide whitespace-nowrap flex-shrink-0">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                在线留言
              </button>
            </div>
          </div>

          <!-- 右侧：二维码 -->
          <div class="bg-black/20 p-8 md:p-12 flex flex-col items-center justify-center border-l border-white/5">
            <div class="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-white shadow-2xl mb-4">
              <img src="@/assets/images/qr-code.png" alt="微信二维码" class="w-full h-full object-contain" />
            </div>
            <p class="text-white/70 text-sm font-medium mb-1">微信扫码咨询</p>
            <p class="text-white/30 text-xs">胡先生 · 185 6002 6427</p>
            <p class="text-brand-gold/60 text-xs mt-3 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              长按识别二维码添加微信
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['goMessage'])
</script>
