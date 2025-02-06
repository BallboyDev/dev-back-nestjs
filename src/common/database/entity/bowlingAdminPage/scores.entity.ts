import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Commons } from "../common.entity";

@Entity()
export class Scores extends Commons {


    @Column()
    gameId: number;

    @Column()
    score: number;

    @Column()
    allCover: boolean
}