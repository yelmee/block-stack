import {
    IBlockDTO,
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";

export  class BlockDTO implements IBlockDTO{

    constructor(params: IBlockDTO) {
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
    }

    id: string;
    type: string;
    properties: string;
    content: string[];
    parent_id: string;
    space_id: string;
    last_updated: string;
    last_modified: string;
    created_time: string;
    created_by_id: string;

}

export default class BlockMapDTO implements IBlockMapDTO{
    readonly spaceId: string
    value: {  [key: string]: IBlockDTO}

    constructor(params: IBlockMapDTO) {
        this.spaceId = params.spaceId
        this.value = this.updateValue(params.value)
    }

    updateValue(value: {  [key: string]: IBlockDTO}) {
        const res =  Object.entries(value).map(([key, value])=> {
            return [key, new BlockDTO(value)]
        })
       return Object.fromEntries(res)
    }
}


