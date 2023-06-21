<template>
        <h1>Hola {{ props.nombre }}</h1>
        <p>{{ esDesarrollador }}</p>
        <p>Contador: {{contador}}</p>
        <button @click = "incrementaContador">Incrementa</button>
</template>

<script setup lang="ts">
    import {ref} from "vue"
    const props = defineProps<{
        nombre:string,
        email:string,
        esDesarrollador:boolean,
        valorinicial:number
    }>()
    const contador = ref(props.valorinicial)
    const incrementaContador = () => contador.value++
</script>