<template>
  <div class="py-12 md:py-16 bg-brand-silk">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">产品展示</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 五大核心产品，满足多元需求 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <!-- Tab切换 -->
      <div class="flex justify-center mb-6 overflow-x-auto">
        <div class="inline-flex bg-brand-cream rounded-xl p-1 gap-0.5">
          <button v-for="p in products" :key="p.name" @click="activeTab = p.name"
                  class="px-3 md:px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300"
                  :class="activeTab === p.name ? 'bg-brand-red text-white shadow-md' : 'text-brand-gray hover:text-brand-dark'">
            {{ p.name }}
          </button>
        </div>
      </div>

      <!-- 产品卡片 — 浅色底 -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-brand-cream rounded-2xl overflow-hidden shadow-lg border border-brand-gold/10">
          <div class="grid md:grid-cols-2 gap-0">
            <!-- 产品图 -->
            <div class="relative overflow-hidden bg-brand-cream-dark/30" style="min-height:260px">
              <img :src="activeProduct.img" :alt="activeProduct.name" loading="lazy" decoding="async" class="w-full h-full object-cover absolute inset-0" />
            </div>
            <!-- 产品信息 -->
            <div class="p-6 md:p-8 flex flex-col justify-center">
              <h3 class="text-xl md:text-2xl font-display font-bold text-brand-dark mb-2">{{ activeProduct.name }}</h3>
              <p class="text-sm text-brand-gray leading-relaxed mb-4">{{ activeProduct.desc }}</p>
              <!-- 特点标签 -->
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span v-for="tag in activeProduct.tags" :key="tag"
                      class="text-xs px-3 py-1 rounded-full bg-brand-red/8 text-brand-red font-medium">{{ tag }}</span>
              </div>
              <!-- 食用场景 -->
              <p class="text-xs text-brand-gold flex items-center gap-1">
                <span>🍽</span> {{ activeProduct.scene }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 营养价值 -->
      <div class="mt-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div v-for="n in nutritions" :key="n.title"
               class="bg-brand-cream rounded-xl p-3 text-center hover:bg-white hover:shadow-md transition-all duration-300">
            <div class="flex items-center justify-center gap-2 mb-1">
              <span class="text-lg">{{ n.icon }}</span>
              <span class="text-lg font-black text-brand-red">{{ n.value }}</span>
            </div>
            <h4 class="text-sm font-bold text-brand-dark">{{ n.title }}</h4>
            <p class="text-xs text-brand-gray mt-0.5">{{ n.unit }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('酱牛肉')

const products = [
  {
    name: '酱牛肉',
    desc: '精选上等牛腱肉，配以二十余味秘制香辛料，古法慢火酱焖数小时，酱香层层渗透，肉质紧实弹牙。富含高蛋白与氨基酸，老少皆宜，档口逢出必抢。',
    emoji: '🥩', bg1: '#c41e3a', bg2: '#8b1a2b', bg3: '#5c1018',
    tags: ['核心爆款', '高蛋白', '逢出必抢'],
    scene: '佐餐下酒 · 家庭聚餐必备硬菜',
    img: '/wangzhan/images/product-jiangniurou.png',
    imgPath: 'assets/images/product-jiangniurou.png',
  },
  {
    name: '牛肚',
    desc: '甄选厚实金钱肚，精细清洗去腥，秘制卤汤慢浸入味，入口爽脆弹牙、香浓四溢。富含多种微量元素，经典冷拌风味，食客赞不绝口，回购率极高。',
    emoji: '🍖', bg1: '#c9a96e', bg2: '#8b6914', bg3: '#5c440d',
    tags: ['高复购王牌', '爽脆弹牙', '冷拌经典'],
    scene: '凉拌即食 · 佐酒下饭两相宜',
    img: '/wangzhan/images/product-niudu.png',
    imgPath: 'assets/images/product-niudu.png',
  },
  {
    name: '牛腱子',
    desc: '精选纹理分明的优质牛腱芯，筋肉相间层叠如画，小火慢卤至软烂适度，切片不散、入口不柴。高蛋白低脂肪，宴客摆盘体面之选，切片即出餐。',
    emoji: '🥓', bg1: '#b5651d', bg2: '#8b4513', bg3: '#5c2d0a',
    tags: ['宴客首推', '纹理精美', '低脂高蛋白'],
    scene: '切片摆盘 · 宴客赠礼体面之选',
    img: '/wangzhan/images/product-niujianzi.png',
    imgPath: 'assets/images/product-niujianzi.png',
  },
  {
    name: '牛蹄筋',
    desc: '甄选完整牛蹄筋，古法慢炖至晶莹透亮，胶原蛋白丰盈，入口Q弹软糯、胶质满满。滋补养颜，老少皆宜，是店内复购率最高的招牌人气产品。',
    emoji: '🍗', bg1: '#d4a574', bg2: '#a0522d', bg3: '#6b3410',
    tags: ['招牌人气', '胶原蛋白', '滋补养颜'],
    scene: '老幼皆宜 · 每日现卤限量供应',
    img: '/wangzhan/images/product-niutijin.png',
    imgPath: 'assets/images/product-niutijin.png',
  },
  {
    name: '牛百叶',
    desc: '甄选上等牛百叶，层层分明、片片透亮，秘制卤汤轻浸锁鲜，入口爽脆化渣。涮火锅、凉拌、热炒皆宜，百搭型爆款单品，回头客络绎不绝。',
    emoji: '🍲', bg1: '#8b6914', bg2: '#6b4c12', bg3: '#4a340d',
    tags: ['百搭爆款', '爽脆化渣', '一材多吃'],
    scene: '火锅标配 · 凉拌热炒样样通',
    img: '/wangzhan/images/product-niubaiye.png',
    imgPath: 'assets/images/product-niubaiye.png',
  },
]

const activeProduct = computed(() => products.find(p => p.name === activeTab.value))

const nutritions = [
  { icon: '💪', value: '20g+', title: '高蛋白', unit: '每100克含量' },
  { icon: '⚖️', value: '<5%', title: '低脂肪', unit: '每100克含量' },
  { icon: '🌟', value: '12种+', title: '营养丰富', unit: '微量元素' },
  { icon: '👨‍👩‍👧‍👦', value: '全龄', title: '老少皆宜', unit: '适用人群' },
]
</script>
