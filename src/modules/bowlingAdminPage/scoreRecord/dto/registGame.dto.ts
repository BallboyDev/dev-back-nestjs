import { IsArray, IsDate, IsNumber, IsString } from "class-validator"

export class RegistGameInput {

    @IsDate()
    date: Date

    @IsString()
    place: string

    @IsString()
    type: string

    @IsString()
    memberNum: String

    @IsNumber()
    initScore: number
}

export class RegistGameOutput {
    constructor(state, playGames, scores) {
        this.state = state
        this.playGames = playGames
        this.scores = scores
    }

    @IsString()
    state: string;

    @IsArray()
    playGames: number[];

    @IsArray()
    scores: number[];
}

export const RegistGameQuery_insertPlayGames = `
    insert into play_games (place, date, type, userId)
    select ?, ?, ?, m.id
        from members as m
        where m.memberNum = ?;
`

export const RegistGameQuery_insertScores = `
    insert into scores (gameId, score, allCover)
        values(?, ?, ?)
`

