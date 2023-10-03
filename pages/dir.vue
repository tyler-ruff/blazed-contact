<script setup lang="ts">
  import { contactEmails, websitesDirectory, contactTelephones } from '@/config/contact';
  useHead({
      title: "Directory"
  });
  const emails = Object.keys(contactEmails);
  const telephones = Object.keys(contactTelephones);
  const websites = Object.keys(websitesDirectory);
</script>
<template>
    <h2 class="text-2xl py-5 text-center">
      Directory
    </h2>
    <div class="max-w-3xl relative mx-auto py-5 px-5">
      <h2 class="text-xl py-5">
        Email Addresses
      </h2>
      <dl class="-my-3 divide-y divide-gray-100 text-sm">
        <div v-for="key in emails" class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900 capitalize">
            {{ key }}
          </dt>
          <dd class="text-gray-700 sm:col-span-2">
            <nuxt-link class="text-blue-500 hover:underline active:text-blue-600" v-bind:href="`mailto:${contactEmails[key as keyof typeof contactEmails]}`">
              {{ contactEmails[key as keyof typeof contactEmails] }}
            </nuxt-link>
          </dd>
        </div>
      </dl>
      <br />
      <h2 class="text-xl py-5">
        Telephone Numbers
      </h2>
      <dl class="-my-3 divide-y divide-gray-100 text-sm">
        <div v-for="key in telephones" class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900 capitalize">
            {{ key }}
          </dt>
          <dd class="text-gray-700 sm:col-span-2">
            <nuxt-link class="text-blue-500 hover:underline active:text-blue-600" v-bind:href="`tel:${contactTelephones[key as keyof typeof contactTelephones]}`">
              {{ formatPhoneNumber(contactTelephones[key as keyof typeof contactTelephones]) }}
            </nuxt-link>
          </dd>
        </div>
        </dl>
        <br />
        <h2 class="text-xl py-5">
          Websites
        </h2>
        <dl class="-my-3 divide-y divide-gray-100 text-sm">
          <div v-for="key in websites" class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt class="font-medium text-gray-900 capitalize">
            {{ key }}
          </dt>
          <dd class="text-gray-700 sm:col-span-2">
            <nuxt-link target="_blank" class="text-blue-500 hover:underline active:text-blue-600" v-bind:href="websitesDirectory[key as keyof typeof websitesDirectory]">
              {{ websitesDirectory[key as keyof typeof websitesDirectory] }}
            </nuxt-link>
          </dd>
        </div>
      </dl>
    </div>
  </template>