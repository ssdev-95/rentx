import { Request, Response } from 'express'
import { CreateCustomerService } from '../../services/customers/create'

export class CreateCustomerController {
  async handle(req: Request, res: Response) {
    const service = new CreateCustomerService()

    const [firstName, lastName] = String(req.body.username).split(' ')

    const response = await service.execute({
      avatar: req.body.avatar,
      email: req.body.email,
      password: req.body.password,
      cnh: Number(req.body.cnh),
      firstName,
      lastName,
    })

    return res.json(response)
  }
}
