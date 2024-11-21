<script setup>
defineProps({
  articles: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div v-for="article in articles" :key="article.id">
    <img :src="article.image" class="w-full h-auto rounded-t-lg" :alt="article.title" />
    <div class="rounded-b-lg space-y-4 bg-primary-50 p-5 border border-primary-300">
      <span
        class="bg-primary-100 text-primary-800 border border-primary-500 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded"
      >
        {{ article.tag }}
      </span>
      <h3 class="text-2xl font-bold leading-tight text-gray-900">
        {{ article.title }}
      </h3>
      <p class="font-normal text-gray-500">
        {{ article.description }}
      </p>
      <a
        v-if="article.page"
        href="#"
        title=""
        class="duration-150 transition-all text-white bg-primary-600 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-primary-700 :ring-primary-800"
        role="button"
      >
        المزيد
      </a>
    </div>
  </div>
</template>
