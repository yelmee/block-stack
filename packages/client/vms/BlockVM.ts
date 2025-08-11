import {
    IBlockTreeVM,
    IBlockVM
} from "./interfaces/IBlockVM";


export interface BlockTreeVM extends IBlockTreeVM{
    value: {  [key: string]: IBlockVM}

    // constructor(params: IBlockTreeVM) {
    //     this.value = this.updateValue(params)
    // }



}

export class BlockVM implements IBlockVM{
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

    constructor(params: IBlockVM) {
        this.id = params.id
        this.type = params.type
        this.properties = params.properties
        this.content = params.content
        this.parent_id = params.parent_id
        this.space_id = params.space_id
        this.created_by_id = params.created_by_id
        this.created_time = new Date(params.created_time)
        this.last_updated = new Date(params.last_updated)
        this.last_modified = new Date(params.last_modified)
    }
}
