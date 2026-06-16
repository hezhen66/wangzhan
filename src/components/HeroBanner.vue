<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- 背景：深色渐变模拟牛肉质感 -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#2d1111] to-[#1a0a0a]">
      <div class="absolute inset-0 opacity-20"
           style="background-image: radial-gradient(circle at 30% 50%, #c41e3a33 0%, transparent 60%),
                            radial-gradient(circle at 70% 30%, #c9a96e33 0%, transparent 50%);">
      </div>
      <!-- 纹理叠加 -->
      <div class="absolute inset-0 opacity-5"
           style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px);">
      </div>
    </div>

    <!-- 装饰元素 -->
    <div class="absolute top-20 left-10 w-32 h-32 border border-brand-gold/20 rounded-full hidden lg:block"></div>
    <div class="absolute bottom-20 right-10 w-48 h-48 border border-brand-red/10 rounded-full hidden lg:block"></div>
    <div class="absolute top-1/3 right-1/4 w-20 h-20 border border-brand-gold/10 rounded-full hidden lg:block"></div>

    <!-- 内容 -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
      <!-- 品牌标签 -->
      <div class="inline-block mb-6 animate-fade-in">
        <span class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-gold/50 text-brand-gold text-sm md:text-base font-medium">
          <span class="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
          百年秘方 · 古法工艺
        </span>
      </div>

      <!-- 品牌名 -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-4 tracking-widest animate-fade-in"
          style="animation-delay: 0.2s; text-shadow: 0 2px 20px rgba(196, 30, 58, 0.5);">
        云声健
      </h1>
      <h2 class="text-2xl md:text-4xl font-display font-bold text-brand-gold mb-3 tracking-wide animate-fade-in"
          style="animation-delay: 0.4s;">
        五香牛肉坊
      </h2>

      <!-- 特色标语 -->
      <p class="text-lg md:text-xl text-white/70 mb-3 animate-fade-in tracking-widest"
         style="animation-delay: 0.5s;">
        纯真酱牛肉
      </p>

      <!-- 招商标语 -->
      <div class="mb-10 animate-fade-in" style="animation-delay: 0.6s;">
        <div class="inline-block bg-brand-red/80 backdrop-blur-sm px-8 py-3 rounded-full">
          <p class="text-white text-base md:text-lg font-bold tracking-widest">
            🔥 全国招商加盟火热进行中
          </p>
        </div>
      </div>

      <!-- CTA 按钮 -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
           style="animation-delay: 0.8s;">
        <a href="#contact"
           class="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-10 rounded-full
                  transition-all duration-300 shadow-2xl hover:shadow-brand-red/40 hover:scale-105
                  text-lg tracking-wide">
          立即咨询
        </a>
        <a href="#contact"
           class="border-2 border-white/60 hover:border-white text-white font-bold py-4 px-10 rounded-full
                  transition-all duration-300 hover:bg-white/10 hover:scale-105
                  text-lg tracking-wide">
          联系我们
        </a>
      </div>

      <!-- 滚动指示 -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
