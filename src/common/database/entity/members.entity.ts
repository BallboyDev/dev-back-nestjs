import { IsPhoneNumber } from "class-validator";
import dayjs from "dayjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Members {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    memberNum: string;

    @Column()
    birth: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    join: Date | null;

    @Column({ default: 1 })
    grade: number | null;

    @Column()
    @IsPhoneNumber()
    phone: string
}