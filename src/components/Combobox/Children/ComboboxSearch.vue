<template>
    <div class="combobox-search">
        <slot>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4 shrink-0 opacity-50"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
        </slot>
        <input
            type="text"
            autocomplete="off"
            spellcheck="false"
            aria-autocomplete="list"
            aria-expanded="true"
            :placeholder="placeholder"
            v-model="searchValue"
        >
    </div>
</template>

<script setup lang="ts">

import {computed} from "vue";

const emit = defineEmits<{
    (e: 'change', value: string): void
    (e: 'update:modelValue', value: string): void
}>()

const props = defineProps<{
    placeholder: string
    modelValue: string
}>()

const searchValue = computed({
    get() {
        return props.modelValue
    },
    set(newValue) {
        emit('change', newValue)
        emit('update:modelValue', newValue)
    }
})
</script>

<style scoped>

</style>