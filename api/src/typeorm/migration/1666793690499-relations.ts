import { MigrationInterface, QueryRunner } from 'typeorm'

export class relations1666793690499 implements MigrationInterface {
  name = 'relations1666793690499'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "temporary_customers" ("id" varchar PRIMARY KEY NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "cnh" integer NOT NULL, "avatar" varchar, CONSTRAINT "UQ_5329dc7dc26e74ccb3b0cf54051" UNIQUE ("cnh"), CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"))'
    )
    await queryRunner.query(
      'INSERT INTO "temporary_customers"("id", "firstName", "lastName", "password", "email", "cnh", "avatar") SELECT "id", "firstName", "lastName", "password", "email", "cnh", "avatar" FROM "customers"'
    )
    await queryRunner.query('DROP TABLE "customers"')
    await queryRunner.query(
      'ALTER TABLE "temporary_customers" RENAME TO "customers"'
    )
    await queryRunner.query(
      'CREATE TABLE "temporary_rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" timestamp NOT NULL, "endRent" timestamp NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)'
    )
    await queryRunner.query(
      'INSERT INTO "temporary_rents"("id", "startRent", "endRent") SELECT "id", "startRent", "endRent" FROM "rents"'
    )
    await queryRunner.query('DROP TABLE "rents"')
    await queryRunner.query('ALTER TABLE "temporary_rents" RENAME TO "rents"')
    await queryRunner.query(
      'CREATE TABLE "temporary_customers" ("id" varchar PRIMARY KEY NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "cnh" integer NOT NULL, "avatar" varchar, CONSTRAINT "UQ_5329dc7dc26e74ccb3b0cf54051" UNIQUE ("cnh"), CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"))'
    )
    await queryRunner.query(
      'INSERT INTO "temporary_customers"("id", "firstName", "lastName", "password", "email", "cnh", "avatar") SELECT "id", "firstName", "lastName", "password", "email", "cnh", "avatar" FROM "customers"'
    )
    await queryRunner.query('DROP TABLE "customers"')
    await queryRunner.query(
      'ALTER TABLE "temporary_customers" RENAME TO "customers"'
    )
    await queryRunner.query(
      'CREATE TABLE "temporary_rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" datetime NOT NULL, "endRent" datetime NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)'
    )
    await queryRunner.query(
      'INSERT INTO "temporary_rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "rents"'
    )
    await queryRunner.query('DROP TABLE "rents"')
    await queryRunner.query('ALTER TABLE "temporary_rents" RENAME TO "rents"')
    await queryRunner.query(
      'CREATE TABLE "temporary_rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" datetime NOT NULL, "endRent" datetime NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar, CONSTRAINT "FK_cf961d9c43bc7ea6de4ff065692" FOREIGN KEY ("customerIdId") REFERENCES "customers" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6c620dd6ad47bcc29b95b107868" FOREIGN KEY ("carIdId") REFERENCES "cars" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)'
    )
    await queryRunner.query(
      'INSERT INTO "temporary_rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "rents"'
    )
    await queryRunner.query('DROP TABLE "rents"')
    await queryRunner.query('ALTER TABLE "temporary_rents" RENAME TO "rents"')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "rents" RENAME TO "temporary_rents"')
    await queryRunner.query(
      'CREATE TABLE "rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" datetime NOT NULL, "endRent" datetime NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)'
    )
    await queryRunner.query(
      'INSERT INTO "rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "temporary_rents"'
    )
    await queryRunner.query('DROP TABLE "temporary_rents"')
    await queryRunner.query('ALTER TABLE "rents" RENAME TO "temporary_rents"')
    await queryRunner.query(
      'CREATE TABLE "rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" timestamp NOT NULL, "endRent" timestamp NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)'
    )
    await queryRunner.query(
      'INSERT INTO "rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "temporary_rents"'
    )
    await queryRunner.query('DROP TABLE "temporary_rents"')
    await queryRunner.query(
      'ALTER TABLE "customers" RENAME TO "temporary_customers"'
    )
    await queryRunner.query(
      'CREATE TABLE "customers" ("id" varchar PRIMARY KEY NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "cnh" integer NOT NULL, "avatar" varchar, CONSTRAINT "UQ_5329dc7dc26e74ccb3b0cf54051" UNIQUE ("cnh"), CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"))'
    )
    await queryRunner.query(
      'INSERT INTO "customers"("id", "firstName", "lastName", "password", "email", "cnh", "avatar") SELECT "id", "firstName", "lastName", "password", "email", "cnh", "avatar" FROM "temporary_customers"'
    )
    await queryRunner.query('DROP TABLE "temporary_customers"')
    await queryRunner.query('ALTER TABLE "rents" RENAME TO "temporary_rents"')
    await queryRunner.query(
      'CREATE TABLE "rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" timestamp NOT NULL, "endRent" timestamp NOT NULL)'
    )
    await queryRunner.query(
      'INSERT INTO "rents"("id", "startRent", "endRent") SELECT "id", "startRent", "endRent" FROM "temporary_rents"'
    )
    await queryRunner.query('DROP TABLE "temporary_rents"')
    await queryRunner.query(
      'ALTER TABLE "customers" RENAME TO "temporary_customers"'
    )
    await queryRunner.query(
      'CREATE TABLE "customers" ("id" varchar PRIMARY KEY NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "cnh" integer NOT NULL, "avatar" varchar, CONSTRAINT "UQ_5329dc7dc26e74ccb3b0cf54051" UNIQUE ("cnh"), CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"))'
    )
    await queryRunner.query(
      'INSERT INTO "customers"("id", "firstName", "lastName", "password", "email", "cnh", "avatar") SELECT "id", "firstName", "lastName", "password", "email", "cnh", "avatar" FROM "temporary_customers"'
    )
    await queryRunner.query('DROP TABLE "temporary_customers"')
  }
}
