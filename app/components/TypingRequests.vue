<template>
  <div class="flex flex-col gap-4">
    <div class="bg-primary-900/60 border border-primary-400 rounded-lg px-4 py-3 min-h-[2.5rem]">
      <span class="text-primary-50 font-mono text-base md:text-lg">
        <template v-if="requests.length">
          {{ staticText }}<span class="inline-block">{{ animatedWord }}</span><span v-if="showCursor" class="inline-block animate-blink align-baseline">|</span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const requests = [
  'suba uma de vendas para o cliente QQQ, para seguidores do insta, com orçamento diário de X',
  'qual o custo por lead do cliente XXX nas últimas duas semanas?',
  'preciso do relatório do último mês do cliente YYY',
  'pause o anúncio T da campanha J, por favor'
]
const current = ref(0)
const staticText = ref('')
const animatedWord = ref('')
const showCursor = ref(true)
let wordIndex = 0
let charIndex = 0
let timeout: any

function splitRequest(req: string) {
  const words = req.trim().split(' ')
  const lastWord = words.pop() || ''
  return {
    static: words.join(' ') + (words.length ? ' ' : ''),
    last: lastWord
  }
}

function typeWord() {
  const { static: staticPart, last: lastWord } = splitRequest(requests[current.value])
  staticText.value = staticPart
  if (charIndex < lastWord.length) {
    animatedWord.value = lastWord.slice(0, charIndex + 1)
    charIndex++
    timeout = setTimeout(typeWord, 120)
  } else {
    setTimeout(() => {
      eraseWord()
    }, 1200)
  }
}
function eraseWord() {
  const { last: lastWord } = splitRequest(requests[current.value])
  if (charIndex > 0) {
    charIndex--
    animatedWord.value = lastWord.slice(0, charIndex)
    timeout = setTimeout(eraseWord, 60)
  } else {
    current.value = (current.value + 1) % requests.length
    setTimeout(() => {
      charIndex = 0
      typeWord()
    }, 600)
  }
}
onMounted(() => {
  charIndex = 0
  typeWord()
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})
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
