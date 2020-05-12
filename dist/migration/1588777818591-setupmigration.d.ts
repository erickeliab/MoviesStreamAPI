import { MigrationInterface, QueryRunner } from "typeorm";
export declare class setupmigration1588777818591 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
