import {
 Entity,
 Column,
 BaseEntity,
 PrimaryGeneratedColumn
} from 'typeorm'

@Entity('rents')
export class RentEntity extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string

 @Column()
 startRent: Date

 @Column()
 endRent: Date

 @Column({ nullable: false})
 customerId: string

 @Column({ nullable: false})
 carId: string
}
