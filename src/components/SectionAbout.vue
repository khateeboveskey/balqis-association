<script setup>
import SectionHeading from './SectionHeading.vue';

const aboutCards = [
  {
    icon: 'fa-solid fa-bullseye',
    title: 'أهدافنا',
    description:
      'تهدف الجمعية إلى خلق فرص عمل مستدامة، رفع مستوى الوعي والتعليم، تحسين الأداء المؤسسي، تشكيل شراكات متعددة، وتقديم خدمات ذات جودة للمجتمع المحلي.'
  },
  {
    icon: 'fa-regular fa-eye',
    title: 'رؤيتنا',
    description:
      'أن تكون جمعية بلقيس هي الجمعية الرائدة في مجال تنمية وتدريب وتأهيل المرأة وحماية الطفل وبناء السلام المجتمعي بحلول عام 2025م في مديريــة طور الباحة'
  },
  {
    icon: 'fa-regular fa-envelope',
    title: 'رسالتنا',
    description:
      'جمعية بلقيس للمرأة والطفل جمعية نسوية طوعية تنموية، لا تهدف للربح تعمل في مجال التنمية المستدامة للوصول الى أعلى معدلات النماء في مديرية طور الباحة'
  }
];
</script>

<template>
  <section class="w-10/12 mx-auto">
    <SectionHeading>عن الجمعية</SectionHeading>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div
        v-for="card in aboutCards"
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
