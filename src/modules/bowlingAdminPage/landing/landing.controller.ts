import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { LandingService } from "./landing.service";
import { GetUserInfoInput } from "./dto/getUserInfo.dto";
import { JoinUserInfoInput } from "./dto/joinUserInfo.dto";

@Controller('bap')
export class LandingContoller {
    constructor(private readonly service: LandingService) { }

    @Post('join')
    async joinUserInfo(@Body() input: JoinUserInfoInput) {
        return this.service.joinUserInfo(input)
    }

    @Get('login')
    // async getUserInfo(@Query('name') name: string, @Query('num') num: string) {
    async getUserInfo(@Query() input: GetUserInfoInput) {
        console.log('ballboy findUserInfo', input)

        return this.service.getUserInfo(input)
    }
}