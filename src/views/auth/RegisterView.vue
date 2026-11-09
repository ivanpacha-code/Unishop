<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

</script>

<template>
  <div
    class="min-h-screen flex justify-center"
  >
    <main
      class="w-full
        max-w-80
        min-h-screen
        flex
        flex-col
        justify-center
        text-white"
    >
      <!-- Logo -->
      <div class="text-center
        mb-10
        flex
        flex-col
        items-center
        justify-center">

        <div class="w-30
          aspect-square
          rounded-3xl
          bg-blue-600
          flex
          items-center
          justify-center">

          <span class="text-4xl">🛒</span>
        </div>

        <h1 class="mt-6 text-3xl font-bold">
          Crear cuenta
        </h1>

        <p class="mt-2 text-slate-300">
          Empieza a gestionar todas tus tarjetas
        </p>
      </div>

      <!-- Formulario -->
      <form
        class="flex flex-col gap-4"
      >
        <div>
          <label class="block mb-2 text-sm text-slate-300">
            Correo electrónico
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="correo@ejemplo.com"
            class="w-full
              rounded-xl
              border
              border-slate-400
              bg-slate-800
              hover:bg-slate-600
              px-4
              py-3
              text-white
              outline-none"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm text-slate-300">
            Contraseña
          </label>

          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full
              rounded-xl
              border
              border-slate-500
              bg-slate-800
              hover:bg-slate-600
              px-4
              py-3
              text-white
              outline-none"
          />
        </div>

        <div>
          <label class="block mb-2 text-sm text-slate-300">
            Confirmar contraseña
          </label>

          <input
            v-model="confirmPassword"
            type="password"
            placeholder="••••••••"
            class="w-full
              rounded-xl
              border
              border-slate-500
              bg-slate-800
              hover:bg-slate-600
              px-4
              py-3
              text-white"
          />
        </div>

        <button
          type="submit"
          class="mt-2
            w-full
            rounded-xl
            bg-blue-600
            py-4
            font-semibold
            shadow-lg
            transition
            hover:bg-blue-700"
        >
          Crear cuenta
        </button>
      </form>

      <!-- Enlaces -->
        <RouterLink
          to="/login"
          class="block
          mt-4
          rounded-2xl
          text-center
          hover:bg-white/10
          transition text-white
          border-slate-400
          border-4"
        >
          Ya tengo cuenta
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
    </main>
  </div>
</template>
