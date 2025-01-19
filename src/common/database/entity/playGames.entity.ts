import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayGames {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 }) // 정기전 : 0, 번개 : 1
    type: number;

    @Column()
    place: string

    @Column()
    date: Date;

    @Column()
    userId: number;
}