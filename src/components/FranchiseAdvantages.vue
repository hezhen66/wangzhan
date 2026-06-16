<template>
  <div class="py-20 md:py-28 bg-brand-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="section-title">加盟优势</h2>
        <p class="text-brand-gold font-display text-lg tracking-widest">—— 六大核心优势，助您轻松创业 ——</p>
        <div class="w-20 h-1 bg-brand-red mx-auto mt-4"></div>
      </div>

      <!-- 6个优势卡片 -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in advantages" :key="item.title"
             class="bg-white rounded-2xl p-8 text-center card-hover group relative overflow-hidden"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <!-- 装饰角标 -->
          <div class="absolute top-0 right-0 w-16 h-16 bg-brand-red/5 rounded-bl-3xl -mr-2 -mt-2
                      group-hover:bg-brand-red/10 transition-colors duration-300"></div>

          <!-- 图标 -->
          <div class="relative z-10 w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center
                      text-3xl shadow-lg group-hover:scale-110 transition-all duration-300"
               :style="{ background: item.bgColor }">
            {{ item.icon }}
          </div>

          <!-- 标题 -->
          <h3 class="relative z-10 text-xl font-bold text-brand-dark mb-3">{{ item.title }}</h3>

          <!-- 描述 -->
          <p class="relative z-10 text-sm text-brand-gray leading-relaxed">{{ item.desc }}</p>

          <!-- 底部高亮条 -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100
                      transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const advantages = [
  {
    icon: '💰',
    title: '小本创业',
    desc: '低门槛启动，万元级投资即可开店，无需餐饮经验，适合各类创业者，轻松实现老板梦。',
    bgColor: 'linear-gradient(135deg, #fef3c7, #fde68a)',
  },
  {
    icon: '📉',
    title: '投资小',
    desc: '标准化设备配置，精简装修方案，减少不必要开支，最大程度降低初期投资成本。',
    bgColor: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
  },
  {
    icon: '📈',
    title: '收益快',
    desc: '产品利润空间大，市场需求旺盛，选址灵活，回本周期短，3-6个月即可实现稳定盈利。',
    bgColor: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
  },
  {
    icon: '🏢',
    title: '总部扶持',
    desc: '从选址装修到开业运营，总部全程指导。统一配送核心料包，确保口味标准化，无需担忧品控。',
    bgColor: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
  },
  {
    icon: '🛡️',
    title: '区域保护',
    desc: '严格的区域保护政策，保障加盟商独家经营权，避免同品牌竞争，确保您的市场空间。',
    bgColor: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
  },
  {
    icon: '📚',
    title: '全程培训',
    desc: '提供完整的技术培训体系，涵盖制作工艺、门店管理、营销推广，零基础也能快速上手。',
    bgColor: 'linear-gradient(135deg, #ffe4e6, #fecdd3)',
  },
]
</script>
