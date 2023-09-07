<template>
<div class="combobox" ref="combobox" v-on-click-outside="closeOptionsMenu">
    <slot>
        <ComboboxButton @click="showOptions" :placeholder="placeholderButton"/>
        <ComboboxList v-if="show" :placeholder="placeholderSearch" :options="options"

        :style="{top: topX, right: rightX}"
        />
    </slot> 
</div>

</template>

<script setup lang="ts">
import vOnClickOutside from "../../utils/utils.ts";
import ComboboxButton from "./Children/ComboboxButton.vue";
import ComboboxList from "./Children/ComboboxList.vue";
import {onMounted, onUnmounted, ref} from "vue";

const props = defineProps<{
    placeholderButton: string
    placeholderSearch: string
    options: object[]
    onClickOutside: Function
}>()

onMounted(() => {
    window.addEventListener('resize', calulatePositon)
})

onUnmounted(() => {
    window.removeEventListener('resize', calulatePositon)
})

const topX = ref()
const rightX = ref()

const show = ref(false)
const combobox = ref()
const showOptions = (event: Event) => {

    if (!show.value) {
        calulatePositon()
        show.value = true
        return
    }

    show.value = false
}

const closeOptionsMenu = () => {
    show.value = false
}

const calulatePositon = () => {
    const {top, right, width, height} = combobox.value.getBoundingClientRect()
    topX.value = `${top + height + 8}px`
    rightX.value = `${right - width}px`

}
</script>

<style scoped>

.combobox :deep(.combobox-list) {
    position: fixed;
    transition: all cubic-bezier(.4,0,.2,1);
}

</style>
