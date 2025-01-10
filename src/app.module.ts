import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberController } from './modules/member/member.controller';
import { MemberService } from './modules/member/member.service';
import { MemberRepository } from './modules/member/member.repository';
import { DataSource } from 'typeorm';


@Module({
  imports: [MemberRepository, DataSource],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService],
})
export class AppModule { }
