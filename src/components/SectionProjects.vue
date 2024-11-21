<script setup>
import SectionHeading from './SectionHeading.vue';
import ArticleCard from './ArticleCard.vue';
import { projects } from '@/database/projects.json';
</script>

<template>
  <section v-if="projects.length > 0" class="max-w-screen-xl px-4 mx-auto">
    <SectionHeading>المشاريع السابقة</SectionHeading>
    <div class="grid grid-cols-1 text-center gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mb-10">
      <ArticleCard :articles="projects" />
    </div>
  </section>
</template>
