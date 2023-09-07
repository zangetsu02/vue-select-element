<template>
<div class="combobox" v-on-click-outside="onClickOutside">
    <slot>
        <ComboboxButton :placeholder="placeholderButton"/>
        <ComboboxList :placeholder="placeholderSearch" :options="options"/>
    </slot> 
</div>

</template>

<script setup lang="ts">
import vOnClickOutside from "../../utils/utils.ts";
import ComboboxButton from "./Children/ComboboxButton.vue";
import ComboboxList from "./Children/ComboboxList.vue";

const props = defineProps<{
    placeholderButton: string
    placeholderSearch: string
    options: object[]
    onClickOutside: Function
}>()
</script>
