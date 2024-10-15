<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja adicionar? " v-model="descricao" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import { key } from '@/store';
import { useStore } from 'vuex';

export default defineComponent({
    name: "Formulario",
    components: {
        Temporizador
    },
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    emits: ['aoSalvarTarefa']
    ,
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {

            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(projeto => { projeto.id == this.idProjeto })
            }
            )
            console.log('Tempo decorrido:', tempoDecorrido);
            console.log('descricao da tarefa: ', this.descricao);
            this.descricao = ''

        }
    },
    setup() {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

.input::placeholder {
    color: var(--texto-primario);

}

.input {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
</style>