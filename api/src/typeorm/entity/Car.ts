import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class CarEntity extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
   id: string

 @Column()
   model: string

 @Column()
   manufacturer: string

 @Column()
   description: string

 @Column()
   rentPrice: number

 @Column()
   igniteTime: number

 @Column()
   maxPassengers: number

 @Column()
   maxSpeed: number

 @Column()
   fuelType: string

 @Column()
   cambioMode: string

 @Column()
   horsePower: number

 @Column()
   thumbs: string
}
