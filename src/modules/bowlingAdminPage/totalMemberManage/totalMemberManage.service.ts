import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Bap_r01Output, Bap_r01Query } from "./dto/bap_r01.dto";

@Injectable()
export class TotalMemberManageService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async bap_r01(): Promise<Bap_r01Output[]> {
        return await this.dataSource.query(Bap_r01Query);
    }
}