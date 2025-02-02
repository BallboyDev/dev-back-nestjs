import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class Commons {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    modifiedAt: Date
}