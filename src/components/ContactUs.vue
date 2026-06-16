<template>
  <div class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2 class="section-title">联系我们</h2>
        <p class="text-brand-gold font-display text-lg tracking-widest">—— 期待与您的合作 ——</p>
        <div class="w-20 h-1 bg-brand-red mx-auto mt-4"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- 左侧：联系信息 -->
        <div class="space-y-8">
          <h3 class="text-2xl font-display font-bold text-brand-dark">云声健五香牛肉坊</h3>
          <p class="text-brand-gray leading-relaxed">
            如果您对我们的品牌感兴趣，欢迎随时联系我们。我们将为您提供详细的加盟资料和专业的咨询服务。
          </p>

          <!-- 联系信息卡片 -->
          <div class="space-y-4">
            <div class="flex items-center gap-4 p-4 rounded-xl bg-brand-cream hover:bg-white hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-brand-gray mb-0.5">加盟咨询热线</p>
                <p class="text-lg font-bold text-brand-dark">400-XXX-XXXX</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 rounded-xl bg-brand-cream hover:bg-white hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-brand-gray mb-0.5">电子邮箱</p>
                <p class="text-lg font-bold text-brand-dark">contact@yunshengjian.com</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4 rounded-xl bg-brand-cream hover:bg-white hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-brand-gray mb-0.5">总部地址</p>
                <p class="text-lg font-bold text-brand-dark">（地址待填写）</p>
              </div>
            </div>
          </div>

          <!-- 微信二维码 -->
          <div class="text-center p-6 rounded-2xl bg-brand-cream">
            <div class="w-40 h-40 mx-auto mb-3 bg-white rounded-xl shadow-inner flex items-center justify-center border-2 border-dashed border-brand-gold/30">
              <div class="text-center">
                <svg class="w-10 h-10 text-brand-gold/50 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v1m6 11h2m-6 0h-2.48a2.5 2.5 0 00-4.52 0H5m14-4h2M7 8h10M7 12h10" />
                </svg>
                <p class="text-xs text-brand-gray">微信二维码</p>
                <p class="text-[10px] text-brand-gray/50">（后期替换为真实二维码）</p>
              </div>
            </div>
            <p class="text-sm text-brand-gray">微信扫码咨询加盟详情</p>
          </div>
        </div>

        <!-- 右侧：留言表单 -->
        <div class="bg-brand-cream rounded-2xl p-8 shadow-lg">
          <h3 class="text-xl font-bold text-brand-dark mb-6 text-center">在线留言</h3>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-brand-dark mb-2">姓名</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="请输入您的姓名"
                class="w-full px-4 py-3 rounded-xl border border-brand-gold/30 bg-white
                       focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red
                       transition-all duration-300 placeholder:text-gray-300"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-brand-dark mb-2">电话 <span class="text-brand-red">*</span></label>
              <input
                v-model="form.phone"
                type="tel"
                required
                placeholder="请输入您的手机号码"
                class="w-full px-4 py-3 rounded-xl border border-brand-gold/30 bg-white
                       focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red
                       transition-all duration-300 placeholder:text-gray-300"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-brand-dark mb-2">所在城市</label>
              <input
                v-model="form.city"
                type="text"
                placeholder="请输入您所在的城市"
                class="w-full px-4 py-3 rounded-xl border border-brand-gold/30 bg-white
                       focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red
                       transition-all duration-300 placeholder:text-gray-300"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-brand-dark mb-2">留言内容</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="请简要描述您的需求或想了解的内容……"
                class="w-full px-4 py-3 rounded-xl border border-brand-gold/30 bg-white resize-none
                       focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red
                       transition-all duration-300 placeholder:text-gray-300"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-xl
                     transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] text-lg tracking-wide">
              立即提交
            </button>
          </form>

          <!-- 提交成功提示 -->
          <Transition name="fade">
            <div v-if="submitted"
                 class="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-center">
              <p class="text-green-700 font-medium">✅ 提交成功！我们会尽快与您联系</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  phone: '',
  city: '',
  message: '',
})

function handleSubmit() {
  if (!form.phone) return

  // 前端展示用，无后端提交
  console.log('表单提交（前端展示）：', { ...form })
  submitted.value = true

  // 3秒后隐藏提示
  setTimeout(() => {
    submitted.value = false
  }, 3000)

  // 清空表单
  form.name = ''
  form.phone = ''
  form.city = ''
  form.message = ''
}
</script>

<style scoped>
.fade-enter-active { transition: all 0.3s ease-out; }
.fade-leave-active { transition: all 0.2s ease-in; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
