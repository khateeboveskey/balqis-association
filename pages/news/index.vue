<script setup lang="ts">
const { data: posts } = await useAsyncData('news', () => queryCollection('content').all())
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <SectionHeading class="mb-4 sm:mb-6 lg:mb-8">الأخبار</SectionHeading>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <NuxtLink :to="post.path" class="flex flex-col h-full">
          <div class="aspect-video bg-gray-100 relative">
            <NuxtImg :src="post.image" placeholder class="object-cover w-full h-full" loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
          <div class="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
            <span class="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{{ new Date(post.date).toLocaleDateString('en-GB') }}</span>
            <h2 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary-600">{{ post.title }}</h2>
            <p class="text-sm sm:text-base text-gray-600 line-clamp-3 mb-3 sm:mb-4">{{ post.description }}</p>
            <span class="text-sm sm:text-base text-primary-600 font-medium mt-auto text-end">اقرأ المزيد ←</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
