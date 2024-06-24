<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Temporizador from './Temporizador.vue';
import { key } from '@/store';
import { useStore } from 'vuex';
import type IProjeto from '@/interfaces/IProjeto';
import { ClasseNotificacao } from '@/interfaces/INotificacao';
import { useNotificacao } from '@/mixins/useNotificacao';
import type ITarefa from '@/interfaces/ITarefa';

const descricao = ref<string>('');
const idProjeto = ref<string>('');
const store = useStore(key);
const { notificar } = useNotificacao();
const projetos = computed(() => store.state.projetos);
const emits = defineEmits<{
    (e: 'aoSalvarTarefa', tarefa: ITarefa): void;
}>()

function salvarTarefa(tempoEmSegundo: number): void {
    const projeto = projetos.value.find((proj: IProjeto) => proj.id == idProjeto.value);
    if(!projeto) {
        notificar('ERRO!', 'Tentativa de vincular ação a um projeto inexistente.', ClasseNotificacao.DANGER);
        return; //early return
    }
    emits('aoSalvarTarefa', {
        duracaoEmSegundos: tempoEmSegundo,
        descricao: descricao.value,
        projeto: projeto
    });
    notificar('SUCESSO!', 'Ação incluída com sucesso.', ClasseNotificacao.SUCCESS);
    descricao.value = '';
}
</script>

<template>
    <div class="box">
        <div class="columns">
            <div class="column is-4" role="form" aria-label="Formulário para criação de tarefas.">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-4">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option v-for="projeto in projetos" :value="projeto.id" :key="projeto.id">{{ projeto.nome }}</option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoFinalizarTarefa="salvarTarefa" />
            </div>
        </div>
    </div>
</template>