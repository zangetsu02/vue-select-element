<template>

    <SelectLabel v-if="label">
        {{ label }}
    </SelectLabel>

    <div
        class="select-wrapper bg-white border-radius-sm box-shadow"
        @click="openMenu"
        @focusout="openMenu"
    >
        <div class="select-search d-flex">
            <SelectInput/>
            <SelectButton/>
        </div>
    </div>

    <SelectOptions v-if="isOpen" class="bg-white border-radius-sm default-border box-shadow" :options="options">
        <li
            v-for="option in options" :key="option.value"
        >
            {{ option.label }}
        </li>
    </SelectOptions>


</template>

<script setup lang="ts">
import './style/SearchElementStyle.css'
import {ref} from "vue";
import SelectInput from "./children/SelectInput.vue";
import SelectButton from "./children/SelectButton.vue";
import SelectLabel from "./children/SelectLabel.vue";
import SelectOptions from "./children/SelectOptions.vue";

interface SelectOption {
    label: string,
    value: string | number,
    disabled?: boolean
}

const props = defineProps<{
    options: SelectOption[],
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
    border: 1px solid var(--light-gray);
}

</style>