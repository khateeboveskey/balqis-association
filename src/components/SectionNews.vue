<script setup>
import ArticleCard from './ArticleCard.vue';
import SectionHeading from './SectionHeading.vue';

import { news } from '@/database/news.json';
</script>

<template>
  <section v-if="news.length > 0" class="max-w-screen-xl px-4 mx-auto">
    <SectionHeading>الأخبار</SectionHeading>
    <div class="grid grid-cols-1 text-center gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mb-10">
      <ArticleCard :articles="news" />
    </div>
  </section>
</template>
