import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { GetScoreRecordOutput, GetScoreRecordQuery } from "./dto/getScoreRecord.dto";
import { RegistGameInput, RegistGameOutput, RegistGameQuery_insertPlayGames, RegistGameQuery_insertScores } from "./dto/registGame.dto";
import { RegistScoreInput, RegistScoreOutput, RegistScoreQuery } from "./dto/registScore.dto";

@Injectable()
export class ScoreRecordService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async getScoreRecord(memberNum: number): Promise<GetScoreRecordOutput[]> {
        return this.dataSource.query(GetScoreRecordQuery, [memberNum])
    }

    async registGame(input: RegistGameInput): Promise<RegistGameOutput> {
        const { place, date, type, memberNum, initScore } = input

        const resultPlayGames = await this.dataSource.query(RegistGameQuery_insertPlayGames, [place, date, type, memberNum, initScore])
        console.log('ballboy resultPlayGames >> ', resultPlayGames)

        const resultScores = await this.dataSource.query(RegistGameQuery_insertScores, [resultPlayGames.insertId, initScore, false])
        console.log('ballboy resultScores >> ', resultScores)

        return new RegistGameOutput('success', [resultPlayGames.insertId], [resultScores.insertId])
    }

    async registScore(input: RegistScoreInput): Promise<RegistScoreOutput> {
        const { playGameId, score } = input

        const result = await this.dataSource.query(RegistScoreQuery, [playGameId, score])

        return new RegistScoreOutput('success', [result.insertId])
    }
}