<template>
  <section class="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-12 bg-hero-yellow">
    <Badge class="mb-6 text-primary-900 border-primary-300 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 bg-opacity-80">Sem limites para escala</Badge>
    <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 text-black animate-fade-in-up max-w-2xl lg:max-w-4xl break-words mx-auto">
      Super poderes para seu gestor de tráfego com nossos agentes de IA
    </h1>
    <p class="text-lg md:text-2xl text-light-soft max-w-2xl mx-auto animate-fade-in-up animation-delay-200 mb-8">
      O primeiro agente de IA que atua no tráfego pago subindo campanhas, otimizando anúncios, gerando relatórios, trazendo insights de otimização e muito mais
    </p>
  <VideoPlayer video-id="dQw4w9WgXcQ" class="mx-auto w-full max-w-4xl" />
  <ActionButton texto="Escalar minha operação agora!" class="mt-8 bg-white text-primary-900 border border-primary-500 shadow-primary hover:bg-primary-100 hover:text-primary-950 rounded-lg" />
  </section>
</template>

<script setup>
import Badge from '~/components/Badge.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
import ActionButton from '~/components/ActionButton.vue'
</script>
