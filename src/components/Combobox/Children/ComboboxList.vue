<template>
    <div class="combobox-list">
        <div class="combobox-list-container">
            <div class="combobox-list-content">
                <slot>
                    <ComboboxSearch :placeholder="placeholder"/>

                    <ComboboxOptions :options="options"/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ComboboxSearch from "./ComboboxSearch.vue";
import ComboboxOptions from "./ComboboxOptions.vue";

const props = defineProps<{
    placeholder: string
    options: object[]
}>()

</script>

<style scoped>

</style>