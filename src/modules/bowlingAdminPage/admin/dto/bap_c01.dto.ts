import { IsDate, IsDateString, IsString } from "class-validator";

export class Bap_c01Input {
    @IsString()
    name: string;

    @IsDateString()
    birthDate: Date;
}

export class Bap_c01Output {

}

export const Bap_c01Query = `
    insert into member(name, birthDate)
        values (?, ?);
`