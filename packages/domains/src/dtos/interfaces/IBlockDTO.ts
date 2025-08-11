


export interface IBlockMapDTO {
     spaceId: string
        value: {  [key: string]: IBlockDTO}
}


export interface IBlockDTO {
    readonly id: string
    readonly type: string
    readonly properties: string
    readonly content: string[]
    readonly parent_id: string;
    readonly space_id: string;
    readonly last_updated: string;
    readonly last_modified: string;
    readonly created_time: string
    readonly created_by_id: string
}

