import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { GetUserInfoInput, GetUserInfoOutput, GetUserInfoQuery } from "./dto/getUserInfo.dto";

@Injectable()
export class LandingService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async getUserInfo(input: GetUserInfoInput): Promise<GetUserInfoOutput> {

        return await this.dataSource.query(GetUserInfoQuery, [input.name, input.num])
    }
}