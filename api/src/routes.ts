import { Router } from 'express'
import { CreateCarController } from './controllers/cars/create'
import { RetrieveCarsController } from './controllers/cars/retrieve'
import { CreateCustomerController } from './controllers/customers/create'
//import { ensureAuthenticated } from './middlewares/ensure-authenticated'

import { CreateRentController } from './controllers/rents/create'

const router = Router()

router.post('/cars/seed', new CreateCarController().handle)

router.get('/cars', new RetrieveCarsController().handle)

router.post('/auth', new CreateCustomerController().handle)

router.post(
	'/rents/:id',
	new CreateRentController().handle
)

export { router }
