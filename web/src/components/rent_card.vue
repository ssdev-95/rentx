<script setup lang="ts">
  import { PhDrop, PhArrowRight } from 'phosphor-vue' 
  import { useShowroomStore } from '../composables/stores/showroom'
	import { formatDate, formatCurrency } from '../utils/format'

  const { rent } = defineProps<{ rent: { carId, startRent, endRent }}>()
	const car = useShowroomStore().getCarById(rent.carId)
</script>

<template>
  <div class="flex flex-col gap-2">
	  <div class="bg-white flex items-center justify-center p-4">
		  <div class="flex flex-col w-[40%] gap-5">
			  <p class="text-left text-zinc-400 text-sm">
				  {{car.manufacturer}}

					<strong class="block text-zinc-600 text-lg -mt-[5px]">
					  {{car.model}}
					</strong>
				</p>

				<div class="w-full flex items-center justify-between">
				  <p class="text-left text-zinc-400 text-sm">
					  RENTAL

						<strong class="block text-zinc-600 text-lg -mt-[5px]">
						  {{formatCurrency(car.rentPrice)}}
						</strong>
					</p>

					<PhDrop
					  class="text-2xl text-zinc-400"
						weight="bold"
					/>
				</div>
			</div>

			<div class="flex-1 flex items-center justify-center">
			  <img
				  :src="car.thumbs[0]"
					class="w-[80%]"
					alt=""
				/>
			</div>
		</div>

		<div class="flex items-center justify-between bg-white p-4">
		  <span class="text-zinc-400 text-sm">
			  RENTAL PERIOD
			</span>

			<div class="flex w-[60%] items-center justify-around">
			  <strong class="text-zinc-600 mb:text-sm">
				  {{formatDate(rent.startRent)}}
				</strong>

				<PhArrowRight
				  class="text-2xl text-zinc-600"
					weight="bold"
				/>

			  <strong class="text-zinc-600 mb:text-sm">
				  {{formatDate(rent.endRent)}}
				</strong>
			</div>
		</div>
	</div>
</template>
