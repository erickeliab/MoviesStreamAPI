import {MigrationInterface, QueryRunner} from "typeorm";

export class createStaffTableMigration1589374070823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "staff" ("Staff_id" SERIAL NOT NULL,"movieMovieId" SERIAL NOT NULL,"directorId" SERIAL NOT NULL, CONSTRAINT "PK_0157b7fb7680622852df644d9b2" PRIMARY KEY ("Staff_id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_0341b111ca49ba411aa1902fd30" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_9341b111ca49ba411aa1902fd30" FOREIGN KEY ("directorId") REFERENCES "director"("Director_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "staff"`, undefined);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_0341b111ca49ba411aa1902fd30"`, undefined);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_9341b111ca49ba411aa1902fd30"`, undefined);


    }

}
