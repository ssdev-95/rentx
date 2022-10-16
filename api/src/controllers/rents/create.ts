import { Request, Response } from 'express'
import { CreateRentService } from '../../services/rents/create'

export class CreateRentController {
	async handle(req:Request, res:Response) {
		try {
			const rentService = new CreateRentService()
			const carId = req.params.id

			const rentData = {
				carId,
				customerId: req.body.customerId,
				startRent: req.body.startRent,
				endRent: req.body.endRent
			}

			const rent = await rentService.execute(rentData)

			return res.json({ rent })
		} catch (error) {
			console.error(error)

			return res.status(666).json({
				error: 'Couldn\'t rent a car, try again later'
			})
		}
	}
}
