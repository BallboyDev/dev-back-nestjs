import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Commons } from "../common.entity";

@Entity()
export class PlayGames extends Commons {

    @Column({ default: 0 }) // 정기전 : 0, 번개 : 1
    type: number;

    @Column()
    place: string

    @Column()
    date: Date;

    @Column()
    userId: number;
}