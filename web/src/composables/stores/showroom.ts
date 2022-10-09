import { reactive } from 'vue'
import { defineStore } from 'pinia'

import { cars } from '../../../db'

export type Car = typeof cars[0]

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
				this.cars = [...cars]
		 }
		}
	}
)
