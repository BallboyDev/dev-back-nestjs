import { Module } from "@nestjs/common";
import { TotalMemberManageController } from "./totalMemberManage/totalMemberManage.controller";
import { TotalMemberManageService } from "./totalMemberManage/totalMemberManage.service";
import { AdminController } from "./admin/admin.controller";
import { AdminService } from "./admin/admin.service";
import { ScoreRecordController } from "./scoreRecord/scoreRecord.controller";
import { ScoreRecordService } from "./scoreRecord/scoreRecord.service";
import { LandingContoller } from "./landing/landing.controller";
import { LandingService } from "./landing/landing.service";

@Module({
    imports: [],
    controllers: [TotalMemberManageController, AdminController, ScoreRecordController, LandingContoller],
    providers: [TotalMemberManageService, AdminService, ScoreRecordService, LandingService]
})
export class BowlingModule { }