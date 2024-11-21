<template>
  <footer class="p-4 sm:p-6 pt-10">
    <div class="mx-auto max-w-screen-xl">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <RouterLink to="/" class="flex items-center space-x-4 rtl:space-x-reverse -translate-y-5">
            <img src="@/assets/imgs/logo.png" class="h-16 self-center" alt="شعار جمعية بلقيس" />
            <span class="self-center text-2xl font-bold">جمعية بلقيس للمرأة والطفل</span>
          </RouterLink>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-1">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">روابط ذات صلة</h2>
            <ul class="text-gray-600">
              <li v-for="link in relatedLinks" :key="link.url" class="mb-4">
                <a
                  target="_blank"
                  :href="link.url"
                  class="hover:underline hover:text-primary-800"
                  >{{ link.text }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500 sm:text-center">{{ currentYear }}</span>
        <div class="flex gap-5 sm:justify-center sm:mt-0">
          <a
            v-for="social in socialMedia"
            :key="social.url"
            target="_blank"
            :href="social.url"
            class="text-gray-500 hover:text-gray-900"
          >
            <i :class="social.icon" class="w-5 h-5"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { relatedLinks, socialMedia } from '@/database/links.json';

const currentYear = computed(() => new Date().getFullYear());
</script>
