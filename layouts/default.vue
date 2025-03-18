<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>

<script setup lang="ts">
useHead({
  title: 'الرئيسية',
  meta: [
    { name: 'author', content: 'جمعية بلقيس للمرأة والطفل' },
    { name: 'description', content: 'جمعية بلقيس للمرأة والطفل جمعية نسوية طوعية تنموية، لا تهدف للربح تعمل في مجال التنمية المستدامة للوصول الى أعلى معدلات النماء في مديرية طور الباحة' },
    { name: 'keywords', content: 'جمعية, بلقيس, مرأة, طفل, جمعية نسوية, جمعية تنموية, طور الباحة' }
  ],
  link: [
    { rel: 'icon', href: 'logo.ico' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', integrity: 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }
  ],
  titleTemplate: '%s | جمعية بلقيس للمرأة والطفل',
});</script>