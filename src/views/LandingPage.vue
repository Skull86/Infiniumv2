<template>
  <div>Landing</div>
  <router-link :to="{ name: 'Login' }">Click me to Login</router-link>
  <router-link :to="{ name: 'Development' }"
    >Click to start development</router-link
  >
  <router-link :to="{ name: 'Todo' }">To do list</router-link>
  <router-link :to="{ name: 'Survey' }">Survey Page</router-link>
</template>
