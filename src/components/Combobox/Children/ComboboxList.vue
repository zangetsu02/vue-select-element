<template>
    <div class="combobox-list">
        <div class="combobox-list-container">
            <div class="combobox-list-content">
                <slot>
                    <ComboboxSearch :placeholder="placeholder" v-model="searchValue"/>

                    <ComboboxOptions @ComboboxOptionClickEmit="(index: number) => handleOnClickEvent(index) " :options="computedOptions"/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ComboboxSearch from "./ComboboxSearch.vue";
import ComboboxOptions from "./ComboboxOptions.vue";
import {computed, ref} from "vue";
import {ComboboxOption} from "../ComboboxInterfaces.ts";

const props = defineProps<{
    placeholder: string
    options: ComboboxOption[]
}>()

const options = ref<ComboboxOption[]>(props.options)
const searchValue = ref<string>('')

const computedOptions = computed(() => {
    return searchValue.value === ''
        ? options.value
        : options.value.filter((option) => option.label.toLowerCase().includes(searchValue.value.toLowerCase()))

})

function handleOnClickEvent(index: number) {
    for (let i = 0; i < options.value.length; i++) {
        if (i === index) {
            options.value[index].selected = !options.value[index].selected
            return
        }
        options.value[i].selected = false
    }
}
</script>

<style scoped>

</style>