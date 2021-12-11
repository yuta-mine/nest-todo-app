import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

export class BaseUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  // @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
