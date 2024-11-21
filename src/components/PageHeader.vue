<script setup>
import { RouterLink } from 'vue-router';
import routes from '@/router/routes';
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 md:mx-20 p-4">
        <router-link to="/" class="flex items-center space-x-4 rtl:space-x-reverse">
          <img src="/logo.png" class="h-16 self-center" alt="شعار جمعية بلقيس" />
          <span class="self-center text-2xl whitespace-nowrap font-bold hidden lg:block"
            >جمعية بلقيس للمرأة والطفل</span
          >
        </router-link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">افتح القائمة الرئيسية</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
          >
            <li v-for="(route, index) in routes" :key="index">
              <router-link
                active-class="font-bold text-primary-800"
                :to="route.path"
                class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-800 md:p-0"
                >{{ route.displayName }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
