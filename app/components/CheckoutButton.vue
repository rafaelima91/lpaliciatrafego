<template>
  <button
    :class="[
      'w-full md:w-auto px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg',
      cor === 'primary'
        ? 'bg-gradient-to-r from-primary-400 to-primary-600 text-white hover:from-primary-500 hover:to-primary-700'
        : 'bg-white border-2 border-primary-400 text-primary-900 hover:bg-primary-50'
    ]"
  >
    {{ texto }}
  </button>
</template>

<script setup>
defineProps({
  texto: String,
  cor: {
    type: String,
    default: 'primary',
  },
})
</script>
