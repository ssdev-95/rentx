import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createCarsTable1665789375693 implements MigrationInterface {
  private table = 'cars'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.table,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'manufacturer',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'model',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'thumbs',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rentPrice',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'maxPassengers',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'maxSpeed',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'fuelType',
            type: 'varchar',
          },
          {
            name: 'cambioMode',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'horsePower',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'igniteTime',
            type: 'integer',
            isNullable: false,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
