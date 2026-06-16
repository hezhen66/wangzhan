<template>
  <div class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="section-title">牛肉营养价值</h2>
        <p class="text-brand-gold font-display text-lg tracking-widest">—— 高蛋白低脂肪，老少皆宜的健康选择 ——</p>
        <div class="w-20 h-1 bg-brand-red mx-auto mt-4"></div>
      </div>

      <!-- 4个营养价值卡片 -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(item, index) in nutritions" :key="item.title"
             class="relative group">
          <!-- 卡片主体 -->
          <div class="bg-brand-cream rounded-2xl p-8 text-center h-full card-hover relative z-10">
            <!-- 图标 -->
            <div class="w-20 h-20 mx-auto mb-5 rounded-full bg-white shadow-lg flex items-center justify-center
                        group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
              <span class="text-3xl">{{ item.icon }}</span>
            </div>

            <!-- 数值 -->
            <p class="text-4xl font-black text-brand-red mb-2 font-display group-hover:scale-110 transition-transform duration-300">
              {{ item.value }}
            </p>
            <p class="text-xs text-brand-gray mb-3">{{ item.unit }}</p>

            <!-- 标题 -->
            <h3 class="text-xl font-bold text-brand-dark mb-3">{{ item.title }}</h3>

            <!-- 描述 -->
            <p class="text-sm text-brand-gray leading-relaxed">{{ item.desc }}</p>
          </div>

          <!-- 底部装饰 -->
          <div class="absolute -bottom-2 left-4 right-4 h-3 bg-brand-red/10 rounded-b-2xl -z-0
                      group-hover:bg-brand-red/20 transition-colors duration-300"></div>
        </div>
      </div>

      <!-- 附加说明 -->
      <div class="mt-16 bg-gradient-to-r from-brand-red/5 via-brand-cream-dark to-brand-red/5 rounded-2xl p-8 text-center">
        <p class="text-brand-dark text-base md:text-lg leading-relaxed">
          <span class="font-bold text-brand-red">牛肉</span>富含优质蛋白质、氨基酸、维生素B族及铁、锌等微量元素，
          脂肪含量远低于猪肉，是营养学家推荐的<span class="font-bold text-brand-red">优质动物蛋白来源</span>。
          云声健五香牛肉坊坚持<span class="font-bold text-brand-red">天然无添加</span>，让您吃得美味更吃得健康。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const nutritions = [
  {
    icon: '💪',
    value: '20g+',
    unit: '每100克含量',
    title: '高蛋白',
    desc: '牛肉的蛋白质含量高达20%以上，氨基酸组成接近人体需求，吸收利用率极高，是增强体质、补充营养的理想食材。',
  },
  {
    icon: '⚖️',
    value: '<5%',
    unit: '每100克含量',
    title: '低脂肪',
    desc: '精选瘦牛肉部位，脂肪含量低于5%，远低于猪肉和羊肉，适合追求健康饮食的现代消费者，吃肉不长胖。',
  },
  {
    icon: '🌟',
    value: '12种+',
    unit: '微量元素',
    title: '营养丰富',
    desc: '富含铁、锌、硒、维生素B12等多种人体必需微量元素，补血养气、强筋健骨，营养价值远超普通肉类。',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    value: '全龄',
    unit: '适用人群',
    title: '老少皆宜',
    desc: '酱牛肉口感软烂适中，易消化、好吸收，牙口不好的老人和正在长身体的小孩都能放心享用，是餐桌上的全家福。',
  },
]
</script>
