import { IsArray, IsDate, IsNumber, IsString } from "class-validator"

export class UpdateGameInput {
    @IsNumber()
    id: number;

    @IsDate()
    date: Date

    @IsString()
    place: string
}

export class UpdateGameOutput {
    constructor(state, ids) {
        this.state = state
        this.ids = ids
    }

    @IsString()
    state: string

    @IsArray()
    ids: number[]
}

export const UpdateGameQuery = `
    update play_games
        set date = ?,
            place = ?
        where id = ?
`