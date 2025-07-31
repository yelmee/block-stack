
export default interface IOperation {
    requestId: string
    operation: {
        pointer: IPointer,
        command: string,
        path: string[],
        arg: {},
    }
}
export interface IPointer {id: string}


export type IOperationRequestParams = InsertBlockParams | UpdateBlockParams |DeleteBlockParams


export interface InsertBlockParams {
    command: 'insert'
    id: string
    parent_id: string;
    space_id: string;
    created_by_id: string
}

export interface UpdateBlockParams {
    command: 'update'
    id: string
    properties: string
    last_modified: string;
}

export interface DeleteBlockParams {
    command: 'remove'
    id: string
}
