<script setup lang="ts">
  import { useShowroomStore } from '../composables/stores/showroom'

  import BaseLayout from './layouts/default.vue'
  import Card from '../components/showroom_card.vue'

  const store = useShowroomStore()
</script>

<template>
  <BaseLayout>
    <div class="min-h-full flex-1">
      <h1 class="text-zinc-800 text-2xl font-bold text-left my-6 ml-5 mr-auto">
        Available Cars
      </h1>

      <div
        class="w-full flex-1 mb:pb-20 px-5 grid grid-cols-4 mb:grid-cols-1 gap-3"
      >
        <Card v-for="car in store.getShowroom" :key="car.id" :car="car" />
      </div>
    </div>
  </BaseLayout>
</template>
