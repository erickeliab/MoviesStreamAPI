"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const episodes_controller_1 = require("./episodes.controller");
const episodes_service_1 = require("./episodes.service");
const typeorm_1 = require("@nestjs/typeorm");
const episode_entity_1 = require("./episode.entity");
let EpisodesModule = class EpisodesModule {
};
EpisodesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([episode_entity_1.Episode])],
        controllers: [episodes_controller_1.EpisodesController],
        providers: [episodes_service_1.EpisodesService],
    })
], EpisodesModule);
exports.EpisodesModule = EpisodesModule;
//# sourceMappingURL=episodes.module.js.map