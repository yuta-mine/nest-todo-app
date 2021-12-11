import { IsNotEmpty, IsDate } from 'class-validator';
import { BaseTodoDto } from './base-todo.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateTodoDto extends BaseTodoDto {
  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    type: String,
    description: "update",
    required: true,
    example: "updated",
  })
  completedAt: Date;
}
