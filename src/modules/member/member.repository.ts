import { Inject } from "@nestjs/common";
import { Score } from "src/common/database/entity/score.entity";
import { DataSource } from "typeorm";

export class MemberRepository {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async findAll(): Promise<Score[]> {
        const sql = 'select * from score';
        return this.dataSource.query(sql)
    }
}