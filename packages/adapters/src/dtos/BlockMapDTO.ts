import {
    IBlock,
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";

export  class BlockDTO implements IBlock{

    constructor(params: IBlock) {
        this.id = params.id
        this.type = params.type
        this.properties = params.properties
        this.content = params.content
        this.parent_id = params.parent_id
        this.space_id = params.space_id
        this.created_by_id = params.created_by_id
        this.created_time = params.created_time
        this.last_updated = params.last_updated
        this.last_modified = params.last_modified
        this.order = params.order
    }

    id: string;
    type: string;
    properties: string;
    content: string[];
    parent_id: string;
    space_id: string;
    last_updated: Date;
    last_modified: Date;
    created_time: Date;
    created_by_id: string;
    order: number;

}

export default class BlockMapDTO implements IBlockMapDTO{
    [blockId: string]: IBlock;

    constructor(params: IBlockMapDTO) {
         Object.entries(params).map(([key, value])=> {
             this[key] = new BlockDTO(value as IBlock)
        })
    }

    // updateValue(value: IBlockMapDTO) {
    //     const res =  Object.entries(value).map(([key, value])=> {
    //         return [key, new BlockDTO(value)]
    //     })
    //    return Object.fromEntries(res)
    // }

}


