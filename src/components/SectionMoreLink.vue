<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  href: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="text-center mx-auto my-10">
    <a :href="props.href" class="text-primary-800 hover:underline"><slot /></a>
  </div>
</template>
