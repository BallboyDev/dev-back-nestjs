import { Controller, Get } from "@nestjs/common";

@Controller('bap')
export class LandingContoller {
    constructor() { }

    @Get('userInfo')
    async findUserInfo() {

    }
}