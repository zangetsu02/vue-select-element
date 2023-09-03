<script setup lang="ts">

import SelectElement from "./components/Select/SelectElement.vue";
import {ref} from "vue";

const options = [
    {
        label: 'Wade Cooper',
        value: 1,
        selected: false
    },
    {
        label: 'Arlene Mccoy',
        value: 2,
        selected: true
    },
    {
        label: 'Tom Cook',
        value: 3,
        selected: false
    },
    {
        label: 'Hellen Schmidt',
        value: 1,
        selected: false
    },
]

const result = ref()
</script>

<template>
    <div class="content">

        {{ result }}

        <SelectElement label="Combobox" :options="options" @change="(value) => result = value"/>
    </div>
</template>

<style scoped>
@font-face {
    font-family: myFirstFont;
    src: url(Inter-VariableFont_slnt,wght.ttf);
}
.content {
    font-family: myFirstFont;
    height: 100%;
    padding: 10rem 5rem;
    --tw-gradient-from: #2dd4bf;
    --tw-gradient-to: #22d3ee;;
    --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to);
    background-image: linear-gradient(to right,var(--tw-gradient-stops));
}

</style>