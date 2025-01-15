import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { CreateMemberInput, CreateMemberOutput, CreateMemberQuery } from "./dto/createMember.dto";
import { GetMemberOutput, GetMemberQuery } from "./dto/getMember.dto";


@Injectable()
export class AdminService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async getMember(): Promise<GetMemberOutput[]> {
        return await this.dataSource.query(GetMemberQuery)
    }

    async createMember(input: CreateMemberInput): Promise<CreateMemberOutput> {
        const result = await this.dataSource.query(CreateMemberQuery, [
            input.name,
            input.birth,
            input.phone
        ])

        console.log('ballboy >>', result)

        return new CreateMemberOutput('success', [result.insertId])
    }

}