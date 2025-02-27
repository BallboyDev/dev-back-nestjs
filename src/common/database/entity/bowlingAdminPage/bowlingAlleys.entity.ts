import { Column, Entity } from "typeorm";
import { Commons } from "../common.entity";

@Entity()
export class BowlingAlleys extends Commons {
    @Column()
    name: string;
}