<template>
  <div class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="section-title">品牌介绍</h2>
        <p class="text-brand-gold font-display text-lg tracking-widest">—— 云声健 · 五香牛肉坊 ——</p>
        <div class="w-20 h-1 bg-brand-red mx-auto mt-4"></div>
      </div>

      <!-- 品牌简介 -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <!-- 左侧文字 -->
        <div class="space-y-6">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-brand-dark leading-relaxed">
            百年秘方传承<br/>
            <span class="text-brand-red">纯真酱牛肉的坚守者</span>
          </h3>
          <p class="text-brand-gray leading-relaxed text-base md:text-lg">
            云声健五香牛肉坊，源自祖传秘方，历经百年沉淀。我们坚持选用优质黄牛肉，配以二十余种天然香辛料，遵循古法腌制工艺，不添加任何人工色素与防腐剂，只为还原最纯真的酱牛肉风味。
          </p>
          <p class="text-brand-gray leading-relaxed text-base md:text-lg">
            每一块酱牛肉都经过72小时精心腌制，慢火卤煮8小时以上，让五香风味丝丝入扣，肉香浓郁，口感醇厚。我们的工艺从选料到出品，每一步都严格把控，确保品质始终如一。
          </p>
          <div class="flex gap-6 pt-4">
            <div class="text-center">
              <p class="text-3xl font-bold text-brand-red">100+</p>
              <p class="text-sm text-brand-gray">年传承秘方</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-brand-red">500+</p>
              <p class="text-sm text-brand-gray">加盟门店</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-brand-red">99%</p>
              <p class="text-sm text-brand-gray">客户好评率</p>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-cream-dark to-brand-cream flex items-center justify-center">
            <div class="text-center p-8">
              <!-- 占位图：后期替换为品牌图片 -->
              <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-red/10 flex items-center justify-center">
                <svg class="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p class="text-brand-gray text-sm">
                <!-- 品牌形象图片 -->
                <span class="font-bold text-brand-dark">品牌形象展示区</span><br/>
                <span class="text-xs">（后期替换为实拍图片）</span>
              </p>
            </div>
          </div>
          <!-- 装饰框 -->
          <div class="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/30 rounded-2xl -z-10"></div>
        </div>
      </div>

      <!-- 四大优势 -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="item in features" :key="item.title"
             class="text-center p-8 rounded-2xl bg-brand-cream hover:bg-white hover:shadow-xl card-hover group">
          <div class="w-16 h-16 mx-auto mb-4 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
            <span class="text-2xl">{{ item.icon }}</span>
          </div>
          <h4 class="text-lg font-bold text-brand-dark mb-2">{{ item.title }}</h4>
          <p class="text-sm text-brand-gray leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { icon: '📜', title: '古法制作工艺', desc: '传承百年秘方，二十余种天然香辛料，72小时精心腌制，古法慢火卤煮' },
  { icon: '🥩', title: '精选优质食材', desc: '严选优质黄牛肉，肉质鲜嫩紧实，从源头把控品质，确保食品安全' },
  { icon: '🍲', title: '纯真酱牛肉', desc: '不添加人工色素与防腐剂，纯天然制作，还原最地道的五香酱牛肉风味' },
  { icon: '🏆', title: '品牌实力保障', desc: '全国500+门店验证，成熟运营模式，总部全程扶持，创业无忧' },
]
</script>
