<script setup>
    import { reactive } from 'vue';
    import { siteConfig } from '@/config/site';
    import { navMenu } from '@/config/menu';
    const route = useRoute();
    const navbar = reactive({
      burgerExpanded: false,
      arr: ['foo', 'bar']
    })
    const toggleBurger = async() => {
      if(navbar.burgerExpanded == true){
        navbar.burgerExpanded = false;
        document.body.style.overflowY = "scroll";
      } else {
        navbar.burgerExpanded = true;
        document.body.style.overflowY = "hidden";
      }
    };
    watch(
      () => route.path,
      () => {
        navbar.burgerExpanded = false;
        document.body.style.overflowY = "scroll";
      }
    );
    if (process.client) {
      window.addEventListener("resize", (event) => {
            navbar.burgerExpanded = false;
            document.body.style.overflowY = "scroll";
      });
    }
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
                <button @click.prevent="toggleBurger" class="rounded bg-gray-100 p-2 pt-1 text-gray-600 transition hover:text-gray-600/75">
                  <Icon v-if="!navbar.burgerExpanded" name="charm:menu-hamburger" color="black" class="w-5 h-5" />
                  <Icon v-if="navbar.burgerExpanded" name="carbon:close-large" color="black" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="navbar.burgerExpanded" class="md:hidden h-screen">
        <ul class="block items-center space-y-8 px-5 py-5 gap-6 text-sm">
          <li v-for="(item, index) in navMenu.nav" :key="index">
              <nuxt-link v-bind:to="item.href" class="transition hover:text-gray-500/75" :style="{'color': route.path === item.href ? '#00219a' : '#858585'}">
                  {{ item.label }}
              </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
</template>
