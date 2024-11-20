<script setup>
import SectionHeading from './SectionHeading.vue';
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    image: './src/assets/imgs/1.jpg',
    location: 'عدن',
    title: 'مشروع نزرع أرضاً نجني ثمراً',
    description:
      'قامت الجمعية بإضافة دائرة جديدة في الهيكل التنظيمي تخص المجال الزراعي حيث ستعمل الجمعية جاهدة للاهتمام بالمجال الزراعي والإنتاج الحيواني وكذلك مجل التصنيع الغذائي.'
  }
]);
</script>

<template>
  <div class="max-w-screen-xl px-4 mx-auto">
    <SectionHeading>المشاريع السابقة</SectionHeading>
    <div class="grid grid-cols-1 text-center gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="project in projects" :key="project.id">
        <img :src="project.image" class="w-full h-auto rounded-t-lg" :alt="project.title" />
        <div class="rounded-b-lg space-y-4 bg-primary-50 p-5">
          <span
            class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"
          >
            {{ project.location }}
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900">
            {{ project.title }}
          </h3>
          <p class="font-normal text-gray-500">
            {{ project.description }}
          </p>
          <a
            href="#"
            title=""
            class="duration-150 transition-all text-white bg-primary-600 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-primary-700 :ring-primary-800"
            role="button"
          >
            المزيد
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
