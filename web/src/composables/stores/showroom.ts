import { reactive } from 'vue'
import { defineStore } from 'pinia'

import { api } from '../../services/api'
import { Car } from '../../custom-types.d'

export const useShowroomStore = defineStore(
	'showroom', {
		state: () => {
			let cars:Car[] = reactive([])
			return { cars }
	  },
		getters: {
			getShowroom(state) {
				return state.cars
			},
			getCarById(state) {
				return (carId:string) => state.cars.find(item => item.id === carId)
			}
		},
		actions: {
			fetchShowroom() {
				api.get<{cars:Car[]}>('/cars').then(({ data }) => {
					const cars = data.cars
					this.cars = [...cars]
				}).catch(console.log)
		 }
		}
	}
)
