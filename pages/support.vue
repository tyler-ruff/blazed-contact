<script setup lang="ts">
    import { ref } from 'vue';

    import { brandConfig } from '~/config/site';
    import { formatPhoneNumber } from '~/utils/format';

    useHead({
        title: "Support Ticket"
    })

    const firstName = ref('');
    const lastName = ref('');
    const company = ref('');
    const email = ref('');
    const phoneNumber = ref('');
    const message = ref('');

    const sendSupportMessage = async() => {
        /*
        const emailSent = await fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            subject: `New Support Ticket from: ${firstName.value}`,
            emailBody: `Support Ticket: \n
            Replyto: ${email.value} \n 
            Name: ${firstName.value} ${lastName.value} \n
            Company: ${company.value} \n
            Phone: ${phoneNumber.value} \n
            ---------------------------- \n
            ${message.value}
            `
            }),
            
        }).then((data) => {
            console.log(data);
        });
        */
       console.log("Todo: add contact form action");
    };
</script>
<template>
    <div class="bg-gray-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <h1 class="text-3xl py-3">
                Get Support
            </h1>
            <p class="max-w-xl text-lg">
              Need help with Blazed software or a Blazed managed system?
              We have agents standing by, ready to solve your support tickets.

            </p>
            <div class="mt-8 select-none">
              <p class="text-2xl">
                <abbr title="Main Telephone" class="inline-flex mr-2">
                    Tel:
                </abbr>
                <a v-bind:href="`tel:${brandConfig.telephone}`" title="Call or Text Us" class="font-bold text-blue-600 hover:underline">
                    {{ formatPhoneNumber(brandConfig.telephone || ``) }}
                </a>
              </p>
    
              <p class="mt-2 not-italic">
                <span title="Main Email Address" class="inline-flex mr-2">
                    Email:
                </span>
                <a v-bind:href="`mailto:${brandConfig.email}`" title="Email Us" class="text-blue-800 hover:underline">
                    {{ brandConfig.email }}
                </a>
              </p>
            </div>
          </div>
    
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form @submit.prevent="sendSupportMessage" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="first-name">First Name</label>
                  <input
                    required
                    class="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="John"
                    title="Enter your first name"
                    type="text"
                    id="first-name"
                    v-model="firstName"
                  />
                </div>
    
                <div>
                  <label class="sr-only" for="last-name">Last Name</label>
                  <input
                    required
                    class="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="Smith"
                    title="Enter your last name"
                    type="text"
                    id="last-name"
                    v-model="lastName"
                  />
                </div>
              </div>
              
            <div>
                <label class="sr-only" for="company">Company</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm border"
                  placeholder="ACME inc."
                  type="text"
                  title="Enter your company (if applicable)"
                  id="company"
                  v-model="company"
                />
              </div>
    
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    required
                    class="w-full rounded-lg border-gray-200 p-3 text-sm border"
                    placeholder="jsmith@example.com"
                    title="Enter your email address"
                    type="email"
                    id="email"
                    v-model="email"
                  />
                </div>
    
                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <phone-input v-model="phoneNumber" />
                </div>
              </div>
    
              <div>
                <label class="sr-only" for="message">Message</label>
    
                <textarea
                  class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  title="Explain the nature of your issue(s)"
                  rows="8"
                  id="message"
                  v-model="message"
                ></textarea>
              </div>
    
              <div class="mt-4">
                <button type="submit" class="inline-block w-full rounded-lg bg-black hover:bg-gray-800 active:bg-gray-600 px-5 py-3 font-medium text-white sm:w-auto">
                  Create Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
    textarea{
        min-height:80px;
        max-height:300px;
    }
  </style>