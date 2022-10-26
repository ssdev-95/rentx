import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface Rent {
  id: string
	customerId: string
	carId: string
	startRent: string
	endRent: string
}

export const useRentsStore = defineStore('rent', {
    state: () => {
        const rents:Rent[] = reactive([])

        return { rents }
    },
    getters: {
        getRents(state) {
            return state.rents
        },
    },
    actions: {
        saveRents(rents:Rent[]) {
            this.rents = [...rents]
        },
        addSingleRent(rent:Rent) {
            this.$state.rents = [
							rent,
							...this.$state.rents
						]
        },
    },
})
