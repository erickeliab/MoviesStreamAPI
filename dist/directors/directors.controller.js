"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const directors_service_1 = require("./directors.service");
const directorDTO_1 = require("./DTO/directorDTO");
let DirectorsController = class DirectorsController {
    constructor(directorsService) {
        this.directorsService = directorsService;
    }
    getall() {
        return this.directorsService.getall();
    }
    getOne(id) {
        return this.directorsService.getOne(id);
    }
    add(body) {
        return this.directorsService.add(body);
    }
    update(body, id) {
        return this.directorsService.update(body, id);
    }
    remove(param) {
        return this.directorsService.remove(param.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DirectorsController.prototype, "getall", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DirectorsController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [directorDTO_1.directorDto]),
    __metadata("design:returntype", Promise)
], DirectorsController.prototype, "add", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [directorDTO_1.directorDto, Object]),
    __metadata("design:returntype", Promise)
], DirectorsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DirectorsController.prototype, "remove", null);
DirectorsController = __decorate([
    common_1.Controller('directors'),
    __metadata("design:paramtypes", [directors_service_1.DirectorsService])
], DirectorsController);
exports.DirectorsController = DirectorsController;
//# sourceMappingURL=directors.controller.js.map