"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterHotelDto = void 0;
var class_validator_1 = require("class-validator");
var RegisterHotelDto = /** @class */ (function () {
    function RegisterHotelDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "name");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "nameArabic");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsFQDN()
    ], RegisterHotelDto.prototype, "website");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "governorate");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "city");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], RegisterHotelDto.prototype, "rating");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "description");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "descriptionArabic");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "legalName");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "crNumber");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "crPerson");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "crDetails");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "signatoryName");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsMobilePhone()
    ], RegisterHotelDto.prototype, "signatoryPhoneNumber");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail()
    ], RegisterHotelDto.prototype, "signatoryEmail");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsArray(),
        class_validator_1.ArrayNotEmpty()
    ], RegisterHotelDto.prototype, "crUrls");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "bankName");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "branch");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "accountNumber");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], RegisterHotelDto.prototype, "focalName");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail()
    ], RegisterHotelDto.prototype, "focalEmail");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsMobilePhone()
    ], RegisterHotelDto.prototype, "focalPhoneNumber");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsArray(),
        class_validator_1.ArrayMinSize(2),
        class_validator_1.ArrayMaxSize(5)
    ], RegisterHotelDto.prototype, "members");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsArray(),
        class_validator_1.ArrayNotEmpty()
    ], RegisterHotelDto.prototype, "roomTypes");
    return RegisterHotelDto;
}());
exports.RegisterHotelDto = RegisterHotelDto;
