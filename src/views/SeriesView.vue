<template>
    <h1>Series</h1>
    <div v-for="(serie,index) in series" :class="`serie ${index % 2 ? 'odd' : 'even'} ${serie.vista ? 'vista' : ''}`"
    @click="cambiaEstado(index)">
        <span style="text-align: left; flex-grow: 1">{{ serie.titulo }}</span>
        <span>{{ serie.sugiriente }}</span>
        <span>{{ serie.año }}</span>
        <span><input type="checkbox" :checked="serie.vista"/></span>
    </div>
</template>

<script setup lang="ts">
import {ref,reactive} from "vue"
import {Serie} from "../models"
const cambiaEstado = (index:number) => {
    series.value = series.value.map((serie,id)=> {
        if(id !== index) return serie
        return {...serie,vista:serie.vista ? false:true}
    })

}
const series = ref<Serie[]> ([{
    titulo: "Tú también lo harías",
    año: 2023,
    sugiriente: "Gorka"
},
{
    titulo: "Black Mirror",
    año: 2023,
    sugiriente: "Sandra"
},
{
    titulo: "Death Note",
    año: 2001,
    sugiriente: "Aitor"
},
{
    titulo: "The Mandalorian",
    año: 2020,
    sugiriente: "Antonio"
},
{
    titulo: "Paquita Salas",
    año: 2018,
    sugiriente: "Los Javis"
},
{
    titulo: "From",
    año: 2022,
    sugiriente: "Angel"
},
])
</script>

<style scoped>
.serie{
    cursor: pointer;
    display:flex;
    justify-content:space-between;
    padding:1 rem 0.5rem;
    gap: 1rem;
}
.serie.even:hover{
    background-color: rgba(150,150,150,0.5)
}
.serie.even{
    background-color: rgba(150,150,150,0.3)
}
.vista{
    text-decoration-line : line-through;
    font-style:italic;
}
</style>