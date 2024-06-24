<script setup lang="ts">
import { ClasseNotificacao } from '@/interfaces/INotificacao';
import { useNotificacao } from '@/mixins/useNotificacao';
import { useStore } from '@/store';
import { EXCLUIR_PROJETO } from '@/store/projeto-mutations';
import { computed } from 'vue';

const store = useStore();
const { notificar } = useNotificacao();
const projetos = computed(() => store.state.projetos);

function excluir(id: string) {
    store.commit(EXCLUIR_PROJETO, id);
    notificar('Sucesso', 'Registro excluído com sucesso', ClasseNotificacao.SUCCESS)
}
</script>

<template>
    <section>
        <RouterLink to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo Projeto</span>
        </RouterLink>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do Projeto</th>
                    <th class="center">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome}}</td>
                    <td class="center">
                        <RouterLink :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </RouterLink>
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash-alt"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style escoped>
.table{
    margin-top: 30px;
}
.center{
    text-align: center !important;
}
</style>