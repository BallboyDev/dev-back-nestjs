import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class LandingService {
    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) { }

    async findUserInfo() { }
}