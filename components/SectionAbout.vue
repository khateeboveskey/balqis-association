<script setup>
import { cards } from '@/database/cards.json';
</script>

<template>
  <section class="w-10/12 mx-auto">
    <SectionHeading>عن الجمعية</SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div
        v-for="card in cards"
        :key="card.title"
        class="p-8 bg-primary-50 rounded-lg border border-primary-300"
      >
        <div class="text-center mb-3">
          <i :class="[card.icon, 'fa-3x', 'text-primary-800']"></i>
        </div>
        <h3 class="text-center mb-4 font-bold text-xl text-primary-800">{{ card.title }}</h3>
        <p class="text-center">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>
