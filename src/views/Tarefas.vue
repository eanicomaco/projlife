<script setup lang="ts">
import { ref } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import type ITarefa from '@/interfaces/ITarefa';
import Box from '../components/Box.vue';

const tarefas = ref<ITarefa[]>([]);

function salvarTarefa(tarefa: ITarefa) {
  tarefas.value.push(tarefa);
}
</script>

<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" v-if="tarefas.length" />
        <Box v-else>
            Ainda não foram realizadas tarefas.
        </Box>
    </div>
</template>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
