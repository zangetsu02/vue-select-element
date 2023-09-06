<template>

<button class="combobox-button">
    <slot>
        
    </slot> 
</button>

</template>

<script setup lang="ts">

const props = defineProps<{
    onClickOutside: Function
}>()
</script>
