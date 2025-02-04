import { DataSource } from "typeorm";
import { PlayGames } from "./entity/playGames.entity";
import { Members } from "./entity/members.entity";
import { Scores } from "./entity/scores.entity";

export const AppDataSource = new DataSource({
    name: 'test',
    type: 'mariadb',
    // host: '172.17.0.2',
    // host: 'localhost',
    host: process.env.DB_HOST,
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'ballboy_dev',
    synchronize: true,
    entities: [Members, Scores, PlayGames],
    logging: true
})