<template>
  <div class="py-4 md:py-8 bg-brand-wine relative overflow-hidden">
    <!-- 背景微纹理 -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]"
         style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E&quot;);"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <!-- 主标题 + 两侧细线 -->
      <div class="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
        <span class="w-10 md:w-16 h-px bg-brand-gold/30"></span>
        <h2 class="font-display font-black text-xl md:text-4xl text-brand-gold tracking-[0.15em] whitespace-nowrap"
            style="text-shadow: 0 1px 20px rgba(196,162,101,0.25);">
          云声健五香牛肉坊
        </h2>
        <span class="w-10 md:w-16 h-px bg-brand-gold/30"></span>
      </div>

      <!-- 细分割线 + 菱形 -->
      <div class="flex items-center justify-center gap-2.5 mb-2 md:mb-3">
        <span class="w-4 h-px bg-brand-gold/50"></span>
        <span class="w-1 h-1 rotate-45 bg-brand-gold/40"></span>
        <span class="w-4 h-px bg-brand-gold/50"></span>
      </div>

      <!-- 品牌口号 -->
      <p class="font-display font-bold text-base md:text-2xl text-white/85 tracking-[0.2em]"
         style="text-shadow: 0 1px 12px rgba(0,0,0,0.3);">
        只做真牛肉
      </p>
    </div>
  </div>
</template>
