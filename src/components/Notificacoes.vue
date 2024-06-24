<script setup lang="ts">
import { useStore } from '@/store';
import { computed } from 'vue';

const store = useStore()
const notificacoes = computed(() => store.state.notificacoes)
</script>

<template>
    <div class="notificacoes">
        <article :class="['message', `is-${notificacao.classe}`]" v-for="notificacao in notificacoes" :key="notificacao.id">
            <div class="message-header">{{ notificacao.titulo }}</div>
            <div class="message-body">
                {{ notificacao.texto }}
            </div>
        </article>
    </div>
</template>

<style escoped>
.notificacoes{
    position:absolute;
    right: 0;
    width: 500px;
    padding: 8px;
    z-index: 9999;
}
</style>