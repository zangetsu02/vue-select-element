<template>
<div class="combobox" ref="combobox" v-on-click-outside="closeOptionsMenu">
    <slot>
        <ComboboxButton @click="showOptions" :placeholder="placeholderValue"/>
        <ComboboxList
            v-if="show"
            :placeholder="placeholderSearch"
            :options="computedOptions"
            :style="{top: topX, right: rightX}"
            @ComboboxOptionClickEmit="(index: number) => handleOnClickEvent(index)"
            @ComboboxSearchEmit="(value: string) => searchValue = value"
        />
    </slot> 
</div>
</template>

<script setup lang="ts">
import vOnClickOutside from "../../utils/utils.ts";
import ComboboxButton from "./Children/ComboboxButton.vue";
import ComboboxList from "./Children/ComboboxList.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {ComboboxOption} from "./ComboboxInterfaces.ts";
import {computed} from "vue";

const props = defineProps<{
    placeholderButton: string
    placeholderSearch: string
    options: ComboboxOption[]
}>()

onMounted(() => {
    window.addEventListener('resize', calculatePosition)
    window.addEventListener('scroll', calculatePosition)
})

onUnmounted(() => {
    window.removeEventListener('resize', calculatePosition)
    window.removeEventListener('scroll', calculatePosition)
})

const topX = ref()
const rightX = ref()

const show = ref(false)
const combobox = ref()

const options = ref<ComboboxOption[]>(props.options)
const searchValue = ref<string>('')
const selectedOption = ref<ComboboxOption>()

const placeholderValue = computed(() => {
    return selectedOption.value === undefined
    ? props.placeholderButton
        : selectedOption.value.label
})

const showOptions = () => {

    if (!show.value) {
        calculatePosition()
        show.value = true
        return
    }

    show.value = false
}

const closeOptionsMenu = () => {
    show.value = false
}

const calculatePosition = () => {
    const {top, right, width, height} = combobox.value.getBoundingClientRect()
    topX.value = `${top + height + 8}px`
    rightX.value = `${right - width}px`

}

const computedOptions = computed(() => {
    return searchValue.value === ''
        ? options.value
        : options.value.filter((option) => option.label.toLowerCase().includes(searchValue.value.toLowerCase()))

})

function handleOnClickEvent(index: number): void {
    const item = options.value[index];

    if (item.selected) {
        selectedOption.value = undefined;
        item.selected = false;
    } else {
        options.value.forEach((option) => (option.selected = false));
        item.selected = true;
        selectedOption.value = item;
        console.log(selectedOption.value)
        closeOptionsMenu();
    }
}

</script>

<style scoped>

.combobox :deep(.combobox-list) {
    position: fixed;
    transition: all cubic-bezier(.4,0,.2,1);
}

</style>
