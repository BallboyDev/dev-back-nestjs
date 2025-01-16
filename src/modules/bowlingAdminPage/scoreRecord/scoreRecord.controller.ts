import { Controller, Get, Param } from "@nestjs/common";
import { ScoreRecordService } from "./scoreRecord.service";

@Controller('bap/scoreRecord')
export class ScoreRecordController {
    constructor(private readonly service: ScoreRecordService) { }

    @Get(':id')
    async getScoreRecord(@Param('id') id: number) {

        return this.service.getScoreRecord(id);
    }
}