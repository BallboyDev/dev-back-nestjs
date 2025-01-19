import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ScoreRecordService } from "./scoreRecord.service";
import { RegistGameInput } from "./dto/registGame.dto";
import { RegistScoreInput } from "./dto/registScore.dto";

@Controller('bap/scoreRecord')
export class ScoreRecordController {
    constructor(private readonly service: ScoreRecordService) { }

    @Get(':memberNum')
    async getScoreRecord(@Param('memberNum') memberNum: number) {

        return this.service.getScoreRecord(memberNum);
    }

    @Post('registGame')
    async registGame(@Body() input: RegistGameInput) {
        return this.service.registGame(input)
    }

    @Post('registScore')
    async registScore(@Body() input: RegistScoreInput) {
        return this.service.registScore(input)
    }
}