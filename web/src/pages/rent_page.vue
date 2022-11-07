<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import {
    PhCaretLeft,
    PhUser,
    PhGauge,
    PhArrowUp,
    PhDrop,
    PhGitBranch,
    PhHorse,
  } from 'phosphor-vue'

  import { api } from '../services/api'
  import { useShowroomStore } from '../composables/stores/showroom'
	import { useAuthStore } from '../composables/stores/auth'
	import { useRentStore } from '../composables/stores/rents'

	import BaseLayout from './layouts/default.vue'
  import ABadge from '../components/attribute-badge.vue'
  import Tab from '../components/tab.vue'
  import RentPeriodPicker from '../components/modal/rental_period_picker.vue'
	import CarRented from '../components/modal/rent_successfull.vue'

	const router = useRouter()
  const isPickerOpen = ref(false)
	const hasRentedACar = ref(false)

  const carId = useRoute().params.id
  const car = useShowroomStore().getCarById(carId)


	let rentalPeriod:Date[] = reactive([])

  const handleOpenPicker = () => {
	  if(!useAuthStore().isUserLogged) {
		  alert('Users must sign in prior to rent cars.')
			return setTimeout(() => {
			  router.push('/me/signin')
			}, 1000)
		}

    isPickerOpen.value = true
  }

  const handleClosePicker = (period?:Date[]) => {
    isPickerOpen.value = false

		if(period) {
		  period.forEach((date, index) => {
			  rentalPeriod[index] = date
			})
		}
  }

	const handleRentACar = async () => {
	  const token = localStorage.getItem('@rentx:token')

	  if(rentalPeriod.length < 2) return;

	  const { data } = await api.post(`/rents/${carId}`, {
		  startRent: rentalPeriod[0],
			endRent: rentalPeriod[1]
		}, {
		  headers:{
			  Authorization: `Bearer ${token}`
			}
		})
		
		if(data) {
		  hasRentedACar.value = true
			useRentStore().addSingleRent(data.rent)
		}
	}
</script>

<template>
  <BaseLayout>
      <div class="min-h-full flex-1 flex mb:flex-col mb:pb-14">
        <div
          v-if="!!Object.keys(car).length"
          class="md:flex-1 mb:w-full mb:mx-auto mb:mt-10 max-w-[90vw] mb:h-64 p-6 flex items-center justify-center"
        >
          <img :src="car.thumbs[0]" class="w-full" alt="" />
        </div>

        <div
          class="max-w-[90vw] w-[400px] px-6 flex flex-col items-center justify-start p-8 mb:mx-auto mb:gap-5"
        >
          <div class="grid grid-cols-2 gap-2">
            <ABadge :label="`${car.maxSpeed}km/h`">
              <PhGauge size="28" class="text-zinc-700" weight="bold" />
            </ABadge>

            <ABadge :label="`${car.igniteTime}s`">
              <PhArrowUp size="28" class="text-zinc-700" weight="bold" />
            </ABadge>

            <ABadge :label="car.fuelType">
              <PhDrop size="28" class="text-zinc-700" weight="bold" />
            </ABadge>

            <ABadge :label="car.cambioMode">
              <PhGitBranch size="28" class="text-zinc-700" weight="bold" />
            </ABadge>

            <ABadge :label="`${car.maxPassengers} persons`">
              <PhUser size="28" class="text-zinc-700" weight="bold" />
            </ABadge>

            <ABadge :label="`${car.horsePower} HP`">
              <PhHorse size="28" class="text-zinc-700" weight="bold" />
            </ABadge>
          </div>

          <div class="w-full mt-4">
            <Tab :car="car" :rentalPeriod="rentalPeriod" />
          </div>

          <button
					  v-if="rentalPeriod.length < 2"
            class="mt-auto mb:mt-6 bg-red-600 w-full p-5 rounded text-white text-md font-bold"
            @click="handleOpenPicker"
          >
            CHOOSE RENT PERIOD
          </button>
					<button
					  v-else
					  class="mt-auto mb:mt-6 bg-green-500 w-full p-5 rounded text-white text-md font-bold"
						@click="handleRentACar"
					>
					  RENT THIS CAR
					</button>
        </div>
      </div>
	</BaseLayout>
  <RentPeriodPicker
	  :isOpen="isPickerOpen"
		@close="handleClosePicker"
	/>

	<CarRented :isOpen="hasRentedACar" />
</template>
