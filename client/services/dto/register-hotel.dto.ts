import { RegisterMemberDto } from './register-member.dto';
import { RegisterRoomTypesDto } from './register-room-types.dto';

export class RegisterHotelDto {
  name: string;

  nameArabic: string;

  website: string;

  governorate: string;

  city: string;

  rating: number;

  description: string;

  descriptionArabic: string;
  // Legal

  legalName: string;

  crNumber: string;

  crPerson: string;

  crDetails: string;

  signatoryName: string;

  signatoryPhoneNumber: string;

  signatoryEmail: string;

  crFiles: File[];
  // Bank

  bankName: string;

  branch: string;

  accountNumber: string;
  // Focal

  focalName: string;

  focalEmail: string;

  focalPhoneNumber: string;

  members: RegisterMemberDto[];

  roomTypes: RegisterRoomTypesDto[];
}
