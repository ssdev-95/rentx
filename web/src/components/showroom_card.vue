<script setup lang="ts">
  import { PhLightning } from 'phosphor-vue'
  import { formatCurrency } from '../utils/format'
  import { Car } from '../custom-types.d'

  const { car } = defineProps<{ car: Car }>()
  const href = `/car/${car.id}`
</script>

<template>
  <router-link
    :to="href"
    class="mb:w-full flex md:flex-col-reverse items-center justify-between bg-white rounded p-4"
  >
    <div class="w-full mb:w-1/2 flex mb:flex-col gap-3 text-left">
      <p class="text-zinc-700">
        {{ car.manufacturer }}

        <strong class="block">
          {{ car.model }}
        </strong>
      </p>

      <div class="w-full flex items-center justify-start">
        <p class="text-zinc-700">
          Daily

          <strong class="block">
            {{ formatCurrency(car.rentPrice) }}
          </strong>
        </p>

        <PhLightning class="text-zinc-400 ml-6 md:ml-auto" size="28" />
      </div>
    </div>

    <div class="w-full mb:w-1/2">
      <img class="w-full" :src="car.thumbs[0]" alt="" />
    </div>
  </router-link>
</template>
