<script setup lang="ts">
    import { ref } from 'vue';
    const email = ref('');
    const submitForm = async() => {
        try {
            const response = await $fetch('/api/newsletter', {
                method: 'POST',
                body: { email: email.value }
            });
            window.location.href = "/welcome";
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
</script>
<template>
    <div class="col-span-2">
        <div>
            <h2 class="text-2xl font-bold text-gray-900">
                Join our Mailing List
            </h2>
            <p class="mt-4 text-gray-500">
                Interested in Blazed Labs? You can keep up to date on all our happenings
                by subscribing to our mailing list.
            </p>
        </div>
    </div>
    <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end select-none">
        <form class="w-full" @submit.prevent="submitForm">
        <label for="email-field">
            <div class="border border-gray-100 p-2 focus-within:ring ring-blue-800 border border-gray-600 focus-within:border-blue-700 bg-white sm:flex sm:items-center sm:gap-4">
                <span class="sr-only">Email</span>
                <input
                    required
                    type="email"
                    id="email-field"
                    placeholder="john@example.com"
                    name="email"
                    v-model="email"
                    class="w-full border-none focus:border-transparent focus:ring-transparent outline-none sm:text-sm"
                />
                <button type="submit" class="mt-1 w-full bg-blue-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-700 active:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                </button>
            </div>
        </label>
        </form>
    </div>
</template>