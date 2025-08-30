<template>
  <div class="bg-white border border-primary-100 rounded-xl p-4">
    <button @click="open = !open" class="w-full flex justify-between items-center text-left">
      <span class="font-semibold text-primary-900">{{ question }}</span>
      <svg :class="{'rotate-180': open}" class="h-5 w-5 text-primary-700 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
    </button>
    <div v-if="open" class="mt-2 text-primary-700 text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ question: String })
const open = ref(false)
</script>

<style scoped>
button { outline: none; }
</style>
