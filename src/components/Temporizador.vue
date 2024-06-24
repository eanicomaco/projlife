<script setup lang="ts">
import { ref, computed } from 'vue';
import Cronometro from './Cronometro.vue';
import Button from './Button.vue';

const tempoEmSegundo = ref<number>(0);
const cronometro = ref<number>(0);
const cronometroRodando = ref<boolean>(true);

const emits = defineEmits<{
    (e: 'aoFinalizarTarefa', tempoEmSegundo: number): void;
}>()

function iniciar() {
    //começa a contagem
    //1s = 1000ms
    cronometroRodando.value = false;
    cronometro.value = setInterval(() => {
        tempoEmSegundo.value += 1;
    }, 1000)
};

function finalizar() {
    cronometroRodando.value = true;
    clearInterval(cronometro.value);
    emits('aoFinalizarTarefa', tempoEmSegundo.value);
    tempoEmSegundo.value = 0;
};
</script>

<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundo="tempoEmSegundo" />
        <Button @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="!cronometroRodando" />
        <Button @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="cronometroRodando" />

        <!-- ERA ASSIM :::::
            <button class="button" @click="iniciar" :disabled="!cronometroRodando">
                <span class="icon">
                    <i class="fas fa-play"></i>
                </span>
                <span>play</span>
            </button>
            <button class="button" @click="finalizar" :disabled="cronometroRodando">
                <span class="icon">
                    <i class="fas fa-stop"></i>
                </span>
                <span>stop</span>
            </button>
        -->
    </div>
</template>