import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo, TodoDocument } from './schemas/todo.schemas';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private readonly model: Model<(TodoDocument)>) { }
  
  async findAll(): Promise<Todo[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.model.findById(id).exec();
  }

  async create(CreateTodoDto: CreateTodoDto): Promise<Todo>{
    return await new this.model({
      ...CreateTodoDto,
      createdAt: new Date(),
    }).save()
  }

  async update(id: string, UpdateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, UpdateTodoDto).exec()
  }

  async delete(id: string): Promise<Todo> {
    return await this.model.findByIdAndDelete(id).exec()
  }
}
