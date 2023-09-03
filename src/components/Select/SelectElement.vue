<template>

    <div
        class="select-wrapper bg-white border-radius-sm"
        @click="openMenu"
    >
        <div class="select-search d-flex">
            <input class="select-input bg-white default-border" type="text">
            <button class="d-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import './style/SearchElementStyle.css'
import {ref} from "vue";

const isOpen = ref<Boolean>(false)

function openMenu() {
    isOpen.value = !isOpen.value
}

</script>

<style scoped>

.select-wrapper {
    box-shadow: 0 0 transparent  ,0 0 transparent,  0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);
    width: 100%;
    overflow: hidden;
    cursor: default;
    position: relative;
    text-align: left;
}

.select-input {
    width: 100%;
    outline: none;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    font-size: .875rem;
    line-height: 1.25rem;
    appearance: none;
    border-radius: 0;
}

svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #9CA3AF;
}

button {
    padding-right: 0.5rem;
}

</style>