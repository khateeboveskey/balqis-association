<script setup>
import PageHeader from './components/PageHeader.vue';

import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { initCarousels } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initCarousels();
});
</script>

<template>
  <div>
    <PageHeader />
    <router-view />
  </div>
</template>
