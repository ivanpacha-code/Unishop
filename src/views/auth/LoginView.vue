<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <div
  class="w-full min-h-screen
    flex
    flex-col
    justify-center
    items-center">

    <div class="p-8
      rounded-xl
      shadow-lg
      w-full
      max-w-md
      flex
      flex-col
      items-center
      justify-center">

      <!-- Logo -->
      <div
        class="w-30
          aspect-square
          rounded-3xl
          bg-blue-600
          flex
          items-center
          justify-center"
      >
        <span class="text-4xl">🛒</span>
      </div>

      <h1 class="text-3xl font-bold mb-6 text-center text-white">
        Iniciar sesión
      </h1>

      <form class="space-y-4">

        <input
          v-model="email"
          type="email"
          placeholder="Correo electrónico"
          class="w-full p-3 border  border-slate-500
              bg-slate-800
              hover:bg-slate-600 rounded-lg text-white"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          class="w-full p-3 border  border-slate-500
              bg-slate-800
              hover:bg-slate-600 rounded-lg text-white"
        />

        <button
          type="submit"
          class="w-full
            bg-blue-600
            text-center
            font-semibold
            shadow-lg
            hover:bg-blue-700
            transition text-white p-3 rounded-lg  border-slate-400 border-4"
        >
          Acceder
        </button>

        <RouterLink
        to="/register"
        class="block
          mt-4
          rounded-2xl
          text-center
          hover:bg-white/10
          transition text-white
          border-slate-400
          border-4">
          Crear cuenta
        </RouterLink>
        <RouterLink
          to="/"
          class="block
          mt-4
          rounded-2xl
          text-center
          hover:bg-white/10
          transition text-white
          border-slate-400
          border-4"
        >
          ← Volver al inicio
        </RouterLink>

      </form>
    </div>
  </div>
</template>
