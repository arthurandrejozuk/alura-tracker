import Formulario from "@/views/Projetos/Formulario.vue";
import Projetos from "@/views/Projetos.vue";
import Tarefas from "@/views/Tarefas.vue";

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Lista from "@/views/Lista.vue";


// permite a criação de rotas, cada uma contém um path
// name, component 
// Muda o componente da tela pelo router-view

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "tarefas",
    component: Tarefas, // Insere o componente rota
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
      {
        path: "",
        name: "projetos",
        component: Lista,
      },
      {
        path: "novo",
        name: "Novo projeto",
        component: Formulario,
      },
      {
        path: ":id",
        name: "Editar projeto",
        component: Formulario,
        props: true,
      },
    ]
  }
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
