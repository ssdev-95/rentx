import { Request, Response } from 'express'
import { GetSingleCarService } from '../../services/cars/get-single'

export class GetSingleCarController {
  async handle(req: Request, res: Response) {
    const id = req.params.id
    const service = new GetSingleCarService()

    try {
      const car = await service.execute(id)
      return res.json({ car })
    } catch (error) {
      console.error(error)
      return res.status(404).end(`No data found for id provided: ${id}`)
    }
  }
}
