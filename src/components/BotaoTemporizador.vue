<template>
     <button :disabled="desabilitado" @click="clicado" class="button">
            <span class="icon">
                <i :class="icone"></i>
            </span>
            <span>{{texto}}</span>
        </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


    export default defineComponent({
        name:"BotaoTemporizador",
        emits: ['clicado'],
        // variaveis que o componente recebe
        // caso seja dentro de um HTML, recebe dentro de {{}}, caso seja um atributo tem : no inicio
        props: {
            desabilitado: {
                type: Boolean
            },
            icone: {
                type: String,
                required: true
            },
            texto: {
                type: String,
                required: true
            },
         },
        methods: {
            clicado(): void {
                this.$emit('clicado')
            }
        }
    })

</script>

<style>

    .button{
        color: var(--texto-primario);
        background-color: var(--bg-primario);
    }

</style>