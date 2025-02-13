import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ScoreRecordService } from "./scoreRecord.service";
import { RegistScoreInput } from "./dto/registScore.dto";
import { UpdateScoreInput } from "./dto/updateScore.dto";
import { UpdateGameInput } from "./dto/updateGame.dto";
import { RegistGameInput } from "./dto/registGame.dto";

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

    @Post('updateGame')
    async updateGame(@Body() input: UpdateGameInput) {
        return this.service.updateGame(input)
    }

    @Post('registScore')
    async registScore(@Body() input: RegistScoreInput) {
        return this.service.registScore(input)
    }

    @Post('updateScore')
    async updateScore(@Body() input: UpdateScoreInput) {
        return this.service.updateScore(input)
    }

    @Delete('deletePlayGame/:playGameId')
    async deletePlayGame(@Param('playGameId') playGameId: number) {
        return this.service.deletePlayGame(playGameId);
    }
}