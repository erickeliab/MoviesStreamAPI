import {MigrationInterface, QueryRunner} from "typeorm";

export class userpermissionrolesrelation1589985710338 implements MigrationInterface {
    name = 'userpermissionrolesrelation1589985710338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0d6946816b5673f50e0b90a0339"`, undefined);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "FK_53ab246650fe7260173ab5bede9"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "permissionPermissionId"`, undefined);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "permissionPermissionId"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_5805479359fd09f0afb525339cc"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "Permission_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD "User_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_3268ee1f76da3f426b224b64351" PRIMARY KEY ("User_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD "Role_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_3268ee1f76da3f426b224b64351"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_0eda38d500c6dae2002d7f1d15a" PRIMARY KEY ("User_id", "Role_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ALTER COLUMN "Deleted" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "FK_3268ee1f76da3f426b224b64351" FOREIGN KEY ("User_id") REFERENCES "users"("User_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "FK_0240e52b5fd93021f2fab8fef4c" FOREIGN KEY ("Role_id") REFERENCES "role"("Role_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "FK_0240e52b5fd93021f2fab8fef4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "FK_3268ee1f76da3f426b224b64351"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ALTER COLUMN "Deleted" SET DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_0eda38d500c6dae2002d7f1d15a"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_3268ee1f76da3f426b224b64351" PRIMARY KEY ("User_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "Role_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP CONSTRAINT "PK_3268ee1f76da3f426b224b64351"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" DROP COLUMN "User_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD "Permission_id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "permission" ADD CONSTRAINT "PK_5805479359fd09f0afb525339cc" PRIMARY KEY ("Permission_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "role" ADD "permissionPermissionId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "permissionPermissionId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "FK_53ab246650fe7260173ab5bede9" FOREIGN KEY ("permissionPermissionId") REFERENCES "permission"("Permission_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0d6946816b5673f50e0b90a0339" FOREIGN KEY ("permissionPermissionId") REFERENCES "permission"("Permission_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
