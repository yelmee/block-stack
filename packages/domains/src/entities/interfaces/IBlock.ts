
export default interface IBlock {
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


export interface IBLockParams {
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

export interface IBlockMap {
   [key: string]: IBlock
}
