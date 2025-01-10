import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { BowlingModule } from './modules/bowlingAdminPage/bowling.module';



@Module({
  imports: [DatabaseModule, BowlingModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
