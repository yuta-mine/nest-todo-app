import { IsNotEmpty, IsDate } from 'class-validator';
import { BaseTodoDto } from './base-todo.dto'

export class UpdateTodoDto extends BaseTodoDto {
  @IsNotEmpty()
  @IsDate()
  completedAt: Date;
}
