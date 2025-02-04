import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { BowlingModule } from './modules/bowlingAdminPage/bowling.module';
import { TodoListModule } from './modules/todoList/todoList.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV || 'dev'}.env`
    }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    DatabaseModule,
    BowlingModule,
    TodoListModule
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
