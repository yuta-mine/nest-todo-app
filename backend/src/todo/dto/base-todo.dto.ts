import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class BaseTodoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: "タイトル",
    required: true,
    example: "ハリーポッター",
  })
  title: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: "説明",
    required: true,
    example: "魔法使いの本",
  })
  description: string
}
