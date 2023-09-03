<template>
    <input
        class="select-input bg-white default-border"
        type="text"
        v-model="modelValue"
    >
</template>

<script setup lang="ts">

import {computed, watch} from "vue";

const props = defineProps<{
    displayValue: string
}>()

const modelValue = defineModel<string>()
const displayValue = computed(() => {
    return props.displayValue
})

watch(displayValue, () => {
    modelValue.value = props.displayValue
})
</script>

<style scoped>

.select-input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    font-size: .875rem;
    line-height: 1.25rem;
}

</style>