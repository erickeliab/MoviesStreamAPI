"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class second1588799291644 {
    constructor() {
        this.name = 'second1588799291644';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" ADD "countryCountryId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_0391b111ca59ba411aa1902fd20" FOREIGN KEY ("countryCountryId") REFERENCES "country"("Country_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_0391b111ca59ba411aa1902fd20"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "countryCountryId"`, undefined);
    }
}
exports.second1588799291644 = second1588799291644;
//# sourceMappingURL=1588799291644-second.js.map