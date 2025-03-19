<template>
  <footer class="pb-5 pt-14 mt-20 bg-neutral-900 text-white w-full px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <NuxtLink to="/" class="flex items-center space-x-4 rtl:space-x-reverse -translate-y-5">
            <NuxtImg quality="50" format="webp" src="/logo.png" class="h-16 self-center" alt="شعار جمعية بلقيس" />
            <span class="self-center text-2xl font-bold">جمعية بلقيس للمرأة والطفل</span>
          </NuxtLink>
        </div>
        <div :class="['grid grid-cols-1 gap-8', `sm:grid-cols-${Object.keys(footerLinks).length}`]">
          <div v-for="(footerList, title) in footerLinks" :key="title">
            <h2 class="mb-6 text-sm font-semibold uppercase">
              {{ title }}
            </h2>
            <ul class="text-neutral-400">
              <li v-for="link in footerList" :key="link.url" class="mb-4">
                <a target="_blank" :href="link.url" class="hover:underline hover:text-primary-800">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-neutral-700 sm:mx-auto lg:my-8" />
      <div class="flex items-center justify-between">
        <span class="text-sm text-neutral-500 sm:text-center">{{ currentYear }}</span>
        <div class="flex gap-5 sm:justify-center sm:mt-0">
          <a v-for="social in socialMedia" :key="social.url" target="_blank" :href="social.url" :aria-label="social.ariaLabel" class="text-neutral-500 hover:text-neutral-600">
            <i :class="social.icon" class="w-5 h-5"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerLinks, socialMedia } from '@/database/links.json';
const currentYear = computed(() => new Date().getFullYear());
</script>
