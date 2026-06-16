<template>
  <div class="py-12 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">品牌介绍</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 云声健 · 五香牛肉坊 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-center mb-10">
        <div class="space-y-4">
          <h3 class="text-xl md:text-2xl font-display font-bold text-brand-dark leading-snug">
            百年秘方传承<br/>
            <span class="text-brand-red">纯真酱牛肉的坚守者</span>
          </h3>
          <p class="text-brand-gray leading-relaxed text-sm md:text-base">
            云声健五香牛肉坊，源自祖传秘方，历经百年沉淀。坚持选用优质黄牛肉，配以二十余种天然香辛料，遵循古法腌制工艺，不添加任何人工色素与防腐剂，只为还原最纯真的酱牛肉风味。每一块酱牛肉都经过72小时精心腌制，慢火卤煮8小时以上，让五香风味丝丝入扣。
          </p>
          <div class="flex gap-6">
            <div class="text-center"><p class="text-2xl font-bold text-brand-red">100+</p><p class="text-xs text-brand-gray">年传承秘方</p></div>
            <div class="text-center"><p class="text-2xl font-bold text-brand-red">500+</p><p class="text-xs text-brand-gray">加盟门店</p></div>
            <div class="text-center"><p class="text-2xl font-bold text-brand-red">99%</p><p class="text-xs text-brand-gray">客户好评率</p></div>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-brand-cream-dark to-brand-cream flex items-center justify-center">
            <div class="text-center p-6">
              <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-brand-red/10 flex items-center justify-center">
                <svg class="w-8 h-8 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p class="text-brand-gray text-xs">品牌形象展示区</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 四特色，一行紧凑 -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div v-for="item in features" :key="item.title"
             class="text-center p-4 rounded-xl bg-brand-cream hover:bg-white hover:shadow-md card-hover group">
          <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
            <span class="text-lg">{{ item.icon }}</span>
          </div>
          <h4 class="text-sm font-bold text-brand-dark mb-1">{{ item.title }}</h4>
          <p class="text-xs text-brand-gray leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { icon: '📜', title: '古法制作工艺', desc: '百年秘方，二十余种天然香辛料，72小时腌制，古法慢火卤煮' },
  { icon: '🥩', title: '精选优质食材', desc: '严选优质黄牛肉，肉质鲜嫩紧实，从源头把控品质' },
  { icon: '🍲', title: '纯真酱牛肉', desc: '不添加色素与防腐剂，纯天然制作，地道五香风味' },
  { icon: '🏆', title: '品牌实力保障', desc: '全国500+门店验证，成熟运营模式，总部全程扶持' },
]
</script>
