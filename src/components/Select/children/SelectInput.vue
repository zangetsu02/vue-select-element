<template>
    <input
        class="select-input bg-white default-border"
        type="text"
        v-model="modelValue"
        @keyup.enter="emit('enter', modelValue)"
        @input="emit('isWriting')"
    >
</template>

<script setup lang="ts">

import {computed, watch} from "vue";

const emit = defineEmits<{
    enter: [value: string | undefined]
}>()


const modelValue = defineModel<string>()

</script>

<style scoped>

.select-input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    font-size: .875rem;
    line-height: 1.25rem;
}

</style>