<script setup lang="ts">
import Cronometro from './Cronometro.vue';
import type ITarefa from '@/interfaces/ITarefa';
import Box from './Box.vue';

const props = defineProps<{
    tarefa: ITarefa;
}>()

</script>

<template>
    <Box>
        <div class="columns">
            <div class="column is-4">
                {{ tarefa.descricao || 'Tarefa padrão' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                <Cronometro :tempo-em-segundo="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </Box>
</template>