import { Rent } from '.'
import { RentEntity } from '../../typeorm/entity/Rent'
import { CustomerEntity } from '../../typeorm/entity/Customer'
import { CarEntity } from '../../typeorm/entity/Car'

export class CreateRentService {
  private entity: RentEntity

  constructor() {
    this.entity = new RentEntity()
  }

  async execute({ startRent, endRent, customerId, carId }: Rent) {
    try {
      await CarEntity.findOneOrFail({ where: { id: carId } })

      await CustomerEntity.findOneOrFail({ where: { id: customerId } })

      this.entity.startRent = new Date(startRent)
      this.entity.endRent = new Date(endRent)
      this.entity.customerId = customerId
      this.entity.carId = carId

      const newRent = await this.entity.save()

      return newRent
    } catch (error) {
      throw error
    }
  }
}
