import { DataSource } from "typeorm";
import { PlayGame } from "./entity/playGame.entity";
import { Member } from "./entity/member.entity";
import { Score } from "./entity/score.entity";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'ballboy_dev',
    synchronize: true,
    entities: [Member, Score, PlayGame],
    logging: true
})