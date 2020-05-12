"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class first1588798516536 {
    constructor() {
        this.name = 'first1588798516536';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "Country_id"`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" ADD "Country_id" integer`, undefined);
    }
}
exports.first1588798516536 = first1588798516536;
//# sourceMappingURL=1588798516536-first.js.map