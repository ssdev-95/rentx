<script setup lang="ts">
  import { PhCar, PhUser, PhHouse } from 'phosphor-vue'

  const { active, route } = defineProps<{ active: 'car' | 'user' | 'rents', route?: string }>()
	console.log(route)
</script>

<template>
  <footer
    class="w-16 md:min-h-full mb:fixed mb:left-0 mb:bottom-0 mb:w-screen mb:h-16 bg-zinc-900 z-10"
  >
    <div
      class="flex md:flex-col gap-8 items-center justify-center h-full w-full py-4 px-4"
    >
      <router-link to="/showroom">
        <PhHouse
          size="24"
          weight="bold"
          :class="active === 'car' ? 'text-white' : 'text-zinc-400'"
        />
      </router-link>

      <router-link to="/rents">
        <PhCar
          size="24"
          weight="bold"
          :class="active === 'rents' ? 'text-white' : 'text-zinc-400'"
        />
      </router-link>

      <router-link to="/me">
        <PhUser
          size="24"
          weight="bold"
          :class="active === 'user' ? 'text-white' : 'text-zinc-400'"
        />
      </router-link>
    </div>
  </footer>
</template>
