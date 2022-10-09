<script setup lang="ts">
  import { onMounted, ref } from 'vue'
	import Header from '../components/header.vue'
	import Loading from '../components/loading.vue'

	const loading = ref(true)

	onMounted(() => {
		setTimeout(() => {
		  loading.value = false
		}, 3000)
	})
</script>

<template>
  <main class="min-h-screen w-screen flex flex-col items-center justify-center">
	  <Header />

		<div
		  v-if="loading"
			class="w-full flex-1 flex items-center justify-center"
		>
		  <Loading
			  thumb="bg-[#f0f2f5]"
				classname="bg-gradient-default"
			/>
		</div>
	
	  <div
		  v-else
		  class="w-full flex-1 pb-6 px-5 grid grid-cols-4 mb:grid-cols-1 gap-3"
		>
		  <h1>Rent Page</h1>
		</div>
  </main>
</template>
