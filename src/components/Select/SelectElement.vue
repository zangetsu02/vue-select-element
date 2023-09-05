<template>
    <div v-on-click-outside="handleClickOutside">
        <SelectLabel v-if="label">
            {{ label }}
        </SelectLabel>

        <div
            class="select-wrapper bg-white border-radius-sm box-shadow"
            tabindex="0"
            @click="changeMenuStatus"
        >
            <div class="select-search d-flex">
                <SelectInput v-model="query" @enter="handleOnEnterEvent" @isWriting="isOpen = true"/>
                <SelectButton/>
            </div>
        </div>

        <SelectOptions v-if="isOpen" class="bg-white border-radius-sm default-border box-shadow">
            <li
                v-if="computedOptions.length !== 0"
                v-for="(option, index) in computedOptions" :key="index"
                :class="{'selected': option.selected}"

            >
                <template v-if="option.selected">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4 opacity-100"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </template>
                <span>
                    {{ option.label }}
                </span>
            </li>

            <li v-else>
                Nothing found.
            </li>
        </SelectOptions>
    </div>
</template>

<script setup lang="ts">
import './style/SearchElementStyle.css'
import {computed, ref} from "vue";
import SelectInput from "./children/SelectInput.vue";
import SelectButton from "./children/SelectButton.vue";
import SelectLabel from "./children/SelectLabel.vue";
import SelectOptions from "./children/SelectOptions.vue";
import vOnClickOutside from "../../utils/utils.ts";

interface SelectOption {
    label: string,
    value: number,
    selected: boolean
    disabled?: boolean
}

const props = defineProps<{
    options: SelectOption[],
    label?: string
    name?: string
    disabled?: boolean
}>()

const options = ref<SelectOption[]>(props.options)
const isOpen = ref<Boolean>(false)
const query = ref<string>('')

const computedOptions =  computed(() =>
    query.value === ''
        ? options.value
        : options.value.filter((option) => { return option.label.toLowerCase().includes(query.value.toLowerCase()) })
)

function changeMenuStatus(): void {
    isOpen.value = !isOpen.value
}

function handleOnEnterEvent(label) {
    if (!label) return;

    const lowerCaseLabel = label.toLowerCase();
    const option = options.value.find(option => option.label.toLowerCase().includes(lowerCaseLabel));

    if (option) {
        resetOptions();
        query.value = option.label
        option.selected = true;
        changeMenuStatus();
    }
}


function handleClickOutside() {
    if (isOpen.value) {
        changeMenuStatus()
    }
}

function resetOptions(): void {
    props.options.forEach((option) => option.selected = false)
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

li:hover,
.selected {
    cursor: pointer;
    background: var(--tw-gradient-to);
    color: var(--background-white);
}

</style>