<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

	import Loading from '../../components/loading.vue'
  import Header from '../../components/header.vue'
	import Indicator from '../../components/indicator.vue'
	let isLoading = ref(true)

	let timeouts:number[] = []

	onMounted(() => {
	  timeouts.push(setTimeout(() => {
		  isLoading.value = false
		}, 3000))
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

			<strong class="text-zinc-800">signin</strong>
		</Header>

		<div class="flex-1 flex w-full">
		  <Indicator active="car" />
		  <slot></slot>
		</div>
	</main>
</template>
