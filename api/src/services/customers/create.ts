import { sign } from 'jsonwebtoken'
import { CustomerEntity } from '../../typeorm/entity/Customer'
import type { Customer } from '.'

export class CreateCustomerService {
 private entity: CustomerEntity

 constructor() {
  this.entity = new CustomerEntity()
 }

 async execute(customer: Customer) {
  const cutsomerAlreadyExists = await CustomerEntity.findOne({
   where: { email: customer.email },
  })

  let storedCustomer: CustomerEntity

  if (!!!cutsomerAlreadyExists) {
   this.entity.avatar = customer.avatar
   this.entity.firstName = customer.firstName
	 this.entity.lastName = customer.lastName
   this.entity.email = customer.email
   this.entity.password = customer.password

   storedCustomer = await this.entity.save()
  } else {
   storedCustomer = cutsomerAlreadyExists
  }

  const secret = process.env.JWT_SECRET

  const token = sign(
   {
    firstName: storedCustomer.firstName,
    id: storedCustomer.id,
   },
   secret,
   {
    expiresIn: '7d',
   }
  )

  return {
   token,
   user: {
    firstName: storedCustomer.firstName,
   },
  }
 }
}
