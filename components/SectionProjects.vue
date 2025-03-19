<script setup>
import { projects } from '@/database/projects.json';
</script>

<template>
  <section v-if="projects.length > 0" class="w-10/12 mx-auto">
    <SectionHeading>المشاريع السابقة</SectionHeading>
    <div class="grid grid-cols-1 text-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
      <ArticleCard :articles="projects" />
    </div>
  </section>
</template>
