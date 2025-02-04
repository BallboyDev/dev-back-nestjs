import { IsArray, IsString } from "class-validator";

export class JoinUserInfoInput {
    @IsString()
    name: string;

    @IsString()
    num: string;
}

export class JoinUserInfoOutput {
    constructor(state, ids) {
        this.state = state
        this.ids = ids
    }

    @IsString()
    state: string

    @IsArray()
    ids: number[]
}

export const JoinUserInfoQuery_findMember = `
    select id
        from members
        where name = ?
            and memberNum = ?
`

export const JoinUserInfoQuery_insertMember = `
    insert into members (name, memberNum, birth)
        values (?, ?, now())

`