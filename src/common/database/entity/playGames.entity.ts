import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayGames {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    place: string;

    @Column()
    userId: number;

    @Column()
    date: Date;
}