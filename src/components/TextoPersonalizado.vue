<template>
    <div :class="esOscuro ? 'oscuro' : 'claro'">
        <h2>{{ texto }}</h2>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    texto:string
    esOscuro:boolean
}>()
</script>

<style scoped>
.oscuro{
    background-color: transparent;
    color: white;
}
.claro{
    background-color: white;
    color: black;
}
</style>