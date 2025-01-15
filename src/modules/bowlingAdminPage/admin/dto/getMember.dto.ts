export class GetMemberOutput {
    id: number;
    name: string;
}

export const GetMemberQuery = 'select id, name from members order by name'