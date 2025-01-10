import { Module } from "@nestjs/common";
import { TotalMemberManageController } from "./totalMemberManage/totalMemberManage.controller";
import { TotalMemberManageService } from "./totalMemberManage/totalMemberManage.service";
import { AdminController } from "./admin/admin.controller";
import { AdminService } from "./admin/admin.service";

@Module({
    imports: [],
    controllers: [TotalMemberManageController, AdminController],
    providers: [TotalMemberManageService, AdminService]
})
export class BowlingModule { }