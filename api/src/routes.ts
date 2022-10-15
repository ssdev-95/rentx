import { Router } from 'express'
import { CreateCarController } from './controllers/cars/create'

const router = Router()

router.post(
	'/cars/seed',
	new CreateCarController().handle
)

export { router }
