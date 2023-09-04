<script setup lang="ts">
    import { ref, watch } from 'vue';

    const rawPhoneNumber = ref('');
    const formattedPhoneNumber = ref('');

    // Watch for changes in rawPhoneNumber and update the formattedPhoneNumber accordingly
    watch(rawPhoneNumber, () => {
        formattedPhoneNumber.value = formatPhoneNumber(rawPhoneNumber.value);
    });

    const formatPhoneNumber = (rawNumber: string) => {
    const phoneNumber = rawNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const formatted = [];
    let i = 0;

    // Format as (NNN)
    if (phoneNumber.length >= 3) {
        formatted.push(`(${phoneNumber.slice(i, i + 3)})`);
        i += 3;
    } else {
        formatted.push(`(${phoneNumber.slice(i)}`);
        return formatted.join('');
    }

    // Format as NNN-
    if (phoneNumber.length >= 6) {
        formatted.push(` ${phoneNumber.slice(i, i + 3)}-`);
        i += 3;
    } else {
        formatted.push(` ${phoneNumber.slice(i)}`);
        return formatted.join('');
    }

    // Format as NNNN
    formatted.push(phoneNumber.slice(i, i + 4));
        return formatted.join('');
    };

    const onInput = (event: any) => {
        const inputElement = event.target;
        const cursorPosition = inputElement.selectionStart;

        rawPhoneNumber.value = inputElement.value;

        // Maintain cursor position within blocks
        switch (cursorPosition) {
            case 1:
            case 2:
            case 3:
            case 5:
            case 6:
            case 7:
            case 9:
            case 10:
            case 11:
                inputElement.setSelectionRange(cursorPosition, cursorPosition);
            break;
            default:
                // If cursor position is not within blocks, move it to the end of the formatted input
                inputElement.setSelectionRange(formattedPhoneNumber.value.length, formattedPhoneNumber.value.length);
            break;
        }
    };
</script>
<template>
    <input
        class="w-full rounded-lg border-gray-200 p-3 text-sm border"
        placeholder="(555) 555-5555"
        maxlength="14"
        title="Enter your phone number (if applicable)"
        type="tel"
        id="phone"
        v-model="formattedPhoneNumber"
        @input="onInput"
        ref="phoneNumberInput"
    />
</template>