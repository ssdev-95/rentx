import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('customers')
export class CustomerEntity extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
   id: string

 @Column()
   firstName: string

 @Column()
   lastName: string

 @Column({ unique: true })
   email: string

 @Column()
   password: string

 @Column({ nullable: true })
   avatar?: string
}
