<template>
    <AboutUsView v-if="pagina === 'AboutUs'"/>
    <ContactView v-if="pagina === 'Contact'"/>
    <HomeView v-if="pagina === 'Home'"/>
    <MathView v-if="pagina === 'Math'"/>
    <SeriesView v-if="pagina === 'Series'"/>
    <div>
        <button id="Home" @click="redirige('Home')">Home</button>
        <button id="Contact" @click="redirige('Contact')">Contact</button>
        <button id="AboutUs" @click="redirige('AboutUs')">AboutUs</button>
        <button id="Math" @click="redirige('Math')">Math</button>
        <button id="Series" @click="redirige('Series')">Series</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {Routes} from "./models"
import {AboutUsView,ContactView,HomeView,MathView,SeriesView} from "./views"
const pagina = ref<Routes>("Home")

const redirige = (ruta: Routes) => {
    pagina.value = ruta
}

</script>

<style scoped>
</style>