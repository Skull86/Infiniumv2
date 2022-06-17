<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-brand-dark font-bold text-5xl">Infinium TODOs</h1>
    <div class="flex flex-col space-y-2">
      <p class="font-bold text-brand-dark mt-12 text-center">Novo Todo</p>
      <input
        v-model="myNewTodo"
        class="bg-brand-grey rounded-md focus:outline-none px-2 py-1"
      />
      <button
        @click="addToTodos"
        class="bg-brand-dark rounded-md text-brand-light font-bold py-1"
      >
        Adicionar
      </button>
    </div>
    <div class="flex flex-col mt-12 space-y-4 items-center justify-center">
      <h2 class="font-bold text-3xl text-brand-dark">Lista</h2>
      <div
        v-for="(todo, index) in todos"
        class="bg-brand-grey pl-2 pr-12 py-1 rounded-md w-full relative"
      >
        <p class="text-brand-dark truncate">
          {{ todo }}
        </p>
        <button class="absolute top-1 right-0" @click="removeFromTodos(index)">
          <svg
            class="w-6 h-6 stroke-brand-dark"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const myNewTodo = ref('')
  const todos = ref<String[]>([])
  readFromLocalStorage()
  function addToTodos() {
    todos.value.push(myNewTodo.value)
    myNewTodo.value = ''
    saveToLocalStorage()
  }

  function removeFromTodos(index: number) {
    todos.value.splice(index, 1)
    saveToLocalStorage()
  }

  function saveToLocalStorage() {
    localStorage.setItem('Todos', todos.value.toString())
  }

  function readFromLocalStorage() {
    const results = localStorage.getItem('Todos')
    if (!results) {
      return
    }

    todos.value = results.split(',')
  }
</script>
