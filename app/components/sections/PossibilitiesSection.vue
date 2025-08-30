<template>
  <section class="w-full flex flex-col items-center justify-center py-24 px-4 bg-primary-100">
    <div class="w-full max-w-6xl flex flex-col items-center gap-10">
  <span class="px-4 py-1 rounded-full bg-white text-primary-900 font-semibold text-sm mb-2 shadow-sm border border-primary-300">Possibilidades</span>
    <h2 class="text-4xl md:text-5xl font-display font-bold text-primary-900 text-center mb-1">Descubra tudo que você pode fazer</h2>
  <p class="text-lg md:text-xl text-primary-800 text-center max-w-3xl mb-8 mt-0.5">
        Veja exemplos de ações e automações que o ecossistema da Alicia pode executar para sua agência.
      </p>
      <div class="w-full flex flex-col gap-12">
        <PossibilityCarousel
          titulo="CRIAÇÃO"
          subtitulo="Crie campanhas conversando no WhatsApp"
          :items="criacaoItems"
        >
          <template #default="{ item }">
            <PossibilityCard>
              <template #title>{{ item.titulo }}</template>
              <template #desc>{{ item.desc }}</template>
            </PossibilityCard>
          </template>
        </PossibilityCarousel>
        <PossibilityCarousel
          titulo="DNA DO CLIENTE"
          subtitulo="Alicia conhece seu negócio melhor que você"
          :items="dnaItems"
        >
          <template #default="{ item }">
            <PossibilityCard>
              <template #title>{{ item.titulo }}</template>
              <template #desc>{{ item.desc }}</template>
            </PossibilityCard>
          </template>
        </PossibilityCarousel>
        <PossibilityCarousel
          titulo="RELATÓRIOS"
          subtitulo="Acorde com seus números mastigados"
          :items="relatoriosItems"
        >
          <template #default="{ item }">
            <PossibilityCard>
              <template #title>{{ item.titulo }}</template>
              <template #desc>{{ item.desc }}</template>
            </PossibilityCard>
          </template>
        </PossibilityCarousel>
        <PossibilityCarousel
          titulo="OTIMIZAÇÃO"
          subtitulo="Alicia trabalha enquanto você dorme"
          :items="otimizacaoItems"
        >
          <template #default="{ item }">
            <PossibilityCard>
              <template #title>{{ item.titulo }}</template>
              <template #desc>{{ item.desc }}</template>
            </PossibilityCard>
          </template>
        </PossibilityCarousel>
        <PossibilityCarousel
          titulo="INSIGHTS"
          subtitulo="Pergunte qualquer coisa, a qualquer hora"
          :items="insightsItems"
        >
          <template #default="{ item }">
            <PossibilityCard>
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

const criacaoItems = [
  { titulo: 'Comando Simples', desc: 'Digite "Alicia, crie uma campanha de leads para harmonização" e veja a mágica acontecer em 2 minutos.' },
  { titulo: 'Campanha Completa', desc: 'Alicia cria tudo: campanha com objetivo correto, conjunto de anúncios, públicos segmentados e anúncios prontos.' },
  { titulo: 'Copy que Converte', desc: 'Textos persuasivos gerados com base no DNA do cliente, gatilhos mentais e histórico de sucesso do nicho.' },
  { titulo: 'Públicos Certeiros', desc: 'Segmentação automática: idade, gênero, interesses, comportamentos e lookalikes baseados em conversões reais.' },
  { titulo: 'Criativos Otimizados', desc: 'Upload direto do Drive ou busca no feed do Instagram. Alicia escolhe formatos ideais para cada objetivo.' },
  { titulo: 'Múltiplos Formatos', desc: 'Cria anúncios para Feed, Stories, Reels. Adapta copy e criativo para cada posicionamento automaticamente.' },
  { titulo: 'Nomenclatura Organizada', desc: 'Padrão consistente de nomes que facilita análise: Cliente_Objetivo_Público_Data. Nunca mais se perca.' },
]

