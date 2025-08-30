
<template>
  <div class="w-full bg-white/70 rounded-2xl shadow-lg px-3 py-4 md:px-6 md:py-5 transition-all">
    <div class="mb-2 text-center">
  <span class="block text-2xl md:text-3xl font-extrabold text-primary-900 font-display uppercase tracking-tight mb-1">{{ titulo }}</span>
  <span v-if="subtitulo" class="block text-base md:text-lg font-medium text-primary-700 tracking-normal">{{ subtitulo }}</span>
    </div>
    <div class="flex items-center gap-2 md:gap-6 justify-center">
      <button @click="prev" class="group p-1.5 md:p-2.5 rounded-full bg-primary-900/90 text-white shadow-lg hover:bg-primary-700 hover:scale-110 transition-all border-2 border-primary-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <div class="flex overflow-x-auto no-scrollbar snap-x gap-6 w-full py-3" ref="carousel" @scroll="handleScroll">
        <div v-for="(item, idx) in displayItems" :key="idx" class="snap-center min-w-[208px] max-w-[208px] flex justify-center">
          <slot :item="item" />
        </div>
      </div>
      <button @click="next" class="group p-1.5 md:p-2.5 rounded-full bg-primary-900/90 text-white shadow-lg hover:bg-primary-700 hover:scale-110 transition-all border-2 border-primary-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
const props = defineProps<{ titulo: string, subtitulo?: string, items: any[] }>()
const carousel = ref<HTMLElement | null>(null)
const itemWidth = 260
// Para rolagem infinita, duplicamos os itens várias vezes e centralizamos o scroll
const repeatCount = 10 // pode ajustar para mais se quiser mais "folga" na rolagem
const displayItems = computed(() => Array(repeatCount).fill(props.items).flat())

function centerCarousel() {
  if (carousel.value) {
    // Centraliza o scroll no "meio" do carrossel
    const middle = (carousel.value.scrollWidth / repeatCount) * Math.floor(repeatCount / 2)
    carousel.value.scrollLeft = middle
  }
}

function prev() {
  if (carousel.value) carousel.value.scrollBy({ left: -itemWidth, behavior: 'smooth' })
}
function next() {
  if (carousel.value) carousel.value.scrollBy({ left: itemWidth, behavior: 'smooth' })
}

function handleScroll() {
  if (!carousel.value) return
  const sectionWidth = carousel.value.scrollWidth / repeatCount
  const min = sectionWidth * 2
  const max = sectionWidth * (repeatCount - 2)
  if (carousel.value.scrollLeft < min) {
    carousel.value.scrollLeft += sectionWidth * (repeatCount / 2)
  } else if (carousel.value.scrollLeft > max) {
    carousel.value.scrollLeft -= sectionWidth * (repeatCount / 2)
  }
}

onMounted(() => {
  nextTick(() => {
    centerCarousel()
  })
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Animação suave para o carrossel */
.snap-center {
  scroll-snap-align: center;
}
</style>
