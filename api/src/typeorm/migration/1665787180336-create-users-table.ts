import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUsersTable1665787180336 implements MigrationInterface {
	private table = 'customers'

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
				{ name: 'firstName',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'password',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'email',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'avatar',
					type: 'varchar',
					isNullable: true,
					default: null
				},
				{
					name: 'rents',
					type: 'varchar',
					isNullable: true,
					default: null
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(this.table)
	}

}
