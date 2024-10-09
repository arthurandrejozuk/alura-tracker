<template>
    <div class="is-flex is-align-items-center is-justify-content-space-evenly">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <BotaoTemporizador @clicado="iniciar" icone="fas fa-play" texto="Play" :desabilitado="cronometroRodando"/>
        <BotaoTemporizador @clicado="finalizar" icone="fas fa-stop" texto="Stop" :desabilitado="!cronometroRodando"/>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import BotaoTemporizador from './BotaoTemporizador.vue';

export default defineComponent({
    name: 'Temporizador',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        Cronometro,
        BotaoTemporizador
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>