<template>
  <div class="py-20 md:py-28 bg-brand-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="section-title">产品展示</h2>
        <p class="text-brand-gold font-display text-lg tracking-widest">—— 五大核心产品，满足多元需求 ——</p>
        <div class="w-20 h-1 bg-brand-red mx-auto mt-4"></div>
      </div>

      <!-- 产品卡片网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div v-for="(product, index) in products" :key="product.name"
             class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <!-- 产品图片区域 -->
          <div class="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-cream-dark to-brand-cream">
            <!-- 占位图（后期替换为真实产品图） -->
            <div class="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div class="w-20 h-20 rounded-full shadow-lg flex items-center justify-center mb-3"
                   :style="{ background: `linear-gradient(135deg, ${product.gradient[0]}, ${product.gradient[1]})` }">
                <span class="text-3xl">{{ product.emoji }}</span>
              </div>
              <span class="text-xs text-brand-gray/40 font-medium">点击查看详情</span>
            </div>
            <!-- 悬停覆盖层 -->
            <div class="absolute inset-0 bg-brand-red/80 flex items-center justify-center opacity-0
                        group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-white font-bold text-lg">查看详情</span>
            </div>
          </div>

          <!-- 产品信息 -->
          <div class="p-5">
            <h3 class="text-lg font-bold text-brand-dark mb-2 text-center">{{ product.name }}</h3>
            <p class="text-sm text-brand-gray leading-relaxed text-center">{{ product.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 替换说明 -->
      <div class="mt-12 text-center">
        <p class="text-xs text-brand-gray/50 inline-flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          产品图片请替换为实拍图，存放路径见上方标注，文件名保持一致即可自动生效
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    name: '酱牛肉',
    desc: '精选优质牛腱，配以二十余种天然香辛料，古法慢火卤制，酱香浓郁，肉质紧实有嚼劲。',
    emoji: '🥩',
    gradient: ['#8B1A2B', '#C41E3A'],
    imgPath: 'assets/images/product-jiangniurou.jpg',
  },
  {
    name: '牛肚',
    desc: '新鲜金钱肚，精细清洗处理，卤制入味透彻，口感爽脆弹牙，是佐酒佳品，老顾客最爱。',
    emoji: '🍖',
    gradient: ['#C9A96E', '#8B6914'],
    imgPath: 'assets/images/product-niudu.jpg',
  },
  {
    name: '牛腱子',
    desc: '纹理分明的优质牛腱，筋肉相间层次分明，卤制后切面花纹精美，口感软烂适度不塞牙。',
    emoji: '🥓',
    gradient: ['#A0522D', '#6B3410'],
    imgPath: 'assets/images/product-niujianzi.jpg',
  },
  {
    name: '牛蹄筋',
    desc: '晶莹剔透的牛蹄筋，胶原蛋白丰富，入口Q弹软糯，老幼皆宜，是店里的招牌人气产品。',
    emoji: '🍗',
    gradient: ['#D4A574', '#A0522D'],
    imgPath: 'assets/images/product-niutijin.jpg',
  },
  {
    name: '牛百叶',
    desc: '层层分明的牛百叶，精选上等食材，卤制后爽脆可口，蘸料即食，回头率超高的经典产品。',
    emoji: '🍲',
    gradient: ['#DEB887', '#C9A96E'],
    imgPath: 'assets/images/product-niubaiye.jpg',
  },
]
</script>
