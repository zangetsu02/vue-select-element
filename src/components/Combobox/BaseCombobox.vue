<template>
<div class="combobox" v-on-click-outside="onClickOutside">
    <slot>
        <ComboboxButton :placeholder="placeholder"/>
    </slot> 
</div>

</template>

<script setup lang="ts">
import vOnClickOutside from "../../utils/utils.ts";
import ComboboxButton from "./Children/ComboboxButton.vue";

const props = defineProps<{
    placeholder: string
    onClickOutside: Function
}>()
</script>
