<template>
    <h1>Math</h1>
    <h2>{{contador  }}</h2>
    <p v-if="contador < 5">El contador es menor que 5</p>
    <p v-else-if="contador < 10">El contador es menor que 10</p>
    <p v-else="contador > 10">El contador es mayor o igual que 10</p>
</template>

<script setup lang="ts">
const contador = 10
</script>