import { Request, Response } from 'express'
import { CreateCustomerService } from '../../services/customers/create'

const COOKIE = process.env.COOKIE

export class CreateCustomerController {
  async handle(req: Request, res: Response) {
    const service = new CreateCustomerService()

    const { token, user } = await service.execute(req.body)

    res.cookie(COOKIE, token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    })

    return res.json({ user })
  }
}
