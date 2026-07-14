<template>
  <div class="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
    <!-- 背景图 + 深色多层蒙版 -->
    <div class="absolute inset-0">
      <img src="@/assets/images/hero-bg.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-brand-wine/40 to-brand-bark/80"></div>
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 40%, rgba(60,31,16,0.5) 100%);"></div>
    </div>

    <!-- 蒸汽热气层 -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute bottom-0 left-1/4 w-64 h-48 bg-white/5 rounded-full blur-3xl animate-steam-1"></div>
      <div class="absolute bottom-0 left-1/2 w-80 h-56 bg-white/4 rounded-full blur-3xl animate-steam-2"></div>
      <div class="absolute bottom-0 right-1/4 w-56 h-40 bg-white/5 rounded-full blur-3xl animate-steam-3"></div>
    </div>

    <!-- 内容 -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p class="font-display font-bold text-lg md:text-2xl text-white tracking-[0.2em] mb-3"
         style="text-shadow: 0 1px 12px rgba(0,0,0,0.3);">「只做真牛肉」</p>

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-2 tracking-widest"
          style="text-shadow: 0 2px 30px rgba(196, 30, 58, 0.6), 0 4px 8px rgba(0,0,0,0.4);">云声健五香牛肉坊</h1>
      <h2 class="text-lg md:text-2xl font-display font-bold text-brand-gold-light mb-2 tracking-wide">小本创业 · 流动牛肉坊 · 加盟合作</h2>
      <div class="mb-6">
        <div class="grid grid-cols-2 gap-x-4 gap-y-2.5 text-white/95 text-sm md:text-base font-bold max-w-sm mx-auto">
          <span class="inline-flex items-center justify-center gap-2"><span class="text-brand-gold text-lg leading-none shrink-0">✓</span> 免费赠送整体经营车辆</span>
          <span class="inline-flex items-center justify-center gap-2"><span class="text-brand-gold text-lg leading-none shrink-0">✓</span> 免费赠送移动冷藏柜</span>
          <span class="inline-flex items-center justify-center gap-2"><span class="text-brand-gold text-lg leading-none shrink-0">✓</span> 总部技术培训支持</span>
          <span class="inline-flex items-center justify-center gap-2"><span class="text-brand-gold text-lg leading-none shrink-0">✓</span> 全国招商加盟中</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="#contact" class="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-brand-red/50 hover:scale-105 text-sm md:text-base tracking-wide">
          立即咨询
        </a>
        <a href="#contact" class="border-2 border-white/70 hover:border-white text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 text-sm md:text-base tracking-wide">
          联系我们
        </a>
      </div>
    </div>

    <!-- 滚动指示 -->
    <div class="absolute bottom-4 left-1/2 z-10" style="margin-left:-10px">
      <div class="animate-bounce">
        <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  <!-- 信任衔接条 -->
  <div class="bg-brand-wine text-white/90">
    <div class="max-w-4xl mx-auto px-1 py-0.5 sm:py-3 flex flex-row items-center justify-center gap-1 sm:gap-8 text-[10px] sm:text-sm font-medium">
      <span class="whitespace-nowrap">古法秘方 · 纯真牛肉</span>
      <span class="text-white/15 text-[9px]">|</span>
      <span class="whitespace-nowrap">匠心工艺 · 品质保障</span>
      <span class="text-white/15 text-[9px]">|</span>
      <span class="whitespace-nowrap">总部技术支持</span>
      <span class="text-white/15 text-[9px]">|</span>
      <span class="whitespace-nowrap">全国招商加盟</span>
    </div>
  </div>
</template>
