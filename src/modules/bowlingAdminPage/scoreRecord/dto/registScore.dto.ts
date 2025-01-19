import { IsArray, IsNumber, IsString } from "class-validator"

export class RegistScoreInput {
    @IsNumber()
    playGameId: number

    @IsNumber()
    score: number
}

export class RegistScoreOutput {
    constructor(state, ids) {
        this.state = state
        this.ids = ids
    }

    @IsString()
    state: string

    @IsArray()
    ids: number[]

}

export const RegistScoreQuery = `
    insert into scores (gameId, score, allCover)
        values(?, ?, false);
`