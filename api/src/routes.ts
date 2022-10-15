import { Router } from 'express'
import { CreateCarController } from './controllers/cars/create'
import { RetrieveCarsController } from './controllers/cars/retrieve'

const router = Router()

router.post(
	'/cars/seed',
	new CreateCarController().handle
)

router.get(
	'/cars',
	new RetrieveCarsController().handle
)

export { router }
