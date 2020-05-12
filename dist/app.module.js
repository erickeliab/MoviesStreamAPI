"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const movies_module_1 = require("./movies/movies.module");
const seasons_module_1 = require("./seasons/seasons.module");
const episodes_module_1 = require("./episodes/episodes.module");
const genres_module_1 = require("./genres/genres.module");
const directors_module_1 = require("./directors/directors.module");
const countries_module_1 = require("./countries/countries.module");
const actors_module_1 = require("./actors/actors.module");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const permissions_module_1 = require("./permissions/permissions.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [movies_module_1.MoviesModule, seasons_module_1.SeasonsModule, permissions_module_1.PermissionsModule, roles_module_1.RolesModule,
            users_module_1.UsersModule, actors_module_1.ActorsModule, countries_module_1.CountriesModule, directors_module_1.DirectorsModule, genres_module_1.GenresModule,
            episodes_module_1.EpisodesModule,
            typeorm_1.TypeOrmModule.forRoot()],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map