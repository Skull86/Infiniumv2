<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen bg-brand-light"
  >
    <div>
      <div>{{ myQuestions[0].body }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  const results = ref([])

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

  onMounted(() => {
    results.value = JSON.parse(localStorage.getItem('SurveyAnswers') as string)
  })
</script>
