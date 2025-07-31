import IBlock, {
    IBLockParams
} from "./interfaces/IBlock";

export default class Block implements IBlock{
    readonly id: string
    readonly type: string
    readonly properties: string
    readonly content: string[]
    readonly parent_id: string;
    readonly space_id: string;
    readonly created_by_id: string
    readonly last_updated: Date;
    readonly last_modified: Date;
    readonly created_time: Date

    constructor(params: IBLockParams) {
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
