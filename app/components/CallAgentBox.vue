<template>
  <div class="w-full max-w-xl bg-gradient-to-br from-primary-900/80 to-primary-400/60 border-2 border-dashed border-primary-300 rounded-xl shadow-lg shadow-black/40 p-6 flex flex-col gap-2">
    <h3 class="text-lg md:text-xl font-bold text-primary-100 mb-1">{{ titulo }}</h3>
    <slot>
      <p class="text-base md:text-lg text-primary-50 font-mono whitespace-pre-line">
        {{ texto }}<span class="inline-block animate-blink align-baseline">|</span>
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ titulo: string, texto: string }>()
</script>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s steps(1) infinite;
}
</style>
