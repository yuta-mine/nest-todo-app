// import { BadRequestException, Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose'
// import { Model } from 'mongoose'
// import { UserService } from '../user/user.service'
// import { User, UserDocument } from '../user/schemas/user.schemas'
// import { CreateUserDto } from '../user/dto/create-user.dto.'
// import { randomBytes, scrypt as _scrypt } from 'crypto';
// import { promisify } from 'util';

// const scrypt = promisify(_scrypt)

// @Injectable()
// export class AuthService {
//   constructor(@InjectModel(User.name) private readonly model: Model<(UserDocument)>) { }
  
//   async signup(CreateUserDto: CreateUserDto): Promise<User> {
//     const userMail = await this.userService.findEmail(CreateUserDto.email)
//     if (userMail.email)
//       throw new BadRequestException('This email address exists.')
    
//     const salt = randomBytes(8).toString('hex')
//     const hash = await (scrypt(CreateUserDto.password, salt, 32)) as Buffer
//     const result = salt + '.' + hash.toString('hex')

//     return await new this.model({
//       ...CreateUserDto,
//       createdAt: new Date(),
//     })
//   }
// }
