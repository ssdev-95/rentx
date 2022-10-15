import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('rents')
export class RentEntity extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
   id: string

 @Column()
   carId: string

 @Column()
   customerId: string

 @Column()
   startRent: Date

 @Column()
   endRent: Date
}
