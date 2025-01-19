import { Controller, Get, Param, Query } from "@nestjs/common";
import { LandingService } from "./landing.service";
import { GetUserInfoInput } from "./dto/getUserInfo.dto";

@Controller('bap')
export class LandingContoller {
    constructor(private readonly service: LandingService) { }

    @Get('login')
    // async getUserInfo(@Query('name') name: string, @Query('num') num: string) {
    async getUserInfo(@Query() input: GetUserInfoInput) {
        console.log('ballboy findUserInfo', input)

        return this.service.getUserInfo(input)
    }
}