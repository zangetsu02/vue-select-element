<template>

    <button class="combobox-button">
        <slot>
            {{ placeholder }}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4 shrink-0 opacity-50"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
        </slot>
    </button>

</template>

<script setup lang="ts">

const props = defineProps<{
    placeholder: string
}>()

</script>
