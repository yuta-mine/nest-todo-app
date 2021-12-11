import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose'
import { LoggerMiddleware } from './middleware/logger.middleware'
  
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-todo-app'),
    TodoModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todos')
  }
}
