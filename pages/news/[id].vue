<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
});

const { data: otherNews } = await useAsyncData('news', () => {
  return queryCollection('content')
    .where('path', '<>', route.path)
    .limit(3)
    .all()
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
})
</script>

<template>
  <article class="w-full max-w-3xl mx-auto p-4 sm:px-6 lg:px-8">
    <div class="text-gray-600 mb-4">{{ new Date(post?.date).toLocaleDateString() }}</div>
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-800 hover:text-gray-900">{{ post?.title }}</h1>
    <p v-if="post?.description" class="text-gray-600 mb-4 sm:mb-8">{{ post.description }}</p>
    <NuxtImg class="rounded-lg mb-6 sm:mb-10 w-full h-auto object-cover" placeholder format="webp" quality="80" loading="lazy" sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 768px" :alt="post?.title" :src="post?.image" />
    <ContentRenderer class="text-base sm:text-lg prose w-full" v-if="post" :value="post" />
    <div v-else class="text-red-600 text-center py-4 sm:py-8">عذراً، حصل خطأ</div>

    <!-- Other News Section -->
  </article>
  <section v-if="otherNews.length > 0" class="w-10/12 mx-auto">
    <SectionHeading>المزيد من الأخبار</SectionHeading>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <PostCard v-for="(news, index) in otherNews" :post="news" :key="index" />
    </div>
    <div class="text-center">
      <NuxtLink class="underline text-primary-600 hover:opacity-80" to="/news">المزيد من الأخبار</NuxtLink>
    </div>
  </section>
</template>

<style>
@reference 'assets/css/main.css';

.prose {
  @apply w-full;

  a {
    @apply text-primary-600 underline hover:opacity-80;
  }

  h1 {
    @apply text-2xl sm:text-3xl md:text-4xl mb-4;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold text-lg sm:text-xl mt-4 sm:mt-8;
  }

  h2 {
    @apply text-xl sm:text-2xl;
  }

  h3,
  h4,
  h5,
  h6 {
    @apply text-lg sm:text-xl;
  }

  code {
    @apply text-primary-600 selection:text-white break-words;
  }

  pre {
    @apply bg-[#23272e] p-2 sm:p-4 my-2 sm:my-4 block rounded-lg overflow-x-scroll selection:bg-[#191c21] w-full;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ul {
    @apply list-disc ms-4 sm:ms-6 w-full;
  }

  img {
    @apply mx-auto rounded-lg w-full max-w-full h-auto;
  }
}
</style>