<template>
    <h2>Contador composable</h2>
    <button @click = "incrementaContador">{{ contador }}</button>
    <button @click = "incrementaContador(2)">Incrementa 2</button>
    <button @click = "incrementaContador(5)">Incrementa 5</button>
</template>

<script setup lang="ts">
//@ts-ignore
import useContador from "../hooks/useContador"
const {contador,incrementaContador} = useContador(3)

const handleClick = (param:any) => {
    console.log(param)
}
</script>
