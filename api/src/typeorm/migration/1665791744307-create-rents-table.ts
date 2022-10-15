import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createRentsTable1665791744307 implements MigrationInterface {
	private table = 'rents'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: this.table,
			columns: [
				{
					name: 'id',
					type: 'varchar',
					isNullable: false,
					isUnique: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'uuid'
				},
				{
					name: 'carId',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'customerId',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'startRent',
					type: 'timestamp',
					isNullable: false
				},
				{
					name: 'endRent',
					type: 'timestamp',
					isNullable: false
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(this.table)
	}

}
