<template>
  <section class="w-full bg-primary-600 py-16 px-4" id="faq">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-extrabold text-white mb-8 text-center">Perguntas Frequentes</h2>
      <div class="space-y-4">
        <FaqItem question="Funciona para quais objetivos de campanha?">
          Alicia sobe e otimiza qualquer objetivo de campanha no Meta Ads, exceto promoção de App.
        </FaqItem>
        <FaqItem question="Consegue usar criativos do drive?">
          Sim, a Alicia consegue usar criativos já postados no feed e também criativos novos, extraídos direto do Google Drive. Imagens e Vídeos.
        </FaqItem>
        <FaqItem question="Como a Alicia acessa minha conta do Meta Ads?">
          A Alicia se conecta via API oficial do Meta usando tokens de acesso autorizados por você. Um processo 100% seguro e dentro das políticas do Meta. Você mantém controle total e pode revogar o acesso a qualquer momento pelo próprio Facebook Business Manager.
        </FaqItem>
        <FaqItem question="Preciso saber programar ou mexer em códigos?">
          Não! A versão "Estrutura Pronta" vem configurada, você só precisa cadastrar as contas e fazer os pedidos para a Alicia. Já a versão "Aprenda e Implemente" é para quem quer entender e customizar o sistema, via API da Meta e N8N.
        </FaqItem>
        <FaqItem question="Funciona com contas de qualquer nicho?">
          Sim. A Alicia já funciona para qualquer nicho. Durante o onboarding, ela aprende as especificidades do seu cliente através do processo de DNA, adaptando copy, tom de voz e infos sobre produto/serviço.
        </FaqItem>
        <FaqItem question="E se o Meta mudar alguma regra ou a API?">
          Atualizamos constantemente. Você tem 1 ano de atualizações incluídas. Nosso time monitora mudanças do Meta diariamente e ajusta o sistema antes que impacte sua operação.
        </FaqItem>
        <FaqItem question="Quantas contas/campanhas posso gerenciar?">
          Ilimitado. A Alicia não tem restrição de volume - você pode gerenciar 5, 50 ou 500 contas. A única limitação são os próprios limites da sua Business Manager no Meta.
        </FaqItem>
        <FaqItem question="Como funciona o CPL real do WhatsApp?">
          A Alicia rastreia cada lead desde o clique no anúncio até a conversa no WhatsApp. Ela cruza o CTWACLID com as mensagens recebidas, calculando quantos leads realmente iniciaram conversa, não apenas clicaram. Isso revela o custo real por lead qualificado.
        </FaqItem>
        <FaqItem question="Preciso de alguma ferramenta adicional além da Alicia?">
          Você precisará manter: 1) WhatsApp Business ou API oficial, 2) Conta no Meta Business Manager, 3) Pixel instalado no site (se tiver), 4) N8N para seus fluxos e 5) Banco de dados para armazenar todas as métricas e demais informações. A Alicia integra com todas essas ferramentas mas não as substitui. Opcionalmente, pode conectar com ClickUp/Notion/Trello para gestão de projetos.
        </FaqItem>
        <FaqItem question="Como funciona o suporte técnico?">
          Acesso à comunidade com suporte da equipe e outros usuários, lives tira-dúvidas e vídeos tutoriais.
        </FaqItem>
        <FaqItem question="A Alicia funciona para tráfego no Google Ads também?">
          Atualmente não. A Alicia é especializada em Meta Ads (Facebook e Instagram). Estamos desenvolvendo o módulo para Google Ads, previsto para Q2 2025. Quem comprar agora terá acesso a essa atualização quando lançar.
        </FaqItem>
      </div>
    </div>
  </section>
</template>

<script setup>
import FaqItem from '~/components/FaqItem.vue'
</script>

<style scoped>
/* Personalize o FAQ se desejar */
</style>
