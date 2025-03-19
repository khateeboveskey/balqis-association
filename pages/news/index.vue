<script setup lang="ts">
const { data: posts } = await useAsyncData('news', () => queryCollection('content').all())

useHead({
  title: 'الأخبار'
})
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <SectionHeading class="mb-4 sm:mb-6 lg:mb-8">الأخبار</SectionHeading>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <PostCard v-for="(post, index) in posts" :post :key="index" />
    </div>
  </div>
</template>
