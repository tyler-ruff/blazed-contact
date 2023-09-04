<script setup lang="ts">
    useHead({
        title: "Home"
    })
</script>
<template>
    <div class="bg-gradient-to-t from-gray-50 via-gray-100 to-gray-200">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Get in touch with
            <strong class="font-extrabold text-red-700 sm:block">
              Blazed Labs.
            </strong>
          </h1>
    
          <p class="mt-4 sm:text-xl/relaxed">
            We are always happy to read customer feedback, assist with support tickets, or respond to sales inquiry.
          </p>
    
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring ring-red-300 active:bg-red-500 sm:w-auto" href="/support">
              Get Support
            </a>
    
            <a class="block w-full rounded px-12 py-3 text-sm font-medium bg-white text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring ring-red-300 active:text-red-500 sm:w-auto" href="/sales">
              Sales Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>