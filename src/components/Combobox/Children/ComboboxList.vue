<template>
    <div class="combobox-list">
        <div class="combobox-list-container">
            <div class="combobox-list-content">
                <slot>
                    <ComboboxSearch :placeholder="placeholder" v-model="searchValue"/>

                    <ComboboxOptions :options="computedOptions"/>
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

const searchValue = ref<string>('')

const computedOptions = computed(() => {
    return searchValue.value === ''
        ? props.options
        : props.options.filter((option) => option.label.toLowerCase().includes(searchValue.value.toLowerCase()))

})
</script>

<style scoped>

</style>