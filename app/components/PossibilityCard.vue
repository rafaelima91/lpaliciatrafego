<template>
  <div class="flex flex-col items-start bg-dark-soft border border-dark-medium rounded-xl p-6 min-w-[240px] max-w-xs shadow-md transition hover:scale-[1.03] hover:shadow-lg">
    <slot name="icon">
      <div class="w-10 h-10 mb-4 rounded-lg bg-primary-900/80 flex items-center justify-center">
        <span class="text-white text-2xl">?</span>
      </div>
    </slot>
    <h3 class="text-lg font-bold text-white mb-1"><slot name="title">Título</slot></h3>
    <p class="text-base text-secondary-100"><slot name="desc">Descrição do card</slot></p>
  </div>
</template>

<script setup>
// Componente reutilizável para cards do carrossel de possibilidades
</script>
