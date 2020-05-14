import {MigrationInterface, QueryRunner} from "typeorm";

export class PermissionRelationMigration1589380344450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "FK_0341b114ca49ba411aa1902fd30" FOREIGN KEY ("User_id") REFERENCES "user"("User_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "FK_9341b115ca49ba411aa1902fd30" FOREIGN KEY ("Role_id") REFERENCES "role"("Role_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "FK_0341b1114a49ba411aa1902fd30"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "FK_9341b115ca49ba411aa1902fd30"`, undefined);


    }

}
