import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/user.schemas'
import { CreateUserDto } from './dto/create-user.dto.';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly model: Model<(UserDocument)>) { }

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.model.findById(id).exec();
  }

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    return await new this.model({
      ...CreateUserDto,
      createdAt: new Date(),
    }).save()
  }
}
