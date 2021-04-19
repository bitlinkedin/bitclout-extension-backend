"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StaffMemberEntity = void 0;
var typeorm_1 = require("typeorm");
var hotel_entity_1 = require("./hotel.entity");
var ProfileEntity = /** @class */ (function (_super) {
    __extends(StaffMemberEntity, _super);
    function StaffMemberEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryColumn({
            type: 'uuid'
        })
    ], StaffMemberEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({
            unique: true,
            type: 'varchar'
        })
    ], StaffMemberEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({
            type: 'varchar'
        })
    ], StaffMemberEntity.prototype, "phoneNumber");
    __decorate([
        typeorm_1.Column({
            type: 'varchar'
        })
    ], StaffMemberEntity.prototype, "email");
    __decorate([
        typeorm_1.ManyToOne(function () { return hotel_entity_1.HotelEntity; }, function (v) { return v.members; }, { onDelete: 'CASCADE' })
    ], StaffMemberEntity.prototype, "hotel");
    StaffMemberEntity = __decorate([
        typeorm_1.Entity('staff-members')
    ], StaffMemberEntity);
    return StaffMemberEntity;
}(typeorm_1.BaseEntity));
exports.StaffMemberEntity = ProfileEntity;
