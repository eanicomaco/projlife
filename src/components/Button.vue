<script setup lang="ts">

const props = defineProps<{
    icone: string;
    texto: string;
    desabilitado: boolean;
}>()

const emits = defineEmits<{
    (e: 'clicado'): void;
}>()

function clicado(): void {
    emits('clicado');
}

</script>

<template>
    <button class="button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>