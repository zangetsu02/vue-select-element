<template>
    <div class="combobox-list">
        <div class="combobox-list-container">
            <div class="combobox-list-content">
                <slot>
                    <ComboboxSearch :placeholder="placeholder" v-model="searchValue"/>

                    <ComboboxOptions @ComboboxOptionClickEmit="(index: number) => $emit('ComboboxOptionClickEmit', index)" :options="options"/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ComboboxSearch from "./ComboboxSearch.vue";
import ComboboxOptions from "./ComboboxOptions.vue";
import {ref, watch} from "vue";
import {ComboboxOption} from "../ComboboxInterfaces.ts";

const emit = defineEmits<{
    (e: 'ComboboxSearchEmit', value: string): void
    (e: 'ComboboxOptionClickEmit', index: number): void
}>()

defineProps<{
    placeholder: string
    options: ComboboxOption[]
}>()

const searchValue = ref<string>('')

watch(searchValue, () => {
    emit('ComboboxSearchEmit', searchValue.value)
})
</script>

<style scoped>

</style>