<template>
    <div class="projetos">
        <h1 class="title">
            Projetos
        </h1>
    </div>
    <router-view></router-view>
</template>

<script>

    import { defineComponent } from 'vue';

    export default defineComponent({
        name:"Projetos"
    })

</script>

<style>
.projeto {
    padding: 0.25rem;
    
}
.title{
    color: black;
}

</style>