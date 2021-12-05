import { IsNotEmpty, IsString } from 'class-validator';

export class BaseTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  description: string
}
