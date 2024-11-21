<script setup>
import PageHeader from './components/PageHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <PageHeader />
    <router-view />
  </div>
</template>
