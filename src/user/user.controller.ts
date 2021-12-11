import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto.';
import { HttpExceptionFilter } from '../filter/exception.filter'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) { }
  
  @Get()
  async index() {
    return this.service.findAll()
  }

  @Get()
  async find(@Param() id: string) {
    return await this.service.findOne(id)
  }

  @Post('/signup')
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() CreateUserDto: CreateUserDto) {
    return await this.service.create(CreateUserDto)
  }
}
