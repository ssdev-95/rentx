import { sign } from 'jsonwebtoken'
import { CustomerEntity } from '../../typeorm/entity/Customer'
import type { Customer } from '.'

export class CreateCustomerService {
  private entity: CustomerEntity

  constructor() {
    this.entity = new CustomerEntity()
  }

  async execute(customer: Customer) {
		let storedCustomer: CustomerEntity

		try {
			storedCustomer = await CustomerEntity.findOneOrFail({
				where: {
					email: customer.email,
					password: customer.password
				}
			})
		} catch(error) {
			console.log(error)
	
      this.entity.avatar = customer.avatar
      this.entity.firstName = customer.firstName
      this.entity.lastName = customer.lastName
			this.entity.cnh = customer.cnh
      this.entity.email = customer.email
      this.entity.password = customer.password

      storedCustomer = await this.entity.save()
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
				lastName: storedCustomer.lastName,
        avatar: storedCustomer.avatar,
        email: storedCustomer.email,
				cnh: storedCustomer.cnh
      },
    }
  }
}
