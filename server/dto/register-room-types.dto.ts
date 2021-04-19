import { IsNotEmpty} from 'class-validator';

export class RegisterRoomTypesDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  inventory: string;
}