const dnaItems = [
  { titulo: 'Extração Automática', desc: 'Alicia analisa site, redes sociais e materiais para entender profundamente o negócio do cliente.' },
  { titulo: 'USPs Identificadas', desc: 'Descobre e documenta diferenciais competitivos únicos que serão usados em todas as campanhas.' },
  { titulo: 'Tom de Voz Definido', desc: 'Formal ou casual? Técnico ou simples? Alicia mantém consistência em toda comunicação.' },
  { titulo: 'Personas Detalhadas', desc: '"Maria, 38 anos, mãe, classe B+, busca praticidade". Avatares precisos para cada segmento.' },
  { titulo: 'Funil Personalizado', desc: 'Estratégias específicas: topo (awareness), meio (consideração) e fundo (conversão) adaptadas ao nicho.' },
  { titulo: 'Palavras-Chave do Negócio', desc: 'Termos e expressões específicas do cliente que tornam a comunicação autêntica e relevante.' },
  { titulo: 'Base Sólida para Tudo', desc: 'DNA vira a fundação: toda copy, segmentação e estratégia parte dessa compreensão profunda.' },
]

const relatoriosItems = [
  { titulo: 'Dossiê Diário WhatsApp', desc: 'Toda manhã às 8h: resumo de leads reais, connect rate, CPL verdadeiro e principais conversas.' },
  { titulo: 'Análise Semanal', desc: 'Sexta-feira: comparativo com semana anterior, tendências identificadas e sugestões para próxima semana.' },
  { titulo: 'Report Mensal Completo', desc: 'Visão macro: ROI, CAC, LTV, sazonalidades, benchmarks e planejamento estratégico.' },
  { titulo: 'Top & Flop Automático', desc: '3 melhores e 3 piores: campanhas, anúncios, públicos e criativos rankeados por performance.' },
  { titulo: 'CPL Real vs Meta', desc: 'Meta diz R$15, WhatsApp mostra R$45. Alicia cruza dados e mostra o custo verdadeiro por lead qualificado.' },
  { titulo: 'Alertas de Anomalia', desc: '"⚠️ CTR caiu 40% hoje" ou "🚀 Conversões 3x acima da média". Notificações do que realmente importa.' },
  { titulo: 'Dados Organizados', desc: 'Todas as métricas importantes em um só lugar: spend, impressões, cliques, leads, CPL, ROAS, tudo mastigado.' },
]

const otimizacaoItems = [
  { titulo: 'Execução Sob Comando', desc: 'Relatório sugere ação? Digite "Alicia, pause as campanhas com CPL acima de R$50" e pronto.' },
  { titulo: 'Scale Controlado', desc: '"Alicia, duplique a campanha X e aumente o budget em 30%". Escalonamento sem quebrar performance.' },
  { titulo: 'Redistribuição Manual', desc: '"Mova R$100 da campanha A para campanha B". Controle total sobre onde o dinheiro é investido.' },
  { titulo: 'Pausar e Ativar', desc: '"Pause todos os anúncios do conjunto Y" ou "Reative a campanha de remarketing". Simples e direto.' },
  { titulo: 'Duplicação Inteligente', desc: '"Duplique o melhor anúncio com novo público". Alicia copia o que funciona e testa variações.' },
  { titulo: 'Ajustes Rápidos', desc: '"Altere o budget da campanha para R$200/dia". Mudanças instantâneas sem entrar no Meta Ads.' },
  { titulo: 'Histórico de Ações', desc: 'Tudo registrado: quem pediu, quando foi feito, qual era o status antes e depois. Controle total.' },
]

const insightsItems = [
  { titulo: 'Respostas Instantâneas', desc: '"Qual meu ROAS hoje?" "Quantos leads vieram ontem?" Respostas em segundos direto no WhatsApp.' },
  { titulo: 'Análise de Funil', desc: '"Onde estou perdendo pessoas?" Alicia mostra: impressões → cliques → leads → conversas → vendas.' },
  { titulo: 'Comparativos Diretos', desc: '"Como está essa semana vs semana passada?" Números claros mostrando evolução e tendências.' },
  { titulo: 'Diagnóstico de Problemas', desc: '"Por que conversões caíram?" Alicia investiga: criativo cansou, público saturou, frequency alta.' },
  { titulo: 'Previsões Baseadas em Dados', desc: '"Se continuar assim, vai gastar R$X até sexta" ou "Precisa de X leads para bater a meta".' },
  { titulo: 'Benchmarks do Segmento', desc: '"Seu CPL está 30% abaixo da média de clínicas". Contexto para entender se está indo bem ou mal.' },
  { titulo: 'Memória Completa', desc: '"Qual foi nosso melhor mês?" "Quando testamos vídeos?" Alicia lembra de todo histórico da conta.' },
]
</script>
