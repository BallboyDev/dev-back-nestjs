import { IsPhoneNumber } from "class-validator";
import dayjs from "dayjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Commons } from "./common.entity";

@Entity()
export class Members extends Commons {

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