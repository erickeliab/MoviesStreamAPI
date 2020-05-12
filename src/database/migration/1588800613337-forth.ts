import {MigrationInterface, QueryRunner} from "typeorm";

export class forth1588800613337 implements MigrationInterface {
    name = 'forth1588800613337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "season" ADD COLUMN "Movie_id"`, undefined);
    }

}
