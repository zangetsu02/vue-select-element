<template>
<div class="combobox" v-on-click-outside="onClickOutside">
    <slot>
        <ComboboxButton/>
    </slot> 
</div>

</template>

<script setup lang="ts">
import vOnClickOutside from "../../utils/utils.ts";
import ComboboxButton from "./Children/ComboboxButton"

const props = defineProps<{
    onClickOutside: Function
}>()
</script>
