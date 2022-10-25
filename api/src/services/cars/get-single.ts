import { CarEntity } from '../../typeorm/entity/Car'
export class GetSingleCarService {
  async execute(id: string) {
    try {
      const car = await CarEntity.findOneOrFail({
        where: { id },
      })

      return car
    } catch (error) {
      throw error
    }
  }
}
