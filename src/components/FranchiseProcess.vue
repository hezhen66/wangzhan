<template>
  <div class="py-20 md:py-28 bg-brand-cream">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="section-title">加盟流程</h2>
        <p class="text-brand-gold font-display text-lg tracking-widest">—— 五步轻松开店，总部全程扶持 ——</p>
        <div class="w-20 h-1 bg-brand-red mx-auto mt-4"></div>
      </div>

      <!-- 流程图 -->
      <div class="relative">
        <!-- 步骤列表 -->
        <div class="space-y-0">
          <div v-for="(step, index) in steps" :key="step.title"
               class="relative flex items-start gap-6 pb-12 last:pb-0 group">

            <!-- 左侧：步骤序号 + 连接线 -->
            <div class="flex flex-col items-center flex-shrink-0 relative">
              <!-- 序号圆圈 -->
              <div class="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl
                          shadow-lg relative z-10 group-hover:scale-110 transition-all duration-300"
                   :class="index === 0 ? 'bg-brand-red' : 'bg-brand-gold'">
                {{ index + 1 }}
              </div>
              <!-- 连接线（最后一项不显示） -->
              <div v-if="index < steps.length - 1"
                   class="w-0.5 flex-1 min-h-[60px] mt-3"
                   :class="index === 0 ? 'bg-brand-red/30' : 'bg-brand-gold/30'">
              </div>
            </div>

            <!-- 右侧：步骤内容 -->
            <div class="flex-1 bg-white rounded-2xl p-6 shadow-md card-hover">
              <h3 class="text-xl font-bold text-brand-dark mb-2">{{ step.title }}</h3>
              <p class="text-brand-gray text-sm leading-relaxed">{{ step.desc }}</p>
              <!-- 标签 -->
              <div class="flex gap-2 mt-3">
                <span v-for="tag in step.tags" :key="tag"
                      class="text-xs px-3 py-1 rounded-full bg-brand-red/5 text-brand-red font-medium">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部 CTA -->
      <div class="text-center mt-16">
        <p class="text-brand-gray mb-4">现在咨询，获取专属加盟方案</p>
        <a href="#contact"
           class="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-12 rounded-full
                  transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg tracking-wide">
          立即咨询加盟
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    title: '咨询了解',
    desc: '通过电话、微信或在线留言与我们取得联系，专业招商顾问为您详细介绍品牌信息、加盟政策及盈利模式，解答您的所有疑问。',
    tags: ['电话咨询', '在线留言', '资料索取'],
  },
  {
    title: '项目考察',
    desc: '欢迎您亲临总部实地考察，参观直营门店与生产基地，品尝全部产品，深入了解运营实况，与总部团队面对面沟通交流。',
    tags: ['实地考察', '产品品鉴', '门店参观'],
  },
  {
    title: '签约合作',
    desc: '双方达成合作意向后，签订正式加盟合同，明确双方权利义务，缴纳加盟费用，总部即刻启动开店筹备服务。',
    tags: ['签订合同', '权益保障', '区域锁定'],
  },
  {
    title: '总部培训',
    desc: '总部提供系统化培训，包括酱牛肉制作技术、门店运营管理、营销推广策略、客户服务标准等，确保您快速掌握经营技能。',
    tags: ['技术培训', '管理培训', '营销指导'],
  },
  {
    title: '开业运营',
    desc: '总部协助选址评估、装修设计、设备采购、首批备货，开业期间派驻专业人员现场带店指导，确保开业顺利、运营上轨。',
    tags: ['选址支持', '装修指导', '带店运营'],
  },
]
</script>
