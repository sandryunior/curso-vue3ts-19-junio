<template>
  <h1 class="saludo">{{mensaje}}</h1>
  <button @click="handleClick">Click me</button>
  <button v-on:click="handleClick">Otro botón</button>
</template>

<!-- <script lang="ts">
//Options API
export default{
  data(){
    const mensaje = "Hola desde Options API"
    return {
      mensaje
    }
  },
  methods:{
    handleClick: () => {
      console.log("He hecho click")
      console.log(this.mensaje)
    }
  }
}
</script> -->
<script setup lang="ts">
const mensaje = "Hola desde Composition API"
const handleClick = () => {
  console.log("click desde handleClick")
}
//Composition API
  // export default {
  //   setup(){
  //     //definir variables, constantes, etc
  //     //definir funciones...
  //     //definir functiones de gestión del ciclo de vida...
  //   }
  // }
</script>
<style scoped>
  .saludo{
    color:green;
  }
</style>