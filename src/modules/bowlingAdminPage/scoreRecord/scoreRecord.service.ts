import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { GetScoreRecordOutput, GetScoreRecordQuery_playGame, GetScoreRecordQuery_score } from "./dto/getScoreRecord.dto";
import { RegistGameInput, RegistGameOutput, RegistGameQuery_insertPlayGames, RegistGameQuery_insertScores } from "./dto/registGame.dto";
import { RegistScoreInput, RegistScoreOutput, RegistScoreQuery } from "./dto/registScore.dto";
import { DeletePlayGameOutput, DeletePlayGameQuery_playGame, DeletePlayGameQuery_score } from "./dto/deletePlayGame.dto";
import { UpdateScoreInput, UpdateScoreOutput, UpdateScoreQuery } from "./dto/updateScore.dto";
import { UpdateGameInput, UpdateGameOutput, UpdateGameQuery } from "./dto/updateGame.dto";

@Injectable()
export class ScoreRecordService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async getScoreRecord(memberNum: number): Promise<GetScoreRecordOutput[]> {
        const games = await this.dataSource.query(GetScoreRecordQuery_playGame, [memberNum])

        const output = await Promise.all(
            games.map(async (v) => {
                const score = await this.dataSource.query(GetScoreRecordQuery_score, [v.playGameId])
                return {
                    ...v,
                    scores: score
                }
            })
        )

        return output
    }

    async registGame(input: RegistGameInput): Promise<RegistGameOutput> {
        const { place, date, type, memberNum, initScore } = input

        const resultPlayGames = await this.dataSource.query(RegistGameQuery_insertPlayGames, [place, date, type, memberNum, initScore])
        const resultScores = await this.dataSource.query(RegistGameQuery_insertScores, [resultPlayGames.insertId, initScore, false])

        return new RegistGameOutput('success', [resultPlayGames.insertId], [resultScores.insertId])
    }

    async updateGame(input: UpdateGameInput): Promise<UpdateGameOutput> {
        const { id, date, place } = input
        const result = await this.dataSource.query(UpdateGameQuery, [date, place, id])

        return new UpdateGameOutput('success', [result.insertId])
    }

    async registScore(input: RegistScoreInput): Promise<RegistScoreOutput> {
        const { playGameId, score } = input

        const result = await this.dataSource.query(RegistScoreQuery, [playGameId, score])

        return new RegistScoreOutput('success', [result.insertId])
    }

    async updateScore(input: UpdateScoreInput): Promise<UpdateScoreOutput> {
        const { id, score } = input
        const result = await this.dataSource.query(UpdateScoreQuery, [score, id])
        return new UpdateScoreOutput('success', [result.insertId])
    }

    async deletePlayGame(playGameId: number) {
        const resultPlayGames = await this.dataSource.query(DeletePlayGameQuery_playGame, [playGameId])
        const resultScores = await this.dataSource.query(DeletePlayGameQuery_score, [playGameId])
        return new DeletePlayGameOutput('success', [resultPlayGames.affectedRows + resultScores.affectedRows])
    }
}