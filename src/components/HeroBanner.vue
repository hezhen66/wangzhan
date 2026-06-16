<template>
  <div class="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
    <!-- 背景图 + 深色多层蒙版 -->
    <div class="absolute inset-0">
      <img src="@/assets/images/hero-bg.png" alt="" class="w-full h-full object-cover" />
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
      <div class="inline-block mb-4">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/50 text-brand-gold text-xs md:text-sm font-medium">
          <span class="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
          独家秘方 · 匠心工艺
        </span>
      </div>

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-2 tracking-widest"
          style="text-shadow: 0 2px 30px rgba(196, 30, 58, 0.6), 0 4px 8px rgba(0,0,0,0.4);">云声健</h1>
      <h2 class="text-lg md:text-2xl font-display font-bold text-brand-gold-light mb-2 tracking-wide">五香牛肉坊</h2>
      <p class="text-sm md:text-base text-white/70 mb-2 tracking-widest">纯真酱牛肉</p>
      <p class="text-xs text-white/40 mb-4 max-w-lg mx-auto leading-relaxed">
        祖传秘方，精选优质黄牛肉，二十余种天然香辛料，72小时精心腌制，古法慢火卤煮，还原最纯正的酱牛肉风味。
      </p>

      <div class="mb-6">
        <span class="inline-block bg-black/25 backdrop-blur-sm border border-white/20 px-5 py-1.5 rounded-full text-white/90 text-xs md:text-sm font-medium tracking-wide">
          🔥 全国招商加盟火热进行中
        </span>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#contact" class="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-brand-red/50 hover:scale-105 text-sm tracking-wide">
          立即咨询
        </a>
        <a href="#contact" class="border-2 border-white/70 hover:border-white text-white font-bold py-3 px-10 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 text-sm tracking-wide">
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
    <div class="max-w-4xl mx-auto px-1 py-0.5 sm:py-3 flex flex-row items-center justify-center gap-1 sm:gap-10 text-[10px] sm:text-sm font-medium">
      <span class="flex items-center gap-0.5 whitespace-nowrap"><span class="text-xs">⏱️</span> 1-2人操盘</span>
      <span class="text-white/15 text-[9px]">|</span>
      <span class="flex items-center gap-0.5 whitespace-nowrap"><span class="text-xs">💰</span> 轻资产启动</span>
      <span class="text-white/15 text-[9px]">|</span>
      <span class="flex items-center gap-0.5 whitespace-nowrap"><span class="text-xs">🎓</span> 核心技术传授</span>
    </div>
  </div>
</template>
