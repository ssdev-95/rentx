<script setup lang="ts">
  import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import { PhCaretLeft, PhUser, PhGauge, PhArrowUp, PhDrop, PhGitBranch, PhHorse } from 'phosphor-vue'
	import { useShowroomStore } from '../composables/stores/showroom'

	import Header from '../components/header.vue'
	import ABadge from '../components/attribute-badge.vue'
	import Tab from '../components/tab.vue'
	import Loading from '../components/loading.vue'
	import Indicator from '../components/indicator.vue'
	import Modal from '../components/modal.vue'

	const loading = ref(true)
	const isModalOpen = ref(true)

	const route = useRoute()

	const carId = route.params.id
	const car = useShowroomStore().getCarById(carId)

	const handleOpenModal = () => {
	  isModalOpen.value = true
	}

	const handleCloseModal = () => {
	  isModalOpen.value = false
	}

	onMounted(() => {
		setTimeout(() => {
		  loading.value = false
		}, 3000)
	})
</script>

<template>
  <main
	  v-if="loading"
	  class="min-h-screen w-screen flex items-center justify-center"
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
		  <div class="flex gap-5 items-center">
			  <router-link to="/showroom">
	  		  <PhCaretLeft
   				  size="16"
					  weight="bold"
					  class="text-zinc-500"
				  />
				</router-link>

			  <p class="text-zinc-400 text-xs text-left">
				  <span class="uppercase">
					  {{car.manufacturer}}
					</span>

					<strong class="text-lg block mt-1 text-zinc-800">
					  {{car.model}}
					</strong>                                   
				</p>

				<p class="text-zinc-400 text-xs text-left">
				  RENTAL
					<strong class="text-lg block mt-1 text-red-500">
					  {{car.rentPrice}}
					</strong>
				</p>
			</div>

		  <strong class="text-zinc-800">login</strong>
		</Header>
	
	  <div class="flex flex-1 w-full">
		  <Indicator active="car" />

			<div class="min-h-full flex-1 flex mb:flex-col mb:pb-14">
			  <div class="md:flex-1 mb:w-full mb:mx-auto mb:mt-10 max-w-[90vw] mb:h-64 p-6 flex items-center justify-center">
				  <img
					  :src="car.thumbs[0]"
						class="w-full"
						alt=""
					/>
				</div>

				<div class="max-w-[90vw] w-[400px] px-6 flex flex-col items-center justify-start p-8 mb:mx-auto mb:gap-5">
				  <div class="grid grid-cols-2 gap-2">
					  <ABadge
						  :label="`${car.maxSpeed}km/h`"
						>
						  <PhGauge
							  size="28"
								class="text-zinc-700"
								weight="bold"
							/>
						</ABadge>

						<ABadge
						  :label="`${car.igniteTime}s`"
						>
						  <PhArrowUp
							  size="28"
								class="text-zinc-700"
								weight="bold"
							/>
						</ABadge>

						<ABadge
						  :label="car.fuelType"
						>
						  <PhDrop
							  size="28"
								class="text-zinc-700"
								weight="bold"
							/>
						</ABadge>

						<ABadge
						  :label="car.cambioMode"
						>
						  <PhGitBranch
							  size="28"
								class="text-zinc-700"
								weight="bold"
							/>
						</ABadge>

						<ABadge
						  :label="`${car.maxPassengers} persons`"
						>
						  <PhUser
							  size="28"
								class="text-zinc-700"
								weight="bold"
							/>
						</ABadge>

						<ABadge
						  :label="`${car.horsePower} HP`"
						>
						  <PhHorse
							  size="28"
								class="text-zinc-700"
								weight="bold"
							/>
						</ABadge>
					</div>

					<div class="w-full mt-4">
					  <Tab :car="car" />
					</div>

					<button
					  class="mt-auto mb:mt-6 bg-red-500 w-full p-5 rounded text-white text-md font-bold"
						@click="handleOpenModal"
					>
					  CHOOSE RENT PERIOD
					</button>
				</div>
			</div>
		</div>
  </main>
	<Modal
	  :isModalOpen="isModalOpen"
		@close="handleCloseModal"
	/>
</template>
