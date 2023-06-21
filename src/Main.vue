<template>
        <BotonOnOff :active="modoOscuro" :toggle="cambiaModo"/>
        <TextoPersonalizado texto="Otro texto" :esOscuro="modoOscuro"/>
</template>

<script setup lang="ts">
// //@ts-ignore
// import ListaTareas from "@components/ListaTareas"
// //@ts-ignore
// import MiContador from "@components/MiContador"
// //@ts-ignore
// import ContadorComposable from "@components/ContadorComposable"
import {ref} from 'vue';
//@ts-ignore
import BotonOnOff from './components/BotonOnOff.vue';
//@ts-ignore
import TextoPersonalizado from './components/TextoPersonalizado.vue';

const modoOscuro = ref(true)
const cambiaModo = () => {
    modoOscuro.value = !modoOscuro.value
}
</script>

<style scoped>
</style>