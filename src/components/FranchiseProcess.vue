<template>
  <div class="py-12 md:py-16 bg-brand-cream">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">加盟流程</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 四步轻松开店，总部全程扶持 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <!-- 桌面横向 -->
      <div class="hidden md:flex items-start justify-between gap-2">
        <div v-for="(step, index) in steps" :key="step.title" class="flex-1 text-center relative">
          <div class="w-12 h-12 rounded-full bg-brand-red text-white font-black text-lg flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10">{{ index + 1 }}</div>
          <h3 class="font-bold text-brand-dark text-sm mb-1">{{ step.title }}</h3>
          <p class="text-xs text-brand-gray leading-relaxed px-1">{{ step.desc }}</p>
          <div v-if="index < steps.length - 1" class="absolute top-5 -right-2 text-brand-red/30 text-lg">→</div>
        </div>
      </div>

      <!-- 手机纵向 -->
      <div class="md:hidden space-y-3">
        <div v-for="(step, index) in steps" :key="step.title" class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-full bg-brand-red text-white font-black flex items-center justify-center flex-shrink-0 shadow-md text-sm">{{ index + 1 }}</div>
          <div class="bg-white rounded-xl p-3 flex-1">
            <h3 class="font-bold text-brand-dark text-sm mb-0.5">{{ step.title }}</h3>
            <p class="text-xs text-brand-gray leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <a href="#contact" class="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm tracking-wide">
          立即咨询加盟
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  { title: '咨询了解', desc: '通过电话、微信或在线留言联系我们，招商顾问为您详细介绍品牌信息与加盟政策' },
  { title: '签约合作', desc: '达成合作意向后签订加盟合同，明确双方权利义务，总部即刻启动开店筹备服务' },
  { title: '总部培训', desc: '提供系统化培训：酱牛肉制作技术、门店运营管理、营销推广策略，零基础快速上手' },
  { title: '开业运营', desc: '总部协助选址评估、装修设计、设备采购，开业期间派驻专业人员现场带店指导' },
]
</script>
