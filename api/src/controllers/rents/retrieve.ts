import { Request, Response } from 'express'

import { RetrieveRentsService } from '../../services/rents/retrieve'

export class RetrieveRentsController {
  async handle(req: Request, res: Response) {
    try {
      const service = new RetrieveRentsService()
      const customerId = req.body.customerId

      const rents = service.execute(customerId)
      return res.json({ rents })
    } catch (error) {
      console.error(error)

      return res.status(400).json({
        message: 'Couldn\'t retrieve data at this time',
      })
    }
  }
}
