import { Module } from "@nestjs/common";
import { ScoreRecordController } from "./scoreRecord/scoreRecord.controller";
import { ScoreRecordService } from "./scoreRecord/scoreRecord.service";
import { LandingContoller } from "./landing/landing.controller";
import { LandingService } from "./landing/landing.service";

@Module({
    imports: [],
    controllers: [ScoreRecordController, LandingContoller],
    providers: [ScoreRecordService, LandingService]
})
export class BowlingModule { }