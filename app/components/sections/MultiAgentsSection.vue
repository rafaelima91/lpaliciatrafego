<template>
  <section class="w-full flex justify-center bg-white py-24 md:py-24 px-4">
    <div class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-16">
  <!-- Coluna Esquerda -->
  <div class="flex-1 flex flex-col items-start justify-center min-w-0">
      <Badge class="mb-4 text-primary-900 border-primary-300 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 bg-opacity-80">Método Exclusivo</Badge>
      <h2 class="text-3xl md:text-4xl font-display font-bold mb-4 text-black">20 Agentes de IA atuando simultaneamente</h2>
      <p class="text-lg md:text-xl text-secondary-700 mb-2">
        Agentes de IA e automações que trabalham 24/7 subindo campanhas, pausando anúncios perdedores, escalando anúncios vencedores, te alertando sobre saldo de conta, gerando relatórios diários, dando sugestões sobre seus funis e trazendo insights sobre métricas do gerenciador
      </p>
    </div>
      <!-- Coluna Direita -->
      <div class="flex-1 flex items-center justify-center min-h-[320px] bg-secondary-50 rounded-xl border border-dashed border-secondary-200">
        <OrchestratorAgents />
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import OrchestratorAgents from '~/components/OrchestratorAgents.vue'
</script>
