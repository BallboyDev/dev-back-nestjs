export class GetScoreRecordOutput {
    id: number;
    name: string;
    date: Date;
    place: string;
    playGameId: number;
    type: string;
    count: number;
    total: number;
    avg: number;
    scores: object[]
}

export const GetScoreRecordQuery_playGame = `
    select m.id 			AS id, 
            m.name			as name,
            pg.date			as date,
            pg.id           as playGameId,
            pg.place        as place,
            case 
                when pg.type = 0 then '정기전'
                else '번개'
            end                                 as type,
            ifnull(count(s.score), 0)	        as count,
            ifnull(sum(s.score), 0)	            as total,
            ifnull(avg(s.score), 0)	            as avg
        from members as m
            inner join play_games as pg 
                on pg.userId = m.id
            left outer join scores as s
                on s.gameId  = pg.id
        where m.memberNum = ?
        group by m.id, pg.id
        order by pg.id desc
`
export const GetScoreRecordQuery_score = `
    select s.id             as id,
            s.gameId        as gameId,
            s.score         as score,
            s.allCover      as allCover
        from scores as s
        where s.gameId = ?
        order by s.id
`