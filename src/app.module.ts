import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { BowlingModule } from './modules/bowlingAdminPage/bowling.module';
import { TodoListModule } from './modules/todoList/todoList.module';



@Module({
  imports: [DatabaseModule, BowlingModule, TodoListModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
