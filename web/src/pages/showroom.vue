<script setup lang="ts">
  import { onMounted, ref } from 'vue'
	import { useShowroomStore } from '../composables/stores/showroom'

	import Header from '../components/header.vue'
	import Indicator from '../components/indicator.vue'
	import Card from '../components/showroom_card.vue'
	import Loading from '../components/loading.vue'

	const store = useShowroomStore()

	const loading = ref(true)

	onMounted(() => {
		setTimeout(() => {
		  loading.value = false
		}, 3000)
	})
</script>

<template>
  <main
	  v-if="loading"
	  class="min-h-screen flex items-center justify-center"
	>
    <Loading
		  thumb="bg-[#f0f2f5]"
			classname="bg-gradient-default"
		/>
	</main>

  <main
	  v-else
	  class="min-h-screen w-screen flex flex-col items-center justify-center"
	>
		<Header>
		  <strong class="text-zinc-800">RentX</strong>
			<strong class="text-zinc-800">login</strong>
		</Header>

		<div class="flex flex-1">
		  <Indicator active="car" />
  		<div class="h-full flex-1">
    		<h1 class="text-zinc-800 text-2xl font-bold text-left my-6 ml-5 mr-auto">
    		  Available Cars
    		</h1>

    		<div class="w-full flex-1 mb:pb-20 px-5 grid grid-cols-4 mb:grid-cols-1 gap-3">
    		  <Card
					  v-for="car in store.getShowroom"
						:key="car.id"
						:car="car"
					/>
				</div>
			</div>
		</div>
  </main>
</template>
