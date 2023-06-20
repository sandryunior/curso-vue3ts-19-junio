import {ref} from "vue"

export default function useContador(){
    const contador = ref(0)

    const incrementaContador = (suma:number = 1) => (contador.value+= suma)

    return {contador,incrementaContador}
}