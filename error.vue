
<template>
  <NuxtLayout>
    <div class="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-600 mb-4">{{ error.statusCode }}</h1>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">عذراً، حدث خطأ ما</h2>
        <p class="text-gray-600 mb-8">
          {{ error.statusCode === 404 ? 'الصفحة المطلوبة غير موجودة' : 'حدث خطأ في الخادم' }}
        </p>
        <NuxtLink
          to="/"
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          العودة إلى الصفحة الرئيسية
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script>
