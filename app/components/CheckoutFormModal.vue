<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
      <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-primary-600 text-2xl font-bold">&times;</button>
      <h3 class="text-2xl font-bold text-primary-900 mb-6 text-center">Quero saber mais</h3>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block text-primary-900 font-semibold mb-1">Nome</label>
          <input v-model="nome" type="text" required class="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400" />
        </div>
        <div class="mb-4">
          <label class="block text-primary-900 font-semibold mb-1">Telefone</label>
          <input v-model="telefone" type="tel" required class="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400" />
        </div>
        <div class="mb-4">
          <label class="block text-primary-900 font-semibold mb-1">Email</label>
          <input v-model="email" type="email" required class="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400" />
        </div>
        <div class="mb-6">
          <label class="block text-primary-900 font-semibold mb-1">Sua profissão</label>
          <select v-model="profissao" required class="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400">
            <option value="" disabled>Selecione</option>
            <option value="gestor">Gestor de Tráfego</option>
            <option value="agencia">Dono de Agência</option>
            <option value="digital">Demais áreas do digital</option>
          </select>
        </div>
        <button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose, watch } from 'vue'
const props = defineProps({ metodo: String })
const show = ref(false)
const nome = ref('')
const telefone = ref('')
const email = ref('')
const profissao = ref('')

function open() {
  show.value = true
}
function close() {
  show.value = false
}
async function submit() {
  const body = {
    nome: nome.value,
    telefone: telefone.value,
    email: email.value,
    profissao: profissao.value,
    metodo: props.metodo || ''
  }
  await fetch('https://webhooks.qsr.dev.br/webhook/forms-alicia/imersaotp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  window.location.href = 'https://pay.kiwify.com.br/GusB6nV'
  close()
}
defineExpose({ open, close })
// Limpa campos ao abrir
watch(show, (v) => {
  if (v) {
    nome.value = ''
    telefone.value = ''
    email.value = ''
    profissao.value = ''
  }
})
</script>

<style scoped>
</style>
