<template>
  <div>
    <section id="checkout" class="w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-primary-100 to-primary-600">
    <div class="w-full max-w-6xl flex flex-col items-center">
      <h2 class="text-3xl md:text-4xl font-black text-primary-900 font-display mb-2 text-center">Garanta sua Agência com IA no Piloto Automático</h2>
      <p class="text-lg md:text-xl text-primary-800 mb-10 text-center max-w-2xl">Escolha como quer transformar sua operação: aprenda a construir ou receba tudo pronto</p>
      <div class="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-stretch justify-center">
        <!-- Card DIY -->
        <div class="flex-1 min-w-[320px] max-w-md bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col border border-primary-200">
          <span class="text-primary-900 font-bold text-lg mb-1">DIY - Faça Você Mesmo</span>
          <div class="flex items-end gap-2 mb-2">
            <span class="text-3xl md:text-4xl font-black text-primary-900">R$ 1.997,00</span>
            <span class="text-primary-700 text-base mb-1">ou 12x de R$ 199,70</span>
          </div>
          <span class="block text-primary-800 font-semibold mb-4 mt-2">O que você vai receber:</span>
          <div class="flex flex-col gap-3 mb-6">
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Passo a passo completo da construção</div>
                <div class="text-primary-700 text-sm">Todo o processo documentado e explicado</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">+20 Agentes prontos e integrados</div>
                <div class="text-primary-700 text-sm">Prompts testados e validados em produção</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Rastreamento WhatsApp completo</div>
                <div class="text-primary-700 text-sm">Integração com CPL real e connect rate</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Masterclass Engenharia de Prompts</div>
                <div class="text-primary-700 text-sm">Como criar e otimizar agentes de IA</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">1 ano de acesso e atualizações</div>
                <div class="text-primary-700 text-sm">Todas as melhorias futuras incluídas</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Comunidade exclusiva</div>
                <div class="text-primary-700 text-sm">Tire dúvidas direto com quem criou</div>
              </div>
            </div>
          </div>
          <CheckoutButton cor="primary" texto="QUERO APRENDER E IMPLEMENTAR" class="mt-auto" @click.prevent="openForm" />
        </div>
        <!-- Card Pronto -->
        <div class="flex-1 min-w-[320px] max-w-md bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col border border-primary-200">
          <span class="text-primary-900 font-bold text-lg mb-1">Pronto - Receba Tudo Pronto</span>
          <div class="flex items-end gap-2 mb-2">
            <span class="text-3xl md:text-4xl font-black text-primary-900">Sob Consulta</span>
          </div>
          <span class="block text-primary-800 font-semibold mb-4 mt-2">O que você vai receber:</span>
          <div class="flex flex-col gap-3 mb-6">
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Entrega personalizada para sua agência</div>
                <div class="text-primary-700 text-sm">Receba toda a estrutura pronta, adaptada ao seu modelo de negócio, com integrações e fluxos ajustados para sua operação.</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Onboarding e suporte dedicado</div>
                <div class="text-primary-700 text-sm">Treinamento prático para seu time, acompanhamento próximo nos primeiros 30 dias e suporte técnico com calls ao vivo para garantir a adaptação total.</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Alicia funcionando em 24h</div>
                <div class="text-primary-700 text-sm">Instalação e configuração completas</div>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Integração com suas contas</div>
                <div class="text-primary-700 text-sm">Meta Ads + WhatsApp + ClickUp</div>
              </div>
            </div>
            <!-- Bullet: +20 Agentes prontos e integrados -->
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">+20 Agentes prontos e integrados</div>
                <div class="text-primary-700 text-sm">Prompts testados e validados em produção</div>
              </div>
            </div>
            <!-- Bullet: Rastreamento WhatsApp completo -->
            <div class="flex items-start gap-3 bg-primary-50 border border-primary-100 rounded-xl p-3 shadow-sm">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-primary-900 leading-tight">Rastreamento WhatsApp completo</div>
                <div class="text-primary-700 text-sm">Integração com CPL real e connect rate</div>
              </div>
            </div>
          </div>
          <CheckoutButton cor="secondary" texto="QUERO A ESTRUTURA PRONTA" class="mt-auto" @click.prevent="openForm" />
        </div>
      </div>
    </div>

    </section>
    <CheckoutFormModal ref="formModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CheckoutButton from '~/components/CheckoutButton.vue'
import CheckoutFormModal from '~/components/CheckoutFormModal.vue'
const formModal = ref(null)
function openForm() {
  formModal.value?.open()
}
</script>

<style scoped>
/* Personalização extra para o visual do checkout, se necessário */
</style>
