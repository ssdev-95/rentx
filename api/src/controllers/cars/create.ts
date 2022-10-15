import { Request, Response } from 'express'

import { CreateCarService } from '../../services/cars/create'
import { cars } from '../../db'

export class CreateCarController {
	async handle(_req:Request, res:Response) {
		try {
			const promises = cars.map(car => {
				const service = new CreateCarService()
				return service.execute(car)
			})

			const results = await Promise.all(promises)

			return res.json({ results })
		} catch (error) {
			throw error
		}
	}
}
