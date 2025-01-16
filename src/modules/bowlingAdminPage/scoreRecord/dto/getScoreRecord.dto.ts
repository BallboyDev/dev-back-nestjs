export class GetScoreRecordOutput {
    id: number;
    name: string;
    date: Date;
    type: string;
    count: number;
    total: number;
    avg: number;
    scores: string;
}

export const GetScoreRecordQuery = `
    select m.id 			AS id, 
            m.name			as name,
            pg.date			as date,
            case 
                when pg.type = 0 then '정기전'
                else '번개'
            end             as type,
            count(s.score)	as count,
            sum(s.score)	as total,
            avg(s.score)	as avg,
            group_concat(s.score)	as scores
        from members as m
            left outer join play_games as pg 
                on pg.userId = m.id
            left outer join scores as s
                on s.gameId  = pg.id
        where m.id = ?
        group by m.id, pg.id
`