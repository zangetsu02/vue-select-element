<template>

    <SelectLabel v-if="label">
        {{ label }}
    </SelectLabel>

    <div
        class="select-wrapper bg-white border-radius-sm box-shadow"
        @click="openMenu"
    >
        <div class="select-search d-flex">
            <SelectInput
                v-model="query"
                :displayValue="modelValue.label"
            />
            <SelectButton/>
        </div>
    </div>

    <SelectOptions v-if="isOpen" class="bg-white border-radius-sm default-border box-shadow" :options="options">
        <li
            v-for="option in computedOptions" :key="option.value"
            @click="handleOnChange(option)"
        >
            {{ option.label }}
        </li>
    </SelectOptions>


</template>

<script setup lang="ts">
import './style/SearchElementStyle.css'
import {computed, reactive, ref} from "vue";
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

const emit = defineEmits(['change'])

const props = defineProps<{
    options: SelectOption[],
    label?: string
}>()

const isOpen = ref<Boolean>(false)
const query = ref<string>('')

const modelValue = reactive({
    label: '',
    value: null,
})

const computedOptions =  computed(() => {
    if (query.value === '') {
        return props.options
    }

    return props.options.filter((option: SelectOption) => {
        return option.label.toLowerCase().includes(query.value.toLowerCase())
    })
})

function openMenu(): void {
    isOpen.value = !isOpen.value
}

function handleOnChange(option: SelectOption): void {
    props.options.map(option => option.selected = false)
    option.selected = true
    modelValue.label = option.label
    modelValue.value = option.value
    emit('change', modelValue.value)
    openMenu()
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