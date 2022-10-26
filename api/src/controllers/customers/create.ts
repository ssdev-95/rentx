import { Request, Response } from 'express'
import { CreateCustomerService } from '../../services/customers/create'

const COOKIE = process.env.COOKIE

export class CreateCustomerController {
  async handle(req: Request, res: Response) {
    const service = new CreateCustomerService()

		const [firstName, lastName] = req.body.username.split(' ')

    const { token, user } = await service.execute({
			avatar: req.body.avatar,
			email: req.body.email,
			password: req.body.password,
			cnh: Number(req.body.cnh),
			firstName,
			lastName
		})

    res.cookie(COOKIE, token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    })

    return res.json({ user })
  }
}
