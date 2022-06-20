<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen bg-brand-light"
  >
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
          class="focus:outline-none bg-brand-grey rounded-md px-2 py-1 mb-4 focus:bg-transparent focus:ring-2 focus:ring-brand-dark"
          placeholder="Optional"
        />
        <button
          class="font-bold bg-brand-dark text-brand-light rounded-md py-1 hover:bg-brand-darkLight bg-gradient-to-r from-brand-redLight to-brand-red"
          @click="showingQuestions = true"
        >
          Start
        </button>
      </div>
      <p v-if="showEasterEgg">Luís é o melhor programador do mundo!</p>
    </div>
    <div v-if="showingQuestions">
      <h2 class="font-bold text-xl text-center mb-12">
        Question {{ currentQuestion }}/10
      </h2>
      <h1 class="font-bold text-4xl mb-8">
        {{ myQuestions[currentQuestion - 1].body }}
      </h1>
      <div class="flex space-x-8 justify-center">
        <button
          @click="addToAnswers(currentQuestion, true)"
          class="font-bold text-brand-light bg-brand-dark rounded-md w-1/3 py-1 text-lg hover:bg-brand-darkLight"
        >
          {{ myQuestions[currentQuestion - 1].affirmative }}
        </button>
        <button
          @click="addToAnswers(currentQuestion, false)"
          class="font-bold text-brand-dark rounded-md w-1/3 py-1 text-lg border-2 border-brand-dark hover:bg-brand-grey"
        >
          {{ myQuestions[currentQuestion - 1].negative }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const showEasterEgg = ref(false)

  const showingQuestions = ref(false)

  const currentQuestion = ref(1)

  const answers = ref<{ id: number; isAffirmative: boolean }[]>([])

  function addToAnswers(id: number, isAffirmative: boolean) {
    answers.value.push({ id, isAffirmative })
    currentQuestion.value += 1
    console.log('Answers: ', answers.value)
  }

  type Question = {
    id: number
    body: string
    affirmative: string
    negative: string
  }

  const myQuestions: Question[] = [
    {
      id: 1,
      body: 'Do you enjoy playing online games?',
      affirmative: 'Yes',
      negative: 'No'
    },
    {
      id: 2,
      body: 'Do you prefer singleplayer or multiplayer games?',
      affirmative: 'Single',
      negative: 'Multi'
    },
    {
      id: 3,
      body: 'Do you spend more than 5 hours per day playing videogames?',
      affirmative: 'Yes',
      negative: 'No'
    },
    {
      id: 4,
      body: 'Have you ever played CS:GO?',
      affirmative: 'Yes',
      negative: 'No'
    },
    {
      id: 5,
      body: 'Are you pro in CS:GO?',
      affirmative: 'Yes',
      negative: 'No'
    },
    {
      id: 6,
      body: 'When playing videogames are you competitive?',
      affirmative: 'Yes',
      negative: 'No'
    },
    {
      id: 7,
      body: 'When playing have you ever broke something while enraged?',
      affirmative: 'Yes',
      negative: 'No'
    },
    {
      id: 8,
      body: 'What kind of games do you prefer, FPS or RTS?',
      affirmative: 'FPS',
      negative: 'RTS'
    },
    {
      id: 9,
      body: 'Do you prefer playing in a computer or in a console?',
      affirmative: 'PC',
      negative: 'Console'
    },
    {
      id: 10,
      body: 'Have you ever played WoW?',
      affirmative: 'Yes',
      negative: 'No'
    }
  ]
</script>
