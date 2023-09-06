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

<style>
@font-face {
    font-family: "myFirstFont";
    src: url(Inter-VariableFont_slnt,wght.ttf);
}

:root {
    --background: #fff;
    --color: #09090b;
    --border: #e4e4e7;
    --hover-color: #18181b;
    --hover-background: #f4f4f5;
}

.dark {
    --background: #09090b;
    --color: #fafafa;
    --hover-color: #fafafa;
    --hover-background: #27272a;
    --border: #27272a;
}

.switch-mode {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    user-select: none;
}

.switch-mode > div {
    padding: 15px;
}

.content {
    font-family: "myFirstFont",serif !important;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    color: var(--color);
    transition: all cubic-bezier(.4,0,.2,1) .25s;
}

.content-body {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.combobox-button {
    padding: 0.5rem 1rem;
    min-width: 200px;
    min-height: 40px;
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.25rem;
    border: 1px var(--border) solid;
    border-radius: calc(0.5rem - 2px);
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    font-family: inherit;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    color: inherit;
    cursor: pointer;
    text-transform: none;
    transition-property: border,text-decoration-color,fill,stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .25s;
}

.combobox-button:hover {
    background-color: var(--hover-background);
    color: var(--hover-color);
}

svg {
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
}
</style>