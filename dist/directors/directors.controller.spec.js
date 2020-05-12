"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const directors_controller_1 = require("./directors.controller");
describe('Directors Controller', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [directors_controller_1.DirectorsController],
        }).compile();
        controller = module.get(directors_controller_1.DirectorsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=directors.controller.spec.js.map