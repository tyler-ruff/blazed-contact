<script setup>
    import { siteConfig } from '@/config/site';
    import { navMenu } from '@/config/menu';

    const route = useRoute();
</script>
<template>
    <nav aria-label="Main Menu" v-bind:id="navMenu._id" class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block hover:opacity-75 pt-1" v-bind:title="siteConfig.name" href="/">
              <span class="sr-only">Home</span>
              <Logo />
            </a>
          </div>
          <div class="md:flex md:items-center md:gap-12">
            <div class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li v-for="(item, index) in navMenu.nav" :key="index">
                    <nuxt-link v-bind:to="item.href" class="transition hover:text-gray-500/75" :style="{'color': route.path === item.href ? '#00219a' : '#858585'}">
                        {{ item.label }}
                    </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="flex items-center gap-4">
              <div v-if="navMenu.cta !== undefined" class="sm:flex sm:gap-4">
                <a v-bind:href="navMenu.cta.href" class="rounded-md bg-blue-800 hover:bg-blue-900 active:bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                  {{ navMenu.cta.label }}
                </a>
              </div>
              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
