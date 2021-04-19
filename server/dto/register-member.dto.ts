import { IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';

export class RegisterMemberDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsMobilePhone()
  phoneNumber: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
