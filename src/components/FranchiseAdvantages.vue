<template>
  <div class="py-12 md:py-16 bg-brand-silk">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">加盟优势</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 六大核心优势，助您轻松创业 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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
    </div>
  </div>
</template>

<script setup>
const advantages = [
  { title: '小本创业', desc: '低门槛启动，万元级投资即可开店，无需餐饮经验，轻松实现老板梦', bgColor: 'linear-gradient(135deg, #fef3c7, #fde68a)', svgPath: ['M12 2a10 10 0 100 20 10 10 0 000-20z', 'M15 9a3 3 0 11-6 0 3 3 0 016 0z', 'M8 14h8'] },
  { title: '投资小', desc: '标准化设备配置，精简装修方案，最大程度降低初期投资成本', bgColor: 'linear-gradient(135deg, #fce7f3, #fbcfe8)', svgPath: ['M12 2v20', 'M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'] },
  { title: '收益快', desc: '产品利润空间大，市场需求旺盛，选址灵活，回本周期短', bgColor: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', svgPath: ['M22 12l-4-4-4 4', 'M18 8v12', 'M2 18l4 4 4-4', 'M6 16V4'] },
  { title: '总部扶持', desc: '从选址装修到开业运营全程指导，统一配送核心料包，确保口味标准化', bgColor: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', svgPath: ['M3 21h18', 'M5 21V7l8-4v18', 'M19 21V11l-6-4', 'M9 9v.01', 'M9 12v.01', 'M9 15v.01', 'M15 10v.01', 'M15 14v.01'] },
  { title: '区域保护', desc: '严格的区域保护政策，保障加盟商独家经营权，确保您的市场空间', bgColor: 'linear-gradient(135deg, #ede9fe, #ddd6fe)', svgPath: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'] },
  { title: '全程培训', desc: '完整技术培训体系，涵盖制作工艺、门店管理、营销推广，零基础可上手', bgColor: 'linear-gradient(135deg, #ffe4e6, #fecdd3)', svgPath: ['M4 19.5A2.5 2.5 0 016.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z'] },
]
</script>
