<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <div
      v-if="!showingQuestions"
      class="w-full flex flex-col justify-center items-center"
    >
      <h1
        class="text-brand-dark font-bold text-5xl mb-10 cursor-pointer"
        @click="showEasterEgg = !showEasterEgg"
      >
        Infinium Survey
      </h1>
      <div class="flex flex-col w-1/5">
        <p class="text-brand-dark font-bold">Username</p>
        <input
          class="focus:outline-none bg-brand-grey rounded-md px-2 py-1 mb-4"
          placeholder="Optional"
        />
        <button
          class="font-bold bg-brand-dark text-brand-light rounded-md py-1 hover:bg-brand-darkLight"
          @click="showingQuestions = true"
        >
          Start
        </button>
      </div>
      <p v-if="showEasterEgg">Luís é o melhor programador do mundo!</p>
    </div>
    <div v-if="showingQuestions">
      <h2 class="font-bold text-xl text-center mb-12">Question 1/10</h2>
      <h1 class="font-bold text-4xl mb-8">Are you PRO in CS:GO?</h1>
      <div class="flex space-x-8 justify-center">
        <button
          class="font-bold text-brand-light bg-brand-dark rounded-md w-1/3 py-1 text-lg hover:bg-brand-darkLight"
        >
          Yes
        </button>
        <button
          class="font-bold text-brand-dark rounded-md w-1/3 py-1 text-lg border-2 border-brand-dark hover:bg-brand-grey"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const showEasterEgg = ref(false)

  const showingQuestions = ref(false)
</script>
