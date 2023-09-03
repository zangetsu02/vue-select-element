<template>

    <SelectLabel v-show="label">
        {{ label }}
    </SelectLabel>

    <div
        class="select-wrapper bg-white border-radius-sm"
        @click="openMenu"
    >
        <div class="select-search d-flex">
            <SelectInput/>
            <SelectButton/>
        </div>
    </div>

    <div v-show="isOpen">

    </div>

</template>

<script setup lang="ts">
import './style/SearchElementStyle.css'
import {ref} from "vue";
import SelectInput from "./children/SelectInput.vue";
import SelectButton from "./children/SelectButton.vue";
import SelectLabel from "./children/SelectLabel.vue";

const props = defineProps<{
    label?: string
}>()

const isOpen = ref<Boolean>(false)

function openMenu(): void {
    isOpen.value = !isOpen.value
}

</script>

<style scoped>

.select-wrapper {
    width: 100%;
    position: relative;
    text-align: left;
    cursor: default;
    overflow: hidden;
    box-shadow: 0 0 transparent  ,0 0 transparent,  0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);
    border: 1px solid var(--light-gray);
}

</style>