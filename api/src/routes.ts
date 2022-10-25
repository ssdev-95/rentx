import { Router } from 'express'
import { CreateCarController } from './controllers/cars/create'
import { RetrieveCarsController } from './controllers/cars/get-all'
import { GetSingleCarController } from './controllers/cars/get-single'
import { CreateCustomerController } from './controllers/customers/create'
import { CreateRentController } from './controllers/rents/create'
import { RetrieveRentsController } from './controllers/rents/retrieve'

import { ensureAuthenticated } from './middlewares/ensure-authenticated'

const router = Router()

router.post('/cars/seed', new CreateCarController().handle)

router.get('/cars', new RetrieveCarsController().handle)

router.get('/cars/:id', new GetSingleCarController().handle)

router.post('/auth', new CreateCustomerController().handle)

router.post(
  '/rents/:id',
  ensureAuthenticated,
  new CreateRentController().handle
)

router.get('/rents', ensureAuthenticated, new RetrieveRentsController().handle)

export { router }
