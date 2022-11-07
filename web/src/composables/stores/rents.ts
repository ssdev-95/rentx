import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { api } from '../../services/api'

interface Rent {
  id: string
  customerId: string
  carId: string
  startRent: string
  endRent: string
}

export const useRentStore = defineStore('rent', {
    state: () => {
        const rents: Rent[] = reactive([])

        return { rents }
    },
    getters: {
        getRents(state) {
            return state.rents
        },
    },
    actions: {
        fetchRents(token: string) {
            api
                .get('/rents', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then(({ data }) => {
                    this.$state.rents = data.rents
                })
                .catch(console.log)
        },
        addSingleRent(rent: Rent) {
            this.$state.rents = [rent, ...this.$state.rents]
        },
    },
})
