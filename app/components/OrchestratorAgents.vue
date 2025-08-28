<template>
  <div class="w-full flex flex-col items-center justify-center py-6 relative" style="min-height:320px;">
    <!-- Orquestrador Topo -->
    <div class="flex flex-col items-center mb-6 z-10">
      <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-900 shadow-primary flex items-center justify-center border-4 border-primary-200">
        <span class="text-white text-2xl md:text-3xl font-bold drop-shadow">A</span>
      </div>
      <span class="mt-2 text-primary-900 text-sm font-semibold">Orquestrador</span>
    </div>
    <!-- Nível 2: Subagentes -->
    <div class="flex flex-row items-center justify-center gap-8 mb-6 z-10">
      <template v-for="i in 3" :key="'sub'+i">
        <div class="flex flex-col items-center">
          <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-400 border-2 border-primary-300 flex items-center justify-center shadow-primary">
            <span class="text-primary-900 text-lg font-bold">S</span>
          </div>
          <span class="mt-1 text-primary-900 text-xs font-semibold">Subagente</span>
        </div>
      </template>
    </div>
    <!-- Nível 3: Sub-subagentes -->
    <div class="flex flex-row items-center justify-center gap-4 z-10">
      <template v-for="i in 7" :key="'subsub'+i">
        <div class="flex flex-col items-center">
          <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary-50 to-primary-200 border border-primary-200 flex items-center justify-center shadow-primary">
            <span class="text-primary-700 text-xs font-bold">s</span>
          </div>
          <span class="mt-0.5 text-primary-700 text-[10px] font-semibold">Agente</span>
        </div>
      </template>
    </div>
    <!-- Linhas de conexão -->
    <svg class="absolute w-full h-full pointer-events-none left-0 top-0" style="z-index:0;" viewBox="0 0 400 320">
      <!-- Linha do orquestrador para subagentes -->
      <line x1="200" y1="60" x2="100" y2="120" stroke="#FFB906" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="200" y1="60" x2="200" y2="120" stroke="#FFB906" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="200" y1="60" x2="300" y2="120" stroke="#FFB906" stroke-width="2" stroke-dasharray="6 6" />
      <!-- Linhas dos subagentes para sub-subagentes -->
      <line x1="100" y1="140" x2="60" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="100" y1="140" x2="100" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="100" y1="140" x2="140" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="200" y1="140" x2="170" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="200" y1="140" x2="200" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="200" y1="140" x2="230" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="300" y1="140" x2="260" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="300" y1="140" x2="300" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
      <line x1="300" y1="140" x2="340" y2="200" stroke="#FFB90633" stroke-width="2" stroke-dasharray="6 6" />
    </svg>
  </div>
</template>

<script setup lang="ts">
// Nenhuma lógica JS necessária
</script>
