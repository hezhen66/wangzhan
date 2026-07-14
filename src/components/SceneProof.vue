<template>
  <div class="py-12 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">真实经营现场</h2>
        <p class="text-brand-gold font-display text-sm tracking-widest">—— 实地拍摄，看得见的经营现场 ——</p>
        <div class="w-16 h-0.5 bg-brand-red mx-auto mt-3"></div>
      </div>

      <!-- 视频区 -->
      <div class="max-w-4xl mx-auto mb-10">
        <div class="relative rounded-2xl overflow-hidden shadow-xl border border-brand-gold/10 bg-black">
          <!-- 视频加载失败时显示占位 -->
          <div v-if="videoError" class="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-brand-dark via-[#2d1111] to-brand-dark text-white">
            <span class="text-5xl mb-3">🎥</span>
            <p class="text-white/80 font-bold text-lg">现场实拍视频</p>
            <p class="text-white/40 text-sm mt-1">出摊排队 · 日销火爆</p>
          </div>
          <video
            v-else
            ref="videoRef"
            class="w-full aspect-video object-cover"
            :src="videoSrc"
            controls
            muted
            loop
            playsinline
            preload="metadata"
            @error="onVideoError"
          >
            您的浏览器不支持视频播放
          </video>
        </div>
        <p class="text-center text-sm text-brand-gray mt-3">▲ 实地拍摄 · 真实经营场景</p>
      </div>

      <!-- 图片展示区 -->
      <div class="max-w-5xl mx-auto">
        <h3 class="text-lg md:text-xl font-display font-bold text-brand-dark text-center mb-5">
          经营现场实拍
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div
            v-for="(img, idx) in sceneImages"
            :key="idx"
            class="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-brand-cream"
            @click="openLightbox(idx)"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="img.src"
                :alt="img.title"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                @error="onImgError($event)"
              />
            </div>
            <!-- 图片标题 -->
            <div class="p-2.5 text-center">
              <p class="text-sm font-bold text-brand-dark">{{ img.title }}</p>
              <p class="text-xs text-brand-gray mt-0.5">{{ img.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox 弹窗 -->
      <Teleport to="body">
        <Transition name="fade">
          <div
            v-if="lightboxOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            @click="closeLightbox"
          >
            <!-- 关闭按钮 -->
            <button
              class="absolute top-4 right-4 text-white/60 hover:text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
              @click="closeLightbox"
            >✕</button>

            <!-- 上一张 -->
            <button
              v-if="sceneImages.length > 1"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
              @click.stop="prevImage"
            >‹</button>

            <!-- 大图 -->
            <img
              :src="sceneImages[currentImage]?.src"
              :alt="sceneImages[currentImage]?.title"
              class="max-w-full max-h-[85vh] object-contain rounded-lg select-none"
              @click.stop
            />

            <!-- 下一张 -->
            <button
              v-if="sceneImages.length > 1"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
              @click.stop="nextImage"
            >›</button>

            <!-- 底部信息 -->
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <p class="font-bold text-lg">{{ sceneImages[currentImage]?.title }}</p>
              <p class="text-sm text-white/60">{{ sceneImages[currentImage]?.desc }}</p>
              <p class="text-xs text-white/40 mt-1">{{ currentImage + 1 }} / {{ sceneImages.length }}</p>
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const videoRef = ref(null)
const videoError = ref(false)
const videoSrc = '/videos/scene-crowd.mp4'
const lightboxOpen = ref(false)
const currentImage = ref(0)

// 场景图片 — 素材放到 public/images/scene/ 下即可生效
const sceneImages = ref([
  { src: '/images/scene/scene-1.jpg', title: '出摊即排队', desc: '每日出摊客流不断' },
  { src: '/images/scene/scene-2.jpg', title: '人气火爆', desc: '街坊邻里口碑相传' },
  { src: '/images/scene/scene-3.jpg', title: '回头客不断', desc: '品质好自然客源稳定' },
  { src: '/images/scene/scene-4.jpg', title: '产品丰富多样', desc: '酱牛肉等产品现场展示' },
])

function onVideoError() {
  videoError.value = true
}

function onImgError(e) {
  // 图片加载失败时隐藏该图，保留卡片框架
  e.target.style.opacity = '0'
}

function openLightbox(idx) {
  currentImage.value = idx
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  currentImage.value = currentImage.value > 0 ? currentImage.value - 1 : sceneImages.value.length - 1
}

function nextImage() {
  currentImage.value = currentImage.value < sceneImages.value.length - 1 ? currentImage.value + 1 : 0
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
