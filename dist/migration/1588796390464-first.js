"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class first1588796390464 {
    constructor() {
        this.name = 'first1588796390464';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "Country_id"`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" ADD "Country_id" integer NOT NULL`, undefined);
    }
}
exports.first1588796390464 = first1588796390464;
//# sourceMappingURL=1588796390464-first.js.map