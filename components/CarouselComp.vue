<template>
  <section id="indicators-carousel" class="relative w-10/12 mx-auto" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div v-for="(slide, index) in slides" :key="index" class="hidden duration-700 ease-in-out" data-carousel-item>
        <NuxtImg quality="50" format="webp" loading="lazy" :src="slide.imageUrl" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="slide.heading" />
        <div class="carousel-caption text-center h-full grid place-items-center relative bg-black/75">
          <div class="flex flex-col gap-2 items-center">
            <h3 class="inline-block translate-x-0 font-bold bg-primary-800 px-2 py-1 rounded-md text-white">
              {{ slide.heading }}
            </h3>
            <p class="inline-block translate-x-0 px-2 py-1 rounded-md text-white w-3/4">
              {{ slide.paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
      <button v-for="(slide, index) in slides" :key="index" type="button" class="w-3 h-3 rounded-full" :aria-current="index + 1" :aria-label="`Slide ${index + 1}`" :data-carousel-slide-to="index"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">السابق</span>
      </span>
    </button>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">التالي</span>
      </span>
    </button>
  </section>
</template>

<script setup>
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})

const slides = [
  {
    imageUrl: '/imgs/1.jpg',
    heading: 'جمعية بلقيس للمرأة والطفل',
    paragraph:
      'جمعية بلقيس جمعية نسوية تأسست في 26 ابريل 2005م تعمل في مجال التنمية المستدامة للمجتمع وخاصة شريحة النساء والأطفال'
  },
  {
    imageUrl: '/imgs/2.jpg',
    heading: 'المرأة اساس المجتمع',
    paragraph:
      'جمعية بلقيس جمعية نسوية تأسست في 26 ابريل 2005م تعمل في مجال التنمية المستدامة للمجتمع وخاصة شريحة النساء والأطفال'
  },
  {
    imageUrl: '/imgs/3.jpg',
    heading: 'بالوعي ترقى الامة',
    paragraph:
      'جمعية بلقيس جمعية نسوية تأسست في 26 ابريل 2005م تعمل في مجال التنمية المستدامة للمجتمع وخاصة شريحة النساء والأطفال'
  },
  {
    imageUrl: '/imgs/4.jpg',
    heading: 'المرأة اساس المجتمع',
    paragraph:
      'جمعية بلقيس جمعية نسوية تأسست في 26 ابريل 2005م تعمل في مجال التنمية المستدامة للمجتمع وخاصة شريحة النساء والأطفال'
  }
];
</script>
