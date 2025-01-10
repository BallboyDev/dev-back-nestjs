import dayjs from "dayjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    joinDate: Date | null;

    @Column({ default: 1 })
    grade: number | null;
}