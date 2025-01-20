import { IsArray, IsString } from "class-validator"

export class DeletePlayGameOutput {
    constructor(state, ids) {
        this.state = state
        this.ids = ids
    }

    @IsString()
    state: string

    @IsArray()
    ids: number[]
}
export const DeletePlayGameQuery_playGame = `
    delete from play_games    
        where id = ?;
`

export const DeletePlayGameQuery_score = `
    delete from scores
        where gameId = ?
`