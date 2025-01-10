import { Body, Controller, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Bap_c01Input } from "./dto/bap_c01.dto";

@Controller('bap')
export class AdminController {
    constructor(private readonly service: AdminService) { }

    @Post('bap_c01')
    async createNewMember(@Body() input: Bap_c01Input) {
        return this.service.bap_c01(input)
    }
}