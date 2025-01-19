import { IsDateString, IsNumber, IsString } from "class-validator";

export class GetUserInfoInput {
    @IsString()
    name: string;

    @IsString()
    num: string;
}

export class GetUserInfoOutput {

    @IsString()
    name: string;

    @IsDateString()
    birth: Date;

    @IsDateString()
    join: Date;

    @IsNumber()
    grade: number;

    @IsString()
    phone: string;

    @IsString()
    memberNum: string;
}

export const GetUserInfoQuery = `
    select name,
            birth,
            'join',
            grade,
            phone, 
            memberNum
        from members
        where name = ?
            and memberNum = ?
`