import {MigrationInterface, QueryRunner} from "typeorm";

export class first1588798619162 implements MigrationInterface {
    name = 'first1588798619162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "Country_id"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "Country_id" integer`, undefined);
    }

}
