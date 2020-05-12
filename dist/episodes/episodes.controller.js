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
const episodes_service_1 = require("./episodes.service");
const episodeDto_1 = require("./DTO/episodeDto");
let EpisodesController = class EpisodesController {
    constructor(episodesService) {
        this.episodesService = episodesService;
    }
    getall() {
        return this.episodesService.getall();
    }
    getOne(id) {
        return this.episodesService.getOne(id);
    }
    add(body) {
        return this.episodesService.add(body);
    }
    update(body, id) {
        return this.episodesService.update(body, id);
    }
    remove(param) {
        return this.episodesService.remove(param.id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EpisodesController.prototype, "getall", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EpisodesController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [episodeDto_1.episodeDto]),
    __metadata("design:returntype", Promise)
], EpisodesController.prototype, "add", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [episodeDto_1.episodeDto, Object]),
    __metadata("design:returntype", Promise)
], EpisodesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EpisodesController.prototype, "remove", null);
EpisodesController = __decorate([
    common_1.Controller('episodes'),
    __metadata("design:paramtypes", [episodes_service_1.EpisodesService])
], EpisodesController);
exports.EpisodesController = EpisodesController;
//# sourceMappingURL=episodes.controller.js.map