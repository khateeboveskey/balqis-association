<script setup>
const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('content').order('date', 'DESC').limit(10).all()
})
</script>

<template>
  <section v-if="posts.length > 0" class="w-10/12 mx-auto">
    <SectionHeading>الأخبار</SectionHeading>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <PostCard v-for="(post, index) in posts" :post :key="index" />
    </div>
    <div class="text-center mt-10">
      <NuxtLink class="underline text-primary-600 hover:opacity-80" to="/news">المزيد من الأخبار</NuxtLink>
    </div>
  </section>
</template>
