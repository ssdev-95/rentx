import { RentEntity } from '../../typeorm/entity/Rent'

export class RetrieveRentsService {
  async execute(customerId: string) {
    const rents = await RentEntity.find({
      where: { customerId },
    })

    return rents
  }
}
