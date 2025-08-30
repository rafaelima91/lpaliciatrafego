<template>
  <div class="w-full">
      <h4 class="text-xl md:text-2xl font-bold text-primary-900 mb-4">{{ titulo }}</h4>
    <div class="flex items-center gap-4">
        <button @click="prev" class="p-2 rounded-full bg-primary-900 text-white hover:bg-primary-800 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg></button>
      <div class="flex overflow-x-auto no-scrollbar snap-x gap-4 w-full" ref="carousel" @scroll="handleScroll">
        <div v-for="(item, idx) in displayItems" :key="idx" class="snap-center min-w-[240px]">
          <slot :item="item" />
        </div>
      </div>
        <button @click="next" class="p-2 rounded-full bg-primary-900 text-white hover:bg-primary-800 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
const props = defineProps<{ titulo: string, items: any[] }>()
const carousel = ref<HTMLElement | null>(null)
const itemWidth = 260
const displayItems = computed(() => [...props.items, ...props.items])

function prev() {
  if (carousel.value) carousel.value.scrollBy({ left: -itemWidth, behavior: 'smooth' })
}
function next() {
  if (carousel.value) carousel.value.scrollBy({ left: itemWidth, behavior: 'smooth' })
}

function handleScroll() {
  if (!carousel.value) return
  const maxScroll = carousel.value.scrollWidth / 2
  if (carousel.value.scrollLeft >= maxScroll) {
    carousel.value.scrollLeft -= maxScroll
  } else if (carousel.value.scrollLeft <= 0) {
    carousel.value.scrollLeft += maxScroll
  }
}

onMounted(() => {
  nextTick(() => {
    if (carousel.value) carousel.value.scrollLeft = 0
  })
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
