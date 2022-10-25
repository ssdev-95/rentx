import { reactive } from 'vue'
import { defineStore } from 'pinia'

import { api } from '../../services/api'
import { Car } from '../../custom-types.d'

export const useShowroomStore = defineStore('showroom', {
    state: () => {
        const cars: Car[] = reactive([])
        return { cars }
    },
    getters: {
        getShowroom(state) {
            return state.cars
        },
        getCarById(state) {
            return (carId: string) => {
                const storedCar = state.cars.find((item) => item.id === carId)

                if (!storedCar) {
                    let car: Car = {} as Car

                    api
                        .get<{ car: Car }>(`/cars/${carId}`)
                        .then(({ data }) => {
                            car = { ...data.car }
                        })
                        .catch(console.log)
                    console.log(car)
                    return car
                }

                return storedCar
            }
        },
    },
    actions: {
        fetchShowroom() {
            api
                .get<{ cars: Car[] }>('/cars')
                .then(({ data }) => {
                    const cars = data.cars
                    this.cars = [...cars]
                })
                .catch(console.log)
        },
    },
})
