<template>
  <div
    class="min-h-screen bg-brand-dark flex flex-col items-center justify-center space-y-2"
  >
    <p class="text-brand-light">Insira o seu nome</p>
    <input v-model="myName" class="focus:outline-none px-2" />
    <p class="text-brand-light">O seu nome é : {{ myName }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const myName = ref('')
</script>
