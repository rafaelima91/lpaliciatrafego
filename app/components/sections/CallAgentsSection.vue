<template>
  <section class="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-white to-primary-100">
    <div class="w-full max-w-5xl flex flex-col items-center gap-10">
      <h2 class="text-3xl md:text-4xl font-display font-bold text-primary-900 text-center mb-2">Interaja com o Agente Orquestrador</h2>
      <p class="text-lg md:text-xl text-secondary-700 text-center max-w-2xl mb-6">
        Peça em linguagem natural o que quiser para o agente orquestrador e veja a automação acontecer em tempo real.
      </p>
      <CallAgentBox titulo="Solicitações ao Orquestrador">
        <template #default>
          <div class="flex flex-col gap-4">
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
              <span class="text-primary-50 font-mono text-base md:text-lg">Suba uma campanha de vendas para do cliente "Y", para seguidores no insta, com orçamento diário de X. Os criativos estão no drive "Z"</span>
            </div>
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
                <span class="text-primary-50 font-mono text-base md:text-lg">Qual o custo por lead do cliente "XXX" nas últimas duas semanas?</span>
            </div>
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
              <span class="text-primary-50 font-mono text-base md:text-lg">Preciso do relatório do último mês do cliente "YYY"</span>
            </div>
            <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3">
              <span class="text-primary-50 font-mono text-base md:text-lg">Pause o anúncio "T" e o conjunto "R" da campanha "J", por favor</span>
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
