import { MigrationInterface, QueryRunner } from "typeorm";

export class relations1666747472231 implements MigrationInterface {
    name = 'relations1666747472231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" timestamp NOT NULL, "endRent" timestamp NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_rents"("id", "startRent", "endRent", "customerId", "carId") SELECT "id", "startRent", "endRent", "customerId", "carId" FROM "rents"`);
        await queryRunner.query(`DROP TABLE "rents"`);
        await queryRunner.query(`ALTER TABLE "temporary_rents" RENAME TO "rents"`);
        await queryRunner.query(`CREATE TABLE "temporary_rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" datetime NOT NULL, "endRent" datetime NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "rents"`);
        await queryRunner.query(`DROP TABLE "rents"`);
        await queryRunner.query(`ALTER TABLE "temporary_rents" RENAME TO "rents"`);
        await queryRunner.query(`CREATE TABLE "temporary_rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" datetime NOT NULL, "endRent" datetime NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar, CONSTRAINT "FK_cf961d9c43bc7ea6de4ff065692" FOREIGN KEY ("customerIdId") REFERENCES "customers" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6c620dd6ad47bcc29b95b107868" FOREIGN KEY ("carIdId") REFERENCES "cars" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "rents"`);
        await queryRunner.query(`DROP TABLE "rents"`);
        await queryRunner.query(`ALTER TABLE "temporary_rents" RENAME TO "rents"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rents" RENAME TO "temporary_rents"`);
        await queryRunner.query(`CREATE TABLE "rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" datetime NOT NULL, "endRent" datetime NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "temporary_rents"`);
        await queryRunner.query(`DROP TABLE "temporary_rents"`);
        await queryRunner.query(`ALTER TABLE "rents" RENAME TO "temporary_rents"`);
        await queryRunner.query(`CREATE TABLE "rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" timestamp NOT NULL, "endRent" timestamp NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL, "customerIdId" varchar, "carIdId" varchar)`);
        await queryRunner.query(`INSERT INTO "rents"("id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId") SELECT "id", "startRent", "endRent", "customerId", "carId", "customerIdId", "carIdId" FROM "temporary_rents"`);
        await queryRunner.query(`DROP TABLE "temporary_rents"`);
        await queryRunner.query(`ALTER TABLE "rents" RENAME TO "temporary_rents"`);
        await queryRunner.query(`CREATE TABLE "rents" ("id" varchar PRIMARY KEY NOT NULL, "startRent" timestamp NOT NULL, "endRent" timestamp NOT NULL, "customerId" varchar NOT NULL, "carId" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "rents"("id", "startRent", "endRent", "customerId", "carId") SELECT "id", "startRent", "endRent", "customerId", "carId" FROM "temporary_rents"`);
        await queryRunner.query(`DROP TABLE "temporary_rents"`);
    }

}
