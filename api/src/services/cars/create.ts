import { CarEntity } from '../../typeorm/entity/Car'
import type { Car } from '.'

export class CreateCarService {
	private entity:CarEntity

	constructor () {
		this.entity = new CarEntity()
	}

	async execute(car:Car) {
		try {
			this.entity.manufacturer = car.manufacturer
			this.entity.model = car.model
			this.entity.description = car.description
			this.entity.cambioMode = car.cambioMode
			this.entity.fuelType = car.fuelType
			this.entity.horsePower = car.horsePower
			this.entity.igniteTime = car.igniteTime
			this.entity.maxSpeed = car.maxSpeed
			this.entity.maxPassengers = car.maxPassengers
			this.entity.rentPrice = car.rentPrice
			this.entity.thumbs = car.thumbs.join(' ')

			return await this.entity.save()
		} catch (error) {
			throw error
		}
	}
}
