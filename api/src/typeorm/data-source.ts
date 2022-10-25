import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { CustomerEntity } from './entity/Customer'
import { CarEntity } from './entity/Car'
import { RentEntity } from './entity/Rent'

const entities = [CarEntity, RentEntity, CustomerEntity]

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: __dirname + '/database/db.sql',
  synchronize: true,
  logging: false,
  entities,
  migrations: [__dirname + '/migration/**/*.ts'],
  subscribers: [],
})
