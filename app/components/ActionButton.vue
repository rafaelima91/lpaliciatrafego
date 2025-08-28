<template>
  <button
    class="px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-primary bg-gradient-primary text-primary-950 hover:bg-gradient-primary-dark hover:shadow-primary-lg transition-all duration-200 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
  >
    {{ texto }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ texto: string }>()
</script>
