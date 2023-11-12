<template>
    <div class="combobox-options">
        <div class="combobox-options-wrapper">
            <div class="combobox-options-item" v-for="(option, index) in options" :key="index">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4 opacity-0" style=""><polyline points="20 6 9 17 4 12"></polyline></svg>
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ComboboxOption} from "../ComboboxInterfaces.ts";

const props = defineProps<{
    options: ComboboxOption[]
}>()

</script>

<style scoped>

</style>