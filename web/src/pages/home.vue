<script setup lang="ts">
  import { cars } from '../../db.ts'
</script>

<template>
  <main
    class="min-h-screen w-screen max-w-[1248px] flex items-center justify-center gap-6 mb:flex-col bg-zinc-900"
  >
    <section
      class="w-[300px] mb:w-full flex flex-col md:items-start gap-3 text-zinc-100 mb:max-w-[300px]"
    >
      <img
        class="w-48 mb:mx-auto mb:mt-16"
        src="../assets/logo.svg"
        alt="RentX"
      />

      <h1 class="text-3xl font-black mb:text-center text-left mt-16">
        RENT A CAR SIMPLY AND EASY
      </h1>

      <p class="mb:my-6 mt-3 mb-6 mb:text-center text-left">
        Many models to you safely drive, with confort and safety
      </p>

      <router-link
        to="/showroom"
        class="bg-red-600 flex-none px-8 py-5 rounded hover:bg-red-500"
      >
        Start now
      </router-link>
    </section>

    <div
      class="md:min-h-[400px] flex-[0.8] flex items-center justify-center mb:mt-16 md:bg-grade-red md:bg-no-repeat md:bg-contain md:bg-center"
    >
      <img
        class="mb:w-[350px] w-full"
        src="https://i.ibb.co/tcwhDkK/audi-q3.png"
        alt="silver audi q3 perpective image"
      />
    </div>
  </main>
</template>
