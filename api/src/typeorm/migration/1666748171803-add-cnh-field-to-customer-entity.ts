import { MigrationInterface, QueryRunner } from "typeorm";

export class addCnhFieldToCustomerEntity1666748171803 implements MigrationInterface {
    name = 'addCnhFieldToCustomerEntity1666748171803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_customers" ("id" varchar PRIMARY KEY NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "avatar" varchar, "cnh" integer NOT NULL, CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "temporary_customers"("id", "firstName", "lastName", "password", "email", "avatar") SELECT "id", "firstName", "lastName", "password", "email", "avatar" FROM "customers"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`ALTER TABLE "temporary_customers" RENAME TO "customers"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" RENAME TO "temporary_customers"`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" varchar PRIMARY KEY NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "avatar" varchar, CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "customers"("id", "firstName", "lastName", "password", "email", "avatar") SELECT "id", "firstName", "lastName", "password", "email", "avatar" FROM "temporary_customers"`);
        await queryRunner.query(`DROP TABLE "temporary_customers"`);
    }

}
