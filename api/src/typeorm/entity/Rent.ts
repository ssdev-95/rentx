import {
  Entity,
  Column,
  ManyToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { CarEntity } from './Car'
import { CustomerEntity } from './Customer'

@Entity('rents')
export class RentEntity extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
   id: string

 @Column()
   startRent: Date

 @Column()
   endRent: Date

 @Column()
 @ManyToOne(() => CustomerEntity, (customer) => customer.id)
   customerId: string

 @Column()
 @ManyToOne(() => CarEntity, (car) => car.id)
   carId: string
}
