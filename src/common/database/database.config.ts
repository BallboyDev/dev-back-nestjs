import { DataSource } from "typeorm";
import { PlayGames } from "./entity/bowlingAdminPage/playGames.entity";
import { Members } from "./entity/bowlingAdminPage/members.entity";
import { Scores } from "./entity/bowlingAdminPage/scores.entity";
import { BowlingAlleys } from "./entity/bowlingAdminPage/bowlingAlleys.entity";

export const AppDataSource = new DataSource({
    name: 'test',
    type: 'mariadb',
    host: process.env.DB_HOST,
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'ballboy_dev',
    synchronize: true,
    entities: [Members, Scores, PlayGames, BowlingAlleys],
    logging: false
})