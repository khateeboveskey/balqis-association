<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <NuxtLink class="group flex flex-col h-full" :to="post.path">
    <div class="overflow-hidden rounded-t-lg">
      <NuxtImg placeholder quality="50" format="webp" loading="lazy" :src="post.image" class="w-full h-auto group-hover:scale-110 duration-300 transition-transform" :alt="post.title" />
    </div>
    <div class="rounded-b-lg space-y-4 bg-primary-50 p-5 border border-primary-300 flex-grow flex flex-col">
      <div class="flex justify-between items-center">
        <span v-if="post.tag" class="bg-primary-100 text-primary-800 border border-primary-500 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded">
          {{ post.tag }}
        </span>
        <span class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString('en-GB') }}</span>
      </div>
      <h3 class="text-2xl font-bold leading-tight text-gray-900 line-clamp-2 group-hover:text-primary-700 duration-300 transition-colors">
        {{ post.title }}
      </h3>
      <p class="font-normal text-gray-500 line-clamp-3">
        {{ post.description }}
      </p>
    </div>
  </NuxtLink>
</template>
