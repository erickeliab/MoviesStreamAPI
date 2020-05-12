import {MigrationInterface, QueryRunner} from "typeorm";

export class second1588799291644 implements MigrationInterface {
    name = 'second1588799291644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "countryCountryId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_0391b111ca59ba411aa1902fd20" FOREIGN KEY ("countryCountryId") REFERENCES "country"("Country_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_0391b111ca59ba411aa1902fd20"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "countryCountryId"`, undefined);
    }

}
