import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Bap_c01Input, Bap_c01Output, Bap_c01Query } from "./dto/bap_c01.dto";

@Injectable()
export class AdminService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async bap_c01(input: Bap_c01Input): Promise<Bap_c01Output[]> {
        const result = await this.dataSource.query(Bap_c01Query, [
            input.name,
            input.birthDate
        ])

        console.log('ballboy >>', result)

        return null;
    }
}