import { CarEntity } from '../../typeorm/entity/Car'

export class RetrieveCarsService {
	async execute() {
		try {
			const cars = await CarEntity.find()

			return cars.map(car => ({
				...car,
				thumbs: car.thumbs.split(' ')
			}))
		} catch (error) {
			throw error
		}
	}
}
