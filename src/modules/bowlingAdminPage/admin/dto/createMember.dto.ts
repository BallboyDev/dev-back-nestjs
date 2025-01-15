import { IsArray, IsDate, IsDateString, IsString } from "class-validator";

export class CreateMemberInput {
    @IsString()
    name: string;

    @IsDateString()
    birth: Date;

    @IsString()
    phone: string;
}

export class CreateMemberOutput {
    constructor(state, ids) {
        this.state = state
        this.ids = ids
    }

    @IsString()
    state: string;

    @IsArray()
    ids: number[];
}

export const CreateMemberQuery = `
    insert into members(name, birth, phone)
        values (?, ?, ?);
`