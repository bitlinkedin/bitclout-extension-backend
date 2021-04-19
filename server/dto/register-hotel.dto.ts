import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsDecimal,
  IsEmail,
  IsFQDN,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { RegisterMemberDto } from './register-member.dto';
import { RegisterRoomTypesDto } from './register-room-types.dto';

export class RegisterHotelDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  legalCompanyName: string;
  @IsNotEmpty()
  crNumber: string;
  @IsNotEmpty()
  crPerson: string;
  @IsNotEmpty()
  signatoryName: string;

  @IsNotEmpty()
  @IsMobilePhone()
  signatoryPhoneNumber: string;
  @IsNotEmpty()
  @IsEmail()
  signatoryEmail: string;
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  crFiles: File[];
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  hotelsFiles: File[];
  // Focal
  @IsNotEmpty()
  focalName: string;
  @IsNotEmpty()
  @IsEmail()
  focalEmail: string;
  @IsNotEmpty()
  @IsMobilePhone()
  focalPhoneNumber: string;
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(5)
  members: RegisterMemberDto[];
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  contractedHotels: RegisterRoomTypesDto[];
}
