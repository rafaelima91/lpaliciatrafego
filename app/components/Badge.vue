<template>
  <span
    class="inline-flex items-center px-4 py-1 rounded-full border border-primary-500 bg-primary-900/10 text-primary-500 font-medium text-sm md:text-base whitespace-nowrap gap-1 transition-all duration-200 shadow-sm"
  >
    <slot />
    <svg v-if="arrow" class="w-4 h-4 ml-1 text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
</template>

<script setup>
defineProps({
  arrow: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* Custom shadow for badge if needed */
</style>
