<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { PhPower } from 'phosphor-vue'
	import { useAuthStore } from '../../composables/stores/auth'
	import Loading from '../../components/loading.vue'
  import Header from '../../components/header.vue'
	import Indicator from '../../components/indicator.vue'

	const authStore = useAuthStore()
	const router = useRouter()

	let isLoading = ref(true)

	let timeouts:number[] = []

	function logout() {
	  authStore.removeUser()
		localStorage.removeItem('@rentx:user')
		localStorage.removeItem('@rentx:token')

		timeouts.push(setTimeout(() => {
		  router.push('/me/signin')
		}, 2000))
	}

	onMounted(() => {
	  timeouts.push(setTimeout(() => {
		  isLoading.value = false
		}, 750))
	})
</script>

<template>
  <main
	  v-if="isLoading"
	  class="min-h-screen w-screen flex flex-col items-center justify-center"
	>
		  <Loading
			  thumb="bg-zinc-100"
				classname="bg-gradient-default"
			/>
	</main>

  <main
	  v-else
		class="min-h-screen w-screen flex flex-col items-center justify-center animate-fade-in"
	>
	  <Header>
		  <strong class="text-zinc-800">RentX</strong>

			<strong
			  v-if="!authStore.getUser"
			  class="text-zinc-800"
			>
			  signin
			</strong>
	
			<button
			  v-else
				@click="logout"
				class="text-2xl text-zinc-400"
			>
			  <PhPower weight="bold" />
			</button>
		</Header>

		<div class="flex-1 flex w-full">
		  <Indicator
			  active="car"
				:route="useRoute().path"
			/>
		  <slot></slot>
		</div>
	</main>
</template>
