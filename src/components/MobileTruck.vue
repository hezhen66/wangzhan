<template>
  <div class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="section-title">成熟流动车经营模式</h2>
        <p class="text-brand-gold font-display text-lg tracking-widest">—— 品牌统一形象，灵活经营全覆盖 ——</p>
        <div class="w-20 h-1 bg-brand-red mx-auto mt-4"></div>
      </div>

      <!-- 流动车图片展示 -->
      <div class="grid lg:grid-cols-2 gap-8 mb-16">
        <!-- 正面图 -->
        <div class="relative group cursor-pointer">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="@/assets/images/truck-front.png"
              alt="流动车正面"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              @error="onImgError"
            />
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
            <p class="text-white font-bold text-lg">流动车正面展示</p>
            <p class="text-white/70 text-sm">统一品牌形象，识别度高</p>
          </div>
        </div>

        <!-- 侧面图 -->
        <div class="relative group cursor-pointer">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="@/assets/images/truck-side.png"
              alt="流动车侧面"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              @error="onImgError"
            />
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
            <p class="text-white font-bold text-lg">流动车侧面展示</p>
            <p class="text-white/70 text-sm">灵活机动，覆盖更广商圈</p>
          </div>
        </div>
      </div>

      <!-- 流动车优势 -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in truckFeatures" :key="item.title"
             class="flex items-start gap-4 p-6 rounded-xl bg-brand-cream hover:bg-white hover:shadow-lg transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
            <span class="text-xl">{{ item.icon }}</span>
          </div>
          <div>
            <h4 class="font-bold text-brand-dark mb-1">{{ item.title }}</h4>
            <p class="text-sm text-brand-gray leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const truckFeatures = [
  { icon: '🎨', title: '品牌统一形象', desc: '总部统一设计流动车外观，品牌辨识度高，走到哪里都是活广告' },
  { icon: '🔄', title: '灵活经营', desc: '不限场地，可进社区、商圈、集市、学校周边，哪里人多去哪里' },
  { icon: '📍', title: '覆盖广泛', desc: '一台车覆盖多个点位，可根据人流潮汐灵活调整经营位置' },
  { icon: '🤝', title: '总部支持', desc: '流动车由总部统一设计配置，提供完整技术支持与运营指导' },
]

function onImgError(e) {
  e.target.style.display = 'none'
  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-brand-cream-dark', 'to-brand-cream')
  const placeholder = document.createElement('div')
  placeholder.className = 'absolute inset-0 flex items-center justify-center text-brand-gray text-sm'
  placeholder.textContent = '图片加载中...（后期替换为流动车实拍图）'
  e.target.parentElement.appendChild(placeholder)
}
</script>
