import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Scores {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gameId: number;

    @Column()
    score: number;

    @Column()
    allCover: boolean
}