<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    tempoEmSegundo: number;
}>()

const tempoDecorrido = computed<string>(() => {
    return new Date(props.tempoEmSegundo * 1000).toISOString().substring(11, 19);
});
</script>

<template>
    <section>
        <strong>{{ tempoDecorrido }}</strong>
    </section>
</template>