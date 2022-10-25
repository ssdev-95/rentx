<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { PhCaretRight, PhCalendar } from 'phosphor-vue'

  import type { Car } from '../../custom-types.d'

  const selectedTab = ref('car')

  const { car } = defineProps<{ car: Car }>()

  watch(selectedTab, () => {
    console.log(selectedTab.value)
  })
</script>

<template>
  <header role="radiogroup" class="w-full grid grid-cols-2 gap-2">
    <label
      class="p-2 text-md relative"
      :class="
        selectedTab === 'car'
          ? 'text-zinc-700 font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-500'
          : 'text-zinc-400'
      "
    >
      <p>ABOUT THE CAR</p>
      <input
        type="radio"
        name="tab"
        v-model="selectedTab"
        value="car"
        class="hidden"
      />
    </label>

    <label
      class="p-2 text-md relative"
      :class="
        selectedTab === 'period'
          ? 'text-zinc-700 font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-500'
          : 'text-zinc-400'
      "
    >
      <p>PERIOD</p>
      <input
        type="radio"
        name="tab"
        v-model="selectedTab"
        value="period"
        class="hidden"
      />
    </label>
  </header>

  <div v-if="selectedTab === 'car'" class="w-full min-h-[150px] py-4">
    <p class="text-justify">
      {{ car.description }}
    </p>
  </div>

  <div v-else class="w-full min-h-[150px] py-4">
    <div class="w-full flex gap-4 items-center justify-start">
      <p class="text-left text-sm text-zinc-400">
        FROM

        <span class="block mt-1/2 text-md text-zinc-800"> 18 Aug 2022 </span>
      </p>

      <PhCaretRight size="16" weight="bold" class="text-zinc-400" />

      <p class="text-left text-sm text-zinc-400">
        TO

        <span class="block mt-1/2 text-md text-zinc-800"> 21 Aug 2022 </span>
      </p>

      <button
        class="bg-red-500 p-2 flex items-center justify-center text-white ml-auto"
      >
        <PhCalendar size="20" weight="bold" />
      </button>
    </div>

    <div class="w-full flex items-center justify-between mt-3">
      <p class="text-left text-zinc-400 text-sm">
        TOTAL

        <span class="block mt-1/2 text-md text-zinc-800">
          ${{ car.rentPrice }} x 3 dailys
        </span>
      </p>

      <strong class="text-green-500 text-3xl font-bold">
        $ {{ car.rentPrice * 3 }}
      </strong>
    </div>
  </div>
</template>
