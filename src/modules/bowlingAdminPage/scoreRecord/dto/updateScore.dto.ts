import { IsArray, IsNumber, IsString } from "class-validator"

export class UpdateScoreInput {
    @IsNumber()
    id: number;

    @IsNumber()
    score: number;
}

export class UpdateScoreOutput {
    constructor(state, ids) {
        this.state = state
        this.ids = ids
    }

    @IsString()
    state: string

    @IsArray()
    ids: number[]

}
export const UpdateScoreQuery = `
    update scores
        set score = ?
        where id = ?
`