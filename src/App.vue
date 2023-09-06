<script setup lang="ts">
import {ref} from "vue";
import BaseCombobox from "./components/Combobox/BaseCombobox.vue";

const isDark = ref(true)

const setMode = (value: boolean) => {
    isDark.value = value
}
</script>

<template>
    <div class="content" :class="{dark: isDark}">
        <div class="switch-mode">
            <div v-if="isDark" @click="setMode(false)">🌙</div>
            <div v-else @click="setMode(true)">☀️</div>
        </div>

        <div class="content-body">
            <BaseCombobox on-click-outside="" placeholder="Select framework..."/>
        </div>
    </div>

</template>

<style scoped>
@font-face {
    font-family: myFirstFont;
    src: url(Inter-VariableFont_slnt,wght.ttf);
}

:root {
    --background: #fff;
    --color: #09090b;
}

.dark {
    --background: #09090b;
    --color: #fafafa;
}

.switch-mode {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    cursor: pointer;
    user-select: none;
}

.content {
    width: 100%;
    height: 100%;
    background-color: var(--background);
    color: var(--color);
    transition: 0.4s ease;
}

.content-body {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-content: center;
}
</style>