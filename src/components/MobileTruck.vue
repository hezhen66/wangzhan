<template>
  <div class="py-12 md:py-16 bg-brand-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- 标题 -->
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">成熟流动车经营模式</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 无需门店 · 灵活经营 · 小本创业 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <!-- 重磅卖点：双栏 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto mb-8">
        <div class="bg-gradient-to-br from-brand-wine via-[#6b1d2a] to-brand-wine rounded-2xl p-5 md:p-6 text-center group relative overflow-hidden shadow-lg border border-brand-gold/30">
          <div class="absolute top-2 right-2 bg-brand-gold text-brand-wine text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider">免费</div>
          <div class="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center bg-brand-gold/20 shadow-md group-hover:scale-110 transition-all duration-300">
            <svg class="w-7 h-7 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <h3 class="text-lg md:text-xl font-black text-brand-gold mb-1 tracking-wide">免费赠送整体经营车辆</h3>
          <p class="text-white/70 text-sm leading-relaxed">加盟即配定制流动经营车辆，无需自购，即开即用</p>
        </div>
        <div class="bg-gradient-to-br from-brand-wine via-[#6b1d2a] to-brand-wine rounded-2xl p-5 md:p-6 text-center group relative overflow-hidden shadow-lg border border-brand-gold/30">
          <div class="absolute top-2 right-2 bg-brand-gold text-brand-wine text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider">免费</div>
          <div class="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center bg-brand-gold/20 shadow-md group-hover:scale-110 transition-all duration-300">
            <svg class="w-7 h-7 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8m16 0H4"/><path d="M10 12h4"/>
            </svg>
          </div>
          <h3 class="text-lg md:text-xl font-black text-brand-gold mb-1 tracking-wide">免费赠送移动冷藏柜</h3>
          <p class="text-white/70 text-sm leading-relaxed">免费配备移动式冷藏展示柜，无需额外采购冷柜设备</p>
        </div>
      </div>

      <!-- 左图右文：经营模式优势 -->
      <div class="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto mb-10">
        <div class="rounded-2xl overflow-hidden shadow-xl border-4 border-white/80 bg-[#f5ede0] max-w-sm mx-auto md:mx-0 md:sticky md:top-20">
          <img src="@/assets/images/truck-front.jpg" alt="流动经营车" loading="lazy" decoding="async" class="w-full h-auto" @error="onImgError" />
        </div>

        <div>
          <h3 class="text-lg font-display font-bold text-brand-dark mb-4 flex items-center gap-2">
            <span class="w-1 h-5 bg-brand-red rounded-full inline-block"></span>
            流动车模式优势
          </h3>
          <div class="space-y-2.5">
            <div v-for="item in modeAdvantages" :key="item.title"
                 class="flex items-start gap-3 bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition-all duration-300">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" :style="{ background: item.color }">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-bold text-brand-dark">{{ item.title }}</p>
                <p class="text-xs text-brand-gray leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 经营流程 -->
      <div class="max-w-4xl mx-auto mb-10">
        <h3 class="text-center text-lg font-display font-bold text-brand-dark mb-5 flex items-center justify-center gap-2">
          <span class="w-1 h-5 bg-brand-red rounded-full inline-block"></span>
          创业流程
        </h3>
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <template v-for="(step, i) in flowSteps" :key="step">
            <div class="flex items-center gap-2 md:gap-3">
              <div class="bg-white rounded-xl px-4 py-3 text-center shadow-sm hover:shadow-md transition-all duration-300 min-w-[90px]">
                <div class="w-7 h-7 rounded-full bg-brand-red text-white text-xs font-black flex items-center justify-center mx-auto mb-1.5">{{ i + 1 }}</div>
                <p class="text-xs font-bold text-brand-dark whitespace-nowrap">{{ step }}</p>
              </div>
              <svg v-if="i < flowSteps.length - 1" class="w-4 h-4 text-brand-gold flex-shrink-0 hidden sm:block" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </template>
        </div>
      </div>

      <!-- 经营场景 -->
      <div class="max-w-4xl mx-auto mb-10">
        <h3 class="text-center text-lg font-display font-bold text-brand-dark mb-5 flex items-center justify-center gap-2">
          <span class="w-1 h-5 bg-brand-red rounded-full inline-block"></span>
          经营场景
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div v-for="scene in scenes" :key="scene.name"
               class="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 border border-brand-gold/10 group cursor-default">
            <div class="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{{ scene.icon }}</div>
            <h4 class="font-bold text-brand-dark text-sm mb-1">{{ scene.name }}</h4>
            <p class="text-xs text-brand-gray leading-relaxed">{{ scene.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 总部支持 + 创业人群 双栏 -->
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        <!-- 总部支持 -->
        <div>
          <h3 class="text-lg font-display font-bold text-brand-dark mb-4 flex items-center gap-2">
            <span class="w-1 h-5 bg-brand-red rounded-full inline-block"></span>
            总部支持
          </h3>
          <div class="space-y-2.5">
            <div v-for="item in supportItems" :key="item"
                 class="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300">
              <div class="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="text-sm font-bold text-brand-dark">{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- 创业人群 -->
        <div>
          <h3 class="text-lg font-display font-bold text-brand-dark mb-4 flex items-center gap-2">
            <span class="w-1 h-5 bg-brand-red rounded-full inline-block"></span>
            适合人群
          </h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="person in targetPeople" :key="person"
                  class="bg-white rounded-full px-4 py-2 text-sm font-bold text-brand-dark shadow-sm hover:shadow-md transition-all duration-300 hover:bg-brand-red hover:text-white cursor-default">
              {{ person }}
            </span>
          </div>
        </div>
      </div>

      <!-- 底部招商横幅 -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-gradient-to-r from-brand-wine to-brand-dark rounded-2xl p-6 md:p-8 text-center shadow-xl border border-brand-gold/20">
          <h3 class="text-lg md:text-xl font-black text-brand-gold mb-2 tracking-wide">诚招全国各地区独家代理商</h3>
          <p class="text-white/70 text-sm mb-3 max-w-lg mx-auto">区域名额有限，欢迎咨询加盟合作</p>
          <a href="tel:0531-82052955" class="inline-block text-2xl md:text-3xl font-black text-white hover:text-brand-gold transition-colors tracking-wide mb-4">
            0531-82052955
          </a>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact" class="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-wine font-black py-3 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-brand-gold/50 hover:scale-105 text-sm tracking-wide">
              立即咨询
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const modeAdvantages = [
  { title: '无需门店装修', desc: '告别高昂装修费用，流动车即经营场所', color: 'linear-gradient(135deg, #dc2626, #b91c1c)', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4' },
  { title: '无需高额房租', desc: '不受固定门店房租约束，经营成本大幅降低', color: 'linear-gradient(135deg, #d97706, #b45309)', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: '无需长期雇佣员工', desc: '1-2人即可轻松经营，人力成本低', color: 'linear-gradient(135deg, #059669, #047857)', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: '经营地点灵活', desc: '夜市、商圈、社区、景区随心切换经营', color: 'linear-gradient(135deg, #7c3aed, #6d28d9)', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: '降低创业门槛', desc: '投入低、风险小、上手快，轻创业首选', color: 'linear-gradient(135deg, #0891b2, #0e7490)', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
]

const flowSteps = ['总部培训', '统一配送产品', '赠送经营车辆', '选择经营区域', '开始销售']

const scenes = [
  { icon: '🏬', name: '商圈经营', desc: '商业街、购物中心周边，人流密集区' },
  { icon: '🌙', name: '夜市经营', desc: '夜市美食街，夜间消费黄金时段' },
  { icon: '🏘️', name: '社区经营', desc: '居民小区周边，稳定回头客源' },
  { icon: '🏔️', name: '景区经营', desc: '旅游景区、公园周边，节假日旺季' },
]

const supportItems = [
  '总部统一配送成品',
  '无需复杂制作工序',
  '无需厨师经验',
  '口味标准化',
  '新手可快速上手',
]

const targetPeople = [
  '小本创业者',
  '夫妻创业',
  '返乡创业',
  '兼职经营',
  '首次创业人群',
]

function onImgError(e) {
  e.target.style.display = 'none'
  const el = e.target.parentElement
  el.classList.add('bg-gradient-to-br', 'from-brand-cream-dark', 'to-brand-cream', 'flex', 'items-center', 'justify-center', 'min-h-[200px]')
  el.innerHTML = '<span class="text-brand-gray text-sm">图片加载中...</span>'
}
</script>
