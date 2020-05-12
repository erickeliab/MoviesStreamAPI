import { MigrationInterface, QueryRunner } from "typeorm";
export declare class MovieCountryRelationInitial1588769260000 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
