import { IsNotEmpty, IsString, IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class BaseUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: "名前",
    required: true,
    example: "田中",
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    type: String,
    description: "メールアドレス",
    required: true,
    example: "test@mai.com",
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: "パスワード",
    required: true,
    example: "password",
  })
  password: string;
}
