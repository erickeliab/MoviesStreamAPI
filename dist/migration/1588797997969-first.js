"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class first1588797997969 {
    constructor() {
        this.name = 'first1588797997969';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" ADD "Country_id" integer NOT NULL`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "Country_id"`, undefined);
    }
}
exports.first1588797997969 = first1588797997969;
//# sourceMappingURL=1588797997969-first.js.map