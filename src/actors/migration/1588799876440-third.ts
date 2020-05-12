import {MigrationInterface, QueryRunner} from "typeorm";

export class third1588799876440 implements MigrationInterface {
    name = 'third1588799876440'

    public async up(queryRunner: QueryRunner): Promise<void> {
     
       await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);
      
    }

}
