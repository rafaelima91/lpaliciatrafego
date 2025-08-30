<template>
  <div class="flex flex-col items-center bg-[linear-gradient(135deg,_#fffdf7_60%,_#fff7e6_100%)] border border-primary-100 rounded-2xl py-2 px-4 min-w-[208px] max-w-[208px] shadow-lg transition-all hover:scale-[1.04] hover:shadow-2xl gap-1 justify-center">
    <h3 class="text-xl font-bold text-primary-900 mb-1 text-center font-display"><slot name="title">Título</slot></h3>
    <p class="text-base text-primary-800 text-center"><slot name="desc">Descrição do card</slot></p>
  </div>
</template>

<script setup>
// Componente reutilizável para cards do carrossel de possibilidades
</script>
