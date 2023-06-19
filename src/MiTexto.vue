<template>
    <div>
        <p>Mi texto</p>
        <input type="text" @input="cambioTexto" :value = "valorInput"/>
        <input type="text" v-model="valorInput"/>
        <button @click="obtenClick">Enviar</button>
        <p>El valor del input es: {{ valorInput }}</p>
    </div>
</template>
<script setup lang="ts">
import {ref} from "vue"

const valorInput = ref("valor inicio")
const cambioTexto = (event:Event) =>{
    //console.log("He cambiado")
    const nuevoValor = (event.target as HTMLInputElement).value
    console.log(nuevoValor)
    valorInput.value = nuevoValor
}
const obtenClick = (event:Event) => {
    console.log(event)
}
</script>