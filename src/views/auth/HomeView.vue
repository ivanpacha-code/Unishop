<template>
  <div
    class="min-h-screen bg-gradient-to-b from-[#0B2A5B] to-[#06152e] flex justify-center"
  >
    <!-- Simulación de pantalla móvil -->
    <main
      class="
        w-full
        max-w-md
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        px-[8%]
        text-white
      "
    >
      <!-- Logo -->
      <div
        class="
          w-[28%]
          max-w-[110px]
          aspect-square
          rounded-[24%]
          bg-[#005EFF]
          flex
          items-center
          justify-center
          shadow-2xl
        "
      >
        <span class="text-2xl">logo</span>
      </div>

      <!-- Título -->
      <h1
        class="
          mt-8
          text-center
          text-4xl
          font-bold
          tracking-wide
        "
      >
        UniShop Wallet
      </h1>

      <!-- Subtítulo -->
      <p class="mt-4 text-center text-slate-300 text-2xl whitespace-nowrap">
        Tu mundo de ventajas,<br>
        siempre contigo
      </p>
      <p class="h-10"></p>
<div class="relative w-80 h-56">

  <!-- Tarjeta trasera  -->
  <div
    class="absolute top-0 left-24 w-64 h-40 rounded-2xl
           bg-slate-200"
  />

  <!-- Tarjeta intermedia -->
  <div
    class="absolute top-4 left-12 w-64 h-40 rounded-2xl
           bg-slate-400"
  />

  <!-- Tarjeta principal -->
  <div
    class="absolute top-8 left-0 w-64 h-40 rounded-2xl
           bg-blue-800"
  >
    <div class="p-5 flex flex-col h-full justify-between">

      <div class="text-2xl">🛒</div>

      <div>
        <h3 class="text-white text-xl font-semibold">
          UniShop Wallet
        </h3>

        <div class="mt-4 space-y-2">
          <div class="h-2 w-28 bg-white/30 rounded-full"></div>
          <div class="h-2 w-40 bg-white/30 rounded-full"></div>
        </div>
      </div>

    </div>
  </div>

</div>
      <!-- Botones -->
      <div class="w-full mt-12 flex flex-col gap-4">

        <RouterLink
          to="/login"
          class="
            w-full
            py-4
            rounded-2xl
            bg-[#005EFF]
            text-center
            font-semibold
            shadow-lg
            hover:bg-blue-700
            transition
          "
        >
          Iniciar sesión
        </RouterLink>

        <RouterLink
          to="/register"
          class="
            w-full
            py-4
            rounded-2xl
            border
            border-[#C0C6D4]
            text-center
            hover:bg-white/10
            transition
          "
        >
          Registrarse
        </RouterLink>

      </div>

    </main>
  </div>
</template>
