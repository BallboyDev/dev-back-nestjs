import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { GetScoreRecordOutput, GetScoreRecordQuery } from "./dto/getScoreRecord.dto";

@Injectable()
export class ScoreRecordService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async getScoreRecord(id: number): Promise<GetScoreRecordOutput[]> {
        return this.dataSource.query(GetScoreRecordQuery, [id])
    }
}