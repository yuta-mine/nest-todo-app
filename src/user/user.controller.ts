import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
  HttpStatus
} from '@nestjs/common';
import { UserService } from './user.service'
import { BaseUserDto } from './dto/base-user.dto';
import { CreateUserDto } from './dto/create-user.dto.';
import { HttpExceptionFilter } from '../filter/exception.filter'
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) { }
  
  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [BaseUserDto] })
  async index() {
    return this.service.findAll()
  }

  @Get('/:id')
  @ApiResponse({ status: HttpStatus.OK, type: BaseUserDto })
  async find(@Param() id: string) {
    return await this.service.findOne(id)
  }

  @Post('/signup')
  @UseFilters(new HttpExceptionFilter())
  @ApiOperation({ summary: "user signup" })
  @ApiResponse({ status: HttpStatus.OK, type: CreateUserDto})
  async create(@Body() CreateUserDto: CreateUserDto) {
    return await this.service.create(CreateUserDto)
  }

  @Post('/signin')
  @UseFilters(new HttpExceptionFilter())
  @ApiOperation({ summary: "user signin" })
  async signin(@Body() BaseUserDto: BaseUserDto) {
    return await this.service.signin(BaseUserDto)
  }
}
