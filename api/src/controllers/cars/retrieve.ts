import { Request, Response } from 'express'
import { RetrieveCarsService } from '../../services/cars/retrieve'

export class RetrieveCarsController {
	async handle(_req:Request, res:Response) {
		try {
			const service = new RetrieveCarsService()

			const cars = await service.execute()

			return res.json({ cars })
		} catch(error) {
			return res.status(666).json({ err: error })
		}
	}
}
