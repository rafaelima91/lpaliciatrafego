<template>
  <section class="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-white to-primary-100">
    <div class="w-full max-w-5xl flex flex-col items-center gap-10">
      <h2 class="text-3xl md:text-4xl font-display font-bold text-primary-900 text-center mb-2">Converse com Alicia no WhatsApp</h2>
      <p class="text-lg md:text-xl text-secondary-700 text-center max-w-2xl mb-6">
        Digite como você falaria com seu gestor de tráfego.
      </p>
      <CallAgentBox titulo="Solicitações ao Orquestrador">
        <template #default>
          <div class="flex flex-col gap-4">
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
              <span class="text-primary-50 font-mono text-base md:text-lg">"Alicia, crie uma campanha de leads para a Dra. Marina, público feminino 25-45 anos, orçamento R$ 100/dia"</span>
            </div>
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
                <span class="text-primary-50 font-mono text-base md:text-lg">"Qual o CPL real da clínica Beleza Pura nas últimas 2 semanas?"</span>
            </div>
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
              <span class="text-primary-50 font-mono text-base md:text-lg">"Me manda o dossiê completo de julho da Clínica Carioca"</span>
            </div>
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
              <span class="text-primary-50 font-mono text-base md:text-lg">"Pause toda a hierarquia da campanha Dia dos Pais. Estoque esgotado."</span>
            </div>
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
              <span class="text-primary-50 font-mono text-base md:text-lg">""Duplique a campanha ID 123456789 com budget de R$ 150/dia""</span>
            </div>
          </div>
        </template>
      </CallAgentBox>
      <ActionButton texto="Quero isso pra minha agência" class="mt-8 bg-white text-primary-900 border border-primary-500 shadow-primary hover:bg-primary-100 hover:text-primary-950 rounded-lg" />
    </div>
  </section>
</template>

<script setup>
import CallAgentBox from '~/components/CallAgentBox.vue'
import ActionButton from '~/components/ActionButton.vue'
</script>
