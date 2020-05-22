import {MigrationInterface, QueryRunner} from "typeorm";

export class addedcreatedandupdatedatcolumnstousers1590080385267 implements MigrationInterface {
    name = 'addedcreatedandupdatedatcolumnstousers1590080385267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "createdOn" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedOn" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedOn"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdOn"`, undefined);
    }

}
