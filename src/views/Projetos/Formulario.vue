<script setup lang="ts">
import { ClasseNotificacao } from '@/interfaces/INotificacao';
import type IProjeto from '@/interfaces/IProjeto';
import { useNotificacao } from '@/mixins/useNotificacao';
import { useStore } from '@/store';
import { ADICIONA_PROJETO, ALTERA_PROJETO, NOTIFICAR } from '@/store/projeto-mutations';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const nomeDoProjeto = ref<string>('');
const store = useStore();
const router = useRouter();
const { notificar } = useNotificacao();
const projeto = ref<IProjeto | null>(null);
const props = defineProps<{
    id?: string;
}>()

onMounted(() => {
    if(props.id) {
        projeto.value = (store.state.projetos as IProjeto[]).find((proj: IProjeto) => proj.id == props.id) || null;
        if(projeto.value) {
            nomeDoProjeto.value = projeto.value.nome || ''
        }
    }
});
function salvar(): void {
    if(projeto.value?.id) {
        store.commit(ALTERA_PROJETO, {
            id: projeto.value.id,
            nome: nomeDoProjeto.value
        })
        notificar('Sucesso!', 'Projeto alterado com sucesso', ClasseNotificacao.SUCCESS);
    } else {
        store.commit(ADICIONA_PROJETO, nomeDoProjeto.value);
        notificar('Sucesso!', 'Projeto incluído com sucesso', ClasseNotificacao.SUCCESS);
    }
    nomeDoProjeto.value = "";
    router.push('/projetos');
}
</script>

<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
            </div>
            <div class="field">
                <button type="submit" class="button">Salvar</button>
            </div>
        </form>
    </section>
</template>

