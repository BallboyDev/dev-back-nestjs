import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { GetUserInfoInput, GetUserInfoOutput, GetUserInfoQuery } from "./dto/getUserInfo.dto";
import { JoinUserInfoInput, JoinUserInfoOutput, JoinUserInfoQuery_findMember, JoinUserInfoQuery_insertMember } from "./dto/joinUserInfo.dto";

@Injectable()
export class LandingService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async joinUserInfo(input: JoinUserInfoInput): Promise<JoinUserInfoOutput> {
        const findData = await this.dataSource.query(JoinUserInfoQuery_findMember, [input.name, input.num])
        if (findData.length > 0) {
            return new JoinUserInfoOutput('duplicate', [0])
        }

        const result = await this.dataSource.query(JoinUserInfoQuery_insertMember, [input.name, input.num])

        return new JoinUserInfoOutput('success', result.ids)
    }

    async getUserInfo(input: GetUserInfoInput): Promise<GetUserInfoOutput> {

        return await this.dataSource.query(GetUserInfoQuery, [input.name, input.num])
    }
}