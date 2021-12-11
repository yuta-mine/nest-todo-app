import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/user.schemas'
import { CreateUserDto } from './dto/create-user.dto.';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt)

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
    const registerdUser = await this.model.find({ email: CreateUserDto.email }).exec()
    if (registerdUser.length) {
      throw new BadRequestException('This email address exists.') 
    }

    const salt = randomBytes(8).toString('hex')
    const hash = await (scrypt(CreateUserDto.password, salt, 32)) as Buffer
    const result = salt + '.' + hash.toString('hex')

    return await new this.model({
      name: CreateUserDto.name,
      email: CreateUserDto.email,
      password: result,
      createdAt: new Date(),
    }).save()
  }
}
