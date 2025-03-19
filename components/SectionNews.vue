<script setup>
import { news } from '@/database/news.json';
</script>

<template>
  <section v-if="news.length > 0" class="w-10/12 mx-auto">
    <SectionHeading>الأخبار</SectionHeading>
    <div class="grid grid-cols-1 text-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
      <ArticleCard :articles="news" />
    </div>
  </section>
</template>
