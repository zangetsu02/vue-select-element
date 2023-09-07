<template>
    <div class="combobox-list">
        <div class="combobox-list-container">
            <div class="combobox-list-content">
                <slot>
                    <ComboboxSearch :placeholder="placeholder"/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ComboboxSearch from "./ComboboxSearch.vue";

const props = defineProps<{
    placeholder: string
}>()

</script>

<style scoped>

</style>