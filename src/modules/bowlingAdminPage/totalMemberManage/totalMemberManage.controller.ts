import { Controller, Get } from "@nestjs/common";
import { TotalMemberManageService } from "./totalMemberManage.service";

@Controller('bap')
export class TotalMemberManageController {
    constructor(
        private readonly service: TotalMemberManageService
    ) { }

    @Get()
    async getAllMember() {
        return this.service.bap_r01()
    }
}