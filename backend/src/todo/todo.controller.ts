import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BaseTodoDto } from './dto/base-todo.dto'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { TodoService } from './todo.service';
import { HttpExceptionFilter } from '../filter/exception.filter'
import { AuthGuard } from '../guards/auth.guard'
import { LogsInterceptor } from '../interceptor/logs.interceptor'
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) { }
  
  @Get()
  @UseGuards(AuthGuard)
  @ApiResponse({ status: HttpStatus.OK, type: [BaseTodoDto] })
  async index() {
    return await this.service.findAll()
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: HttpStatus.OK, type: BaseTodoDto })
  async find(@Param('id') id: string) {
    return await this.service.findOne(id)
  }

  @Post('/create')
  @UseFilters(new HttpExceptionFilter())
  @UseInterceptors(LogsInterceptor)
  @ApiOperation({ summary: "create todo document" })
  @ApiResponse({ status: HttpStatus.OK, type: CreateTodoDto})
  async create(@Body() CreateTodoDto: CreateTodoDto) {
    return await this.service.create(CreateTodoDto)
  }

  @Put('/update')
  @ApiOperation({ summary: "update todo document" })
  async update(@Param('id') id: string, @Body() UpdateTodoDto: UpdateTodoDto) {
    return await this.service.update(id, UpdateTodoDto)
  }

  @Delete('/delete')
  @UseFilters(new HttpExceptionFilter())
  @UseInterceptors(LogsInterceptor)
  @ApiOperation({ summary: "delete todo document" })
  async delete(@Param('id') id: string) {
    return await this.service.delete(id)
  }
}
