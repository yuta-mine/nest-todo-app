import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { TodoService } from './todo.service';
import { HttpExceptionFilter } from '../filter/exception.filter'
import { AuthGuard } from '../guards/auth.guard'

@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) { }
  
  @Get()
  @UseGuards(AuthGuard)
  async index() {
    return await this.service.findAll()
  }

  @Get()
  @UseGuards(AuthGuard)
  async find(@Param('id') id: string) {
    return await this.service.findOne(id)
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() CreateTodoDto: CreateTodoDto) {
    return await this.service.create(CreateTodoDto)
  }

  @Put()
  async update(@Param('id') id: string, @Body() UpdateTodoDto: UpdateTodoDto) {
    return await this.service.update(id, UpdateTodoDto)
  }

  @Delete()
  async delete(@Param('id') id: string) {
    return await this.service.delete(id)
  }
}
