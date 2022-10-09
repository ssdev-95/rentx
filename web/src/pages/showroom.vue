<script setup lang="ts">
  import { onMounted, ref } from 'vue'
	import { useShowroomStore } from '../composables/stores/showroom'

	import Header from '../components/header.vue'
	import Card from '../components/showroom_card.vue'
	import Loading from '../components/loading.vue'

	const store = useShowroomStore()

	const loading = ref(true)

	onMounted(() => {
	  store.fetchShowroom()

		setTimeout(() => {
		  loading.value = false
		}, 3000)
	})
</script>

<template>
  <main class="min-h-screen w-screen flex flex-col items-center justify-center">
	  <Header />

		<h1 class="text-zinc-800 text-2xl font-bold text-left my-6 ml-5 mr-auto">
		  Available Cars
		</h1>

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
	  	<Card
			  v-for="car in store.getShowroom"
				:key="car.id"
				:car="car"
			/>
		</div>
  </main>
</template>
