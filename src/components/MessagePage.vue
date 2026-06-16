<template>
  <div class="min-h-[80vh] py-12 md:py-16 bg-gradient-to-b from-brand-silk to-white flex items-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 w-full">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">在线留言咨询</h2>
        <p class="text-brand-gray text-sm">欢迎咨询加盟合作，我们将尽快与您联系</p>
        <div class="w-12 h-0.5 bg-brand-red mx-auto mt-4"></div>
      </div>

      <!-- 双栏 -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- 左侧：品牌文案 -->
        <div class="bg-gradient-to-br from-brand-cream-dark to-brand-silk rounded-2xl p-6 md:p-8 flex flex-col justify-center border border-brand-gold/10">
          <h3 class="text-lg md:text-xl font-display font-bold text-brand-dark mb-3 leading-snug">云声健五香牛肉坊<br/>全国招商加盟</h3>
          <p class="text-brand-gray text-sm leading-relaxed mb-4">如果您对我们的品牌与产品感兴趣，欢迎在线留言。招商经理将在第一时间与您取得联系，为您提供详细加盟资料与政策解读。</p>
          <div class="space-y-2 text-sm text-brand-dark">
            <div class="flex items-start gap-2"><span class="text-brand-red font-bold mt-0.5">✓</span> 总部技术全托管，零基础无忧起步</div>
            <div class="flex items-start gap-2"><span class="text-brand-red font-bold mt-0.5">✓</span> 区域独家保护，先到先锁定</div>
            <div class="flex items-start gap-2"><span class="text-brand-red font-bold mt-0.5">✓</span> 项目经理 24 小时内电联回访</div>
          </div>
        </div>

        <!-- 右侧：精简表单 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-brand-gold/10">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-brand-dark mb-1.5">您的姓名 <span class="text-brand-red">*</span></label>
              <input v-model="form.name" type="text" required
                     placeholder="请输入您的姓名"
                     class="w-full px-4 py-3 rounded-lg bg-brand-silk border border-brand-gold/20
                            focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red/40
                            transition-all duration-300 text-sm placeholder:text-gray-300" />
            </div>
            <div>
              <label class="block text-sm font-medium text-brand-dark mb-1.5">联系电话 <span class="text-brand-red">*</span></label>
              <input v-model="form.phone" type="tel" required
                     placeholder="请输入您的手机号码"
                     class="w-full px-4 py-3 rounded-lg bg-brand-silk border border-brand-gold/20
                            focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red/40
                            transition-all duration-300 text-sm placeholder:text-gray-300" />
            </div>
            <div>
              <label class="block text-sm font-medium text-brand-dark mb-1.5">意向加盟地区</label>
              <input v-model="form.city" type="text"
                     placeholder="请输入您希望加盟的城市"
                     class="w-full px-4 py-3 rounded-lg bg-brand-silk border border-brand-gold/20
                            focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red/40
                            transition-all duration-300 text-sm placeholder:text-gray-300" />
            </div>

            <button type="submit" :disabled="sending"
                    class="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 rounded-lg
                           transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]
                           disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide">
              <span v-if="!sending">立即提交</span>
              <span v-else class="inline-flex items-center gap-2">
                <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                提交中...
              </span>
            </button>
          </form>

          <Transition name="fade">
            <div v-if="resultMsg"
                 class="mt-4 p-4 rounded-lg text-center text-sm font-medium"
                 :class="resultOk ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'">
              {{ resultMsg }}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const sending = ref(false)
const resultMsg = ref('')
const resultOk = ref(false)

const form = reactive({ name: '', phone: '', city: '', message: '' })

async function handleSubmit() {
  if (!form.name || !form.phone) return
  sending.value = true
  resultMsg.value = ''
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    const data = await res.json()
    resultOk.value = data.success
    resultMsg.value = data.message
    if (data.success) {
      form.name = ''; form.phone = ''; form.city = ''; form.message = ''
    }
  } catch (err) {
    resultOk.value = false
    resultMsg.value = '提交失败，请稍后重试'
  } finally {
    sending.value = false
    setTimeout(() => { resultMsg.value = '' }, 5000)
  }
}
</script>

<style scoped>
.fade-enter-active { transition: all 0.3s ease-out; }
.fade-leave-active { transition: all 0.2s ease-in; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
