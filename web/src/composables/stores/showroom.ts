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
			}
		},
		actions: {
			fetchShowroom() {
				this.cars = [...cars]
				console.log(this.cars)
		 }
		}
	}
)
