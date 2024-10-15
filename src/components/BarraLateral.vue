
<!-- Todo componente inicia com <template></template> -->
<template>
    <header>
        <h1>
            <img src="https://raw.githubusercontent.com/alura-cursos/alura-tracker/main/src/assets/logo.png" alt="Logo Alura Tracker">
        </h1>
        <button class="button" @click="alterarTema" >
          {{ textoDoBotao }}
        </button>
        <nav class="panel mt-5">
          <ul>
            <li>
              <router-link to="/" class="link">
                <i class="fas fa-tasks"></i>
                Tarefas
              </router-link>
            </li>
            <li>
              <router-link to="/projetos" class="link">
                <i class="fas fa-project-diagram"></i>
                Projetos
              </router-link>
            </li>
          </ul>
        </nav>
    </header>
</template>

<script lang="ts">
// Por padrão, criamos um componente pelo defineComponent 
// que contém alguns atributos para criação do componente
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    // emite um algo, retornando um valor 
    emits: ['aoTemaAlterado'],
    // variaveis dentro do componente
    data(){
      return{
        modoEscuroAtivo: false
      }
    },
    computed: {
      textoDoBotao(){
        if(this.modoEscuroAtivo){
          return 'Desativar modo escuro';
        } 
        return 'Ativar modo escuro';
      }
    },
    // Metodos do componente
    methods: {
      alterarTema(){
        this.modoEscuroAtivo = !this.modoEscuroAtivo;
        this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
      }
    }
})
</script>

<style>
header {
  padding: 1rem;
  padding-top: 2rem;
  padding-left: 2rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
.panel li {
    margin: 8px 0;
}
.link {
  padding: 12px;
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>