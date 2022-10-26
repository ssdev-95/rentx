<script setup lang="ts">
  import { PhDrop, PhArrowRight } from 'phosphor-vue' 
  import { useShowroomStore } from '../composables/stores/showroom'
  const { rent } = defineProps<{ rent: { carId, startRent, endRent }}>()
	const car = useShowroomStore().getCarById(rent.carId)
</script>

<template>
  <div>
	  <div>
		  <div>
			  <p>
				  {{car.manufacturer}}

					<strong>
					  {{car.model}}
					</strong>
				</p>

				<div>
				  <p>
					  RENTAL

						<strong>
						  $ {{car.rentPrice}}
						</strong>
					</p>

					<PhDrop
					  class="text-2xl text-zinc-800"
						weight="bold"
					/>
				</div>
			</div>

			<div>
			  <img :src="car.thumbs[0]" alt="" />
			</div>
		</div>

		<div>
		  <span>RENTAL PERIOD</span>

			<div>
			  <span>{{new Date(rent.startRent)}}</span>

				<PhArrowRight
				  class="text-2xl text-zinc-800"
					weight="bold"
				/>

			  <span>{{new Date(rent.endRent)}}</span>
			</div>
		</div>
	</div>
</template>
