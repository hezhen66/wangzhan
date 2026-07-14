<template>
  <div class="py-12 md:py-16 bg-brand-silk">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">云声健五香牛肉坊加盟优势</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 轻创业 · 低投入 · 全程扶持 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <!-- 核心宣传语横幅 -->
      <div class="max-w-4xl mx-auto mb-5">
        <div class="bg-gradient-to-r from-brand-wine via-[#8b1a2b] to-brand-wine rounded-2xl px-4 py-3 sm:py-4 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2 text-white text-sm md:text-base font-bold tracking-wide shadow-lg">
          <span>无需店铺装修</span>
          <span class="text-brand-gold/40 hidden sm:inline">|</span>
          <span>无需寻找店铺</span>
          <span class="text-brand-gold/40 hidden sm:inline">|</span>
          <span>无需高额投入</span>
          <span class="text-brand-gold/40 hidden sm:inline">|</span>
          <span>统一配送成品</span>
          <span class="text-brand-gold/40 hidden sm:inline">|</span>
          <span>口味标准化</span>
        </div>
      </div>

      <!-- 重磅卖点：双栏突出展示 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
        <div class="bg-gradient-to-br from-brand-wine via-[#6b1d2a] to-brand-wine rounded-2xl p-5 md:p-6 text-center group relative overflow-hidden shadow-lg border border-brand-gold/30">
          <div class="absolute top-2 right-2 bg-brand-gold text-brand-wine text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider">重磅</div>
          <div class="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center bg-brand-gold/20 shadow-md group-hover:scale-110 transition-all duration-300">
            <svg class="w-7 h-7 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <h3 class="text-lg md:text-xl font-black text-brand-gold mb-1 tracking-wide">免费赠送整体经营车辆</h3>
          <p class="text-white/70 text-sm leading-relaxed">加盟即免费配备定制经营车辆，移动销售灵活经营，节省大笔设备投资</p>
        </div>
        <div class="bg-gradient-to-br from-brand-wine via-[#6b1d2a] to-brand-wine rounded-2xl p-5 md:p-6 text-center group relative overflow-hidden shadow-lg border border-brand-gold/30">
          <div class="absolute top-2 right-2 bg-brand-gold text-brand-wine text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider">重磅</div>
          <div class="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center bg-brand-gold/20 shadow-md group-hover:scale-110 transition-all duration-300">
            <svg class="w-7 h-7 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8m16 0H4"/><path d="M10 12h4"/>
            </svg>
          </div>
          <h3 class="text-lg md:text-xl font-black text-brand-gold mb-1 tracking-wide">免费赠送移动冷藏柜</h3>
          <p class="text-white/70 text-sm leading-relaxed">免费提供移动式冷藏展示柜，无需额外采购冷柜设备，开店一步到位</p>
        </div>
      </div>

      <!-- 六大核心优势 -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6">
        <div v-for="item in advantages" :key="item.title"
             class="bg-brand-cream rounded-xl p-4 md:p-5 text-center card-hover group relative overflow-hidden">
          <div class="relative z-10 w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300"
               :style="{ background: item.bgColor }">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path v-for="d in item.svgPath" :key="d" :d="d" />
            </svg>
          </div>
          <h3 class="relative z-10 text-base font-bold text-brand-dark mb-1">{{ item.title }}</h3>
          <p class="relative z-10 text-xs text-brand-gray leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>

      <!-- 底部招商横幅 -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-gradient-to-r from-brand-wine to-brand-dark rounded-2xl p-6 md:p-8 text-center shadow-xl border border-brand-gold/20">
          <h3 class="text-lg md:text-xl font-black text-brand-gold mb-2 tracking-wide">诚招全国各地区独家代理商</h3>
          <p class="text-white/70 text-sm mb-4 max-w-lg mx-auto">欢迎咨询加盟合作，区域代理名额有限，立即咨询了解详情</p>
          <a href="#contact" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-wine font-black py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-brand-gold/50 hover:scale-105 text-sm tracking-wide">
            立即咨询
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const advantages = [
  { title: '无需店铺装修', desc: '流动车经营模式，减少门店装修成本', bgColor: 'linear-gradient(135deg, #fef3c7, #fde68a)', svgPath: ['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4'] },
  { title: '无需寻找店铺', desc: '经营地点灵活，商圈夜市均可经营', bgColor: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', svgPath: ['M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'] },
  { title: '无需高额投入', desc: '降低创业门槛，轻松开启创业', bgColor: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', svgPath: ['M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'] },
  { title: '统一配送成品', desc: '总部统一配送，减少备货压力', bgColor: 'linear-gradient(135deg, #ede9fe, #ddd6fe)', svgPath: ['M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8 0h4m-4 0v3m4-3h1a1 1 0 001-1v-4a1 1 0 00-1-1h-4m-4 0v3'] },
  { title: '口味标准化', desc: '古法秘方工艺，品质统一稳定', bgColor: 'linear-gradient(135deg, #fce7f3, #fbcfe8)', svgPath: ['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'] },
  { title: '总部全程扶持', desc: '培训指导运营支持，全程协助创业', bgColor: 'linear-gradient(135deg, #ffe4e6, #fecdd3)', svgPath: ['M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'] },
]
</script>
