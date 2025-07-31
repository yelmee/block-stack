import {
    IBlockDTO,
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";


export default class BlockMapDTO implements IBlockMapDTO{
    readonly spaceId: string
    value: {
         [key: string]: IBlockDTO
    }

    constructor(params: IBlockMapDTO) {
        this.value = params.value
        this.spaceId = params.spaceId
    }
}


export  class BlockDTO implements IBlockDTO{
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

    constructor(params: IBlockDTO) {
        this.id = params.id
        this.type = params.type
        this.properties = params.properties
        this.content = params.content
        this.parent_id = params.parent_id
        this.space_id = params.space_id
        this.last_updated = params.last_updated
        this.last_modified = params.last_modified
        this.created_time = params.created_time
        this.created_by_id = params.created_by_id
    }

}
