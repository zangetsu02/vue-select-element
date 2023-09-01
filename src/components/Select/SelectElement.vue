<template>
    <div
        class="select-element"
        @click="openMenu"
    >
        <input type="text">
        <div v-if="isOpen">OPEN</div>
    </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const isOpen = ref<Boolean>(false)

function openMenu() {
    isOpen.value = !isOpen.value
}

</script>

<style scoped>

</style>