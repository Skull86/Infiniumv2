<template>
  <div
    class="flex justify-center items-center min-h-screen bg-brand-dark text-brand-light"
  >
    <div class="flex flex-col">
      <h1 class="text-center text-5xl font-bold py-10">Entra em Infinium</h1>
      <img class="w-20 self-center" src="/src/assets/infinium_logo.png" />
      <p class="font-bold text-sm py-2">E-mail</p>
      <input class="rounded-md px-2 py-1 text-brand-dark focus:outline-none" />
      <p class="font-bold text-sm py-2">Palavra-passe</p>
      <div class="relative w-full">
        <input
          class="w-full rounded-md px-2 py-1 focus:outline-none text-brand-dark"
        />
        <svg
          class="absolute w-6 h-6 top-1 right-1 cursor-pointer stroke-brand-dark"
          fill="none"
          stroke="CurrentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      </div>
      <a
        class="text-sm text-center rounded-sm py-5 font-bold text-brand-redLight cursor-pointer hover: duration-200 hover:scale-105"
        >Esqueceste-te da palavra-passe?</a
      >
      <button
        class="text-center font-bold bg-brand-redLight text-brand-light rounded-xl m-5 cursor-pointer hover: py-1 mt-4 duration-200 hover:scale-105"
      >
        Entrar
      </button>
      <p class="text-center">
        Não tens conta?
        <a
          class="text-center cursor-pointer font-bold text-brand-redLight hover: py-1 mt-4"
          >Cria uma aqui</a
        >
      </p>
    </div>
  </div>
</template>
