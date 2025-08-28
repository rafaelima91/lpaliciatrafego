<template>
  <div class="rounded-xl border border-secondary-800 bg-dark shadow-md overflow-hidden flex flex-col items-center p-0 md:p-0 transition-all duration-300">
    <div class="flex items-center gap-1 mb-2 w-full px-4 pt-3">
      <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
      <span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
    </div>
    <div class="w-full max-w-4xl aspect-video">
      <iframe
        :src="embedUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full h-full rounded-b-xl bg-black"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true
  }
})
const embedUrl = `https://www.youtube.com/embed/${props.videoId}`
</script>
