<template>
  <a
    v-if="isCheckoutAnchor"
    href="#checkout"
    @click.prevent="scrollToCheckout"
    class="px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-primary bg-gradient-primary text-primary-950 hover:bg-gradient-primary-dark hover:shadow-primary-lg transition-all duration-200 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 inline-block text-center"
  >
    {{ texto }}
  </a>
  <button
    v-else
    class="px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-primary bg-gradient-primary text-primary-950 hover:bg-gradient-primary-dark hover:shadow-primary-lg transition-all duration-200 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
  >
    {{ texto }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ texto: string }>()
const isCheckoutAnchor = [
  'Escalar minha operação agora!',
  'Quero isso pra minha agência'
].includes(props.texto)

function scrollToCheckout(e: Event) {
  const el = document.getElementById('checkout')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
