"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.AppService = void 0;
var common_1 = require("@nestjs/common");
var hotel_entity_1 = require("./entities/hotel.entity");
var staff_member_entity_1 = require("./entities/profile.entity");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var ProfileService = /** @class */ (function () {
    function AppService(repository, membersRepository) {
        this.repository = repository;
        this.membersRepository = membersRepository;
    }
    AppService.prototype.registerHotel = function (dto) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var existHotel, uniqueEmails, uniquePhoneNumbers, existMembers, newHotel;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!((_a = dto.members) === null || _a === void 0 ? void 0 : _a.length) || dto.members.length < 2) {
                            throw new common_1.HttpException("Requires at least 2 staff members", common_1.HttpStatus.OK);
                        }
                        if (dto.members.length > 5) {
                            throw new common_1.HttpException("No more than 5 staff members needed", common_1.HttpStatus.OK);
                        }
                        return [4 /*yield*/, this.repository.findOne({
                                where: [
                                    {
                                        name: dto.name
                                    },
                                    {
                                        nameArabic: dto.nameArabic
                                    },
                                ]
                            })];
                    case 1:
                        existHotel = _b.sent();
                        if (existHotel) {
                            throw new common_1.HttpException("The hotel is already registered", common_1.HttpStatus.OK);
                        }
                        uniqueEmails = __spreadArray([], new Set(dto.members.map(function (member) { return member.email; })));
                        uniquePhoneNumbers = __spreadArray([], new Set(dto.members.map(function (member) { return member.phoneNumber; })));
                        return [4 /*yield*/, this.membersRepository.find({
                                where: [
                                    {
                                        email: typeorm_2.In(uniqueEmails)
                                    },
                                    {
                                        phoneNumber: typeorm_2.In(uniquePhoneNumbers)
                                    },
                                ]
                            })];
                    case 2:
                        existMembers = _b.sent();
                        if (existMembers.length) {
                            throw new common_1.HttpException("Such staff members are already registered", common_1.HttpStatus.OK);
                        }
                        newHotel = hotel_entity_1.HotelEntity.create(dto);
                        newHotel.members = dto.members.map(function (member) {
                            return staff_member_entity_1.ProfileEntity.create(member);
                        });
                        return [2 /*return*/, this.repository.save(newHotel)];
                }
            });
        });
    };
    AppService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(hotel_entity_1.HotelEntity)),
        __param(1, typeorm_1.InjectRepository(staff_member_entity_1.ProfileEntity))
    ], AppService);
    return AppService;
}());
exports.AppService = ProfileService;
