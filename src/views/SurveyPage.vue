<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <h1 class="text-brand-dark font-bold text-5xl mb-10">Infinium Survey</h1>
    <div class="flex flex-col w-1/5">
      <p class="text-brand-dark font-bold">Username</p>
      <input
        class="focus:outline-none bg-brand-grey rounded-md px-2 py-1 mb-4"
        placeholder="Optional"
      />
      <button
        class="font-bold bg-brand-dark text-brand-light rounded-md py-1 hover:bg-brand-darkLight"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
</script>
