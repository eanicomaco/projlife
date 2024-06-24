<script setup lang="ts">
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue';
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes />
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
