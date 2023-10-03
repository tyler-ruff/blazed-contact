<script setup lang="ts">
    import { ref } from 'vue';

    useHead({
        title: "Sales Inquiry",
    })

    const name = ref('');
    const email = ref('');
    const message = ref('');

    const sendSalesMessage = async() => {
      const emailSent = await $fetch("/api/contact/sales", {
        method: "post",
        body: {
          fieldName: name.value,
          email: email.value,
          message: message.value
        }
      }).then(() => {
        window.location.href = "/success";
      });
    }
</script>

<template>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">
            Sales Inquiry
        </h1>
    
        <p class="mt-4 text-gray-500">
          Interested in purchasing one of our products or services? 
          We can tailor a custom solution for your business.
        </p>
      </div>
    
      <form @submit.prevent="sendSalesMessage" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label for="field-name" class="sr-only">Name</label>
    
          <div class="relative">
            <input
              required
              type="text"
              id="field-name"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter name"
              v-model="name"
            />
          </div>
        </div>

        <div>
          <label for="field-email" class="sr-only">Email</label>
    
          <div class="relative">
            <input
              required
              type="email"
              id="field-email"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              v-model="email"
            />
    
            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
    
        <div>
          <label for="message" class="sr-only">Message</label>
          <div class="relative">
            <textarea id="message" v-model="message" required placeholder="Enter your message" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"></textarea>
          </div>
        </div>

        <div>
          <recaptcha />
        </div>
    
        <div class="flex items-center justify-between">
          <button type="submit" class="inline-block rounded-lg bg-blue-800 hover:bg-blue-900 active:bg-blue-600 px-5 py-3 text-sm font-medium text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  </template>
  <style scoped>
    textarea{
        min-height:100px;
        max-height:300px;
    }
  </style>