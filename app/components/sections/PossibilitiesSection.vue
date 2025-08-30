<template>
  <section class="w-full flex flex-col items-center justify-center py-24 px-4 bg-primary-100">
    <div class="w-full max-w-6xl flex flex-col items-center gap-10">
  <span class="px-4 py-1 rounded-full bg-white text-primary-900 font-semibold text-sm mb-2 shadow-sm border border-primary-300">Possibilidades</span>
    <h2 class="text-4xl md:text-5xl font-display font-bold text-primary-900 text-center mb-1">Descubra tudo que você pode fazer</h2>
  <p class="text-lg md:text-xl text-primary-800 text-center max-w-3xl mb-8 mt-0.5">
        Veja exemplos de ações e automações que o ecossistema pode executar para sua agência.
      </p>
      <div class="w-full flex flex-col gap-12">
        <PossibilityCarousel
          titulo="Ações de Gestão"
          :items="gestaoItems"
        >
          <template #default="{ item }">
            <PossibilityCard>
              <template #icon><span class="text-2xl">📊</span></template>
              <template #title>{{ item.titulo }}</template>
              <template #desc>{{ item.desc }}</template>
            </PossibilityCard>
          </template>
        </PossibilityCarousel>
        <PossibilityCarousel
          titulo="Ações de Marketing"
          :items="marketingItems"
        >
          <template #default="{ item }">
            <PossibilityCard>
              <template #icon><span class="text-2xl">🚀</span></template>
              <template #title>{{ item.titulo }}</template>
              <template #desc>{{ item.desc }}</template>
            </PossibilityCard>
          </template>
        </PossibilityCarousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import PossibilityCarousel from '~/components/PossibilityCarousel.vue'
import PossibilityCard from '~/components/PossibilityCard.vue'

const gestaoItems = [
  { titulo: 'Relatórios Automáticos', desc: 'Gere relatórios diários, semanais e mensais para todos os clientes.' },
  { titulo: 'Gestão de Orçamento', desc: 'Controle e ajuste de orçamento de campanhas em tempo real.' },
  { titulo: 'Alertas Inteligentes', desc: 'Receba alertas sobre saldo baixo, campanhas pausadas e oportunidades.' },
  { titulo: 'Aprovação de Criativos', desc: 'Fluxo de aprovação de criativos e cópias com clientes.' },
  { titulo: 'Central de Notificações', desc: 'Todas as notificações importantes em um só lugar.' },
]
const marketingItems = [
  { titulo: 'Criação de Campanha', desc: 'Suba campanhas em múltiplas plataformas com poucos cliques.' },
  { titulo: 'Otimização de Anúncios', desc: 'Pause anúncios ruins e escale os vencedores automaticamente.' },
  { titulo: 'Sugestão de Funis', desc: 'Receba sugestões de funis e segmentações para cada cliente.' },
  { titulo: 'Geração de Relatórios', desc: 'Relatórios detalhados de performance e insights.' },
  { titulo: 'Automação de Mensagens', desc: 'Envie mensagens automáticas para leads e clientes.' },
]
</script>
