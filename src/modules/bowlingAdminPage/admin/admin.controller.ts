import { Body, Controller, Get, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateMemberInput } from "./dto/createMember.dto";

@Controller('bap/admin')
export class AdminController {
    constructor(private readonly service: AdminService) { }

    @Get('memberList')
    async getMember() {
        return this.service.getMember()
    }

    @Post('createMember')
    async createMember(@Body() input: CreateMemberInput) {
        console.log('ballboy createNewMember >>', input)

        return this.service.createMember(input);
    }
}