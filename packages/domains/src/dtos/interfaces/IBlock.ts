

export interface IBlockMapDTO {
    [blockId: string]: IBlock
}

export interface IEditorSate {
    spaceId: string
    blocks: IBlockMapDTO
}

export type BlockType =
    | 'text'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'bulletList'
    | 'numberedList'
    | 'todo'
    | 'code';

export interface IBlock {
    readonly id: string
    readonly type: string
    readonly properties: string
    readonly content: string[]
    readonly parent_id: string;
    readonly space_id: string;
    readonly last_updated: Date;
    readonly last_modified: Date;
    readonly created_time: Date
    readonly created_by_id: string
}

