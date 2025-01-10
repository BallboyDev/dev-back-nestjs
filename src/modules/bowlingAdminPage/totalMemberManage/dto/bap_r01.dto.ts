import { IsDecimal, IsInt, IsString, Max } from "class-validator";

export class Bap_r01Output {

    @IsInt()
    userId: number;

    @IsString()
    name: string;

    @IsString()
    grade: string;

    @IsInt()
    count: number;

    @IsInt()
    total: number;

    @IsDecimal()
    @Max(300)
    max: number;

    @IsDecimal()
    @Max(300)
    min: number;

    @IsDecimal()
    @Max(300)
    avg: number;
}

export const Bap_r01Query = `
    select m.id             as userId, 
            m.name              as name,  
            case 
                when grade = 1 then '회원' 
                else '운영진' 
            end                 as grade,
            count(*)            as count,
            sum(score)          as total,
            max(score)          as max,
            min(score)          as min,
            avg(score)          as avg
        from member m 
            left outer join play_game pg
                on m.id = pg.userId 
            left outer join score s
                on s.gameId = pg.id
        group by m.id;
`