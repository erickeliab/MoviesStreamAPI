"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class seasonNameString1588843875642 {
    constructor() {
        this.name = 'seasonNameString1588843875642';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Number"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD "Number" character varying NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Number"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD "Number" integer NULL`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Number"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD "Number" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Number"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD "Number" integer NOT NULL`, undefined);
    }
}
exports.seasonNameString1588843875642 = seasonNameString1588843875642;
//# sourceMappingURL=1588843875642-seasonNameString.js.map