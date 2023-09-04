<template>

    <SelectLabel v-if="label">
        {{ label }}
    </SelectLabel>

    <div
        class="select-wrapper bg-white border-radius-sm box-shadow"
        tabindex="0"
        @click="openMenu"
    >
        <div class="select-search d-flex">
            <SelectInput v-model="query" :displayValue="modelValue.label"/>
            <SelectButton/>
        </div>
    </div>

    <SelectOptions v-if="isOpen" class="bg-white border-radius-sm default-border box-shadow" :options="options">
        <li
            v-if="computedOptions.length !== 0"
            v-for="option in computedOptions" :key="option.value"
            :class="{'selected': option.selected}"
            @click="handleOnChange(option)"
        >
            {{ option.label }}
        </li>

        <li v-else>
            Nothing found.
        </li>
    </SelectOptions>


</template>

<script setup lang="ts">
import './style/SearchElementStyle.css'
import {computed, ref} from "vue";
import SelectInput from "./children/SelectInput.vue";
import SelectButton from "./children/SelectButton.vue";
import SelectLabel from "./children/SelectLabel.vue";
import SelectOptions from "./children/SelectOptions.vue";

interface SelectOption {
    label: string,
    value: string | number,
    selected: boolean
    disabled?: boolean
}

const vModel = defineModel<SelectOption>()

const props = defineProps<{
    options: SelectOption[],
    label?: string
    name?: string
    disabled?: boolean
}>()

const isOpen = ref<Boolean>(false)
const query = ref<string>('')

const computedOptions =  computed(() =>
    query.value === ''
        ? props.options
        : props.options.filter((option) => {
            return option.label.toLowerCase().includes(query.value.toLowerCase())
        })
)

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

.selected {
    background: var(--tw-gradient-to);
    color: var(--background-white);
}

</style>