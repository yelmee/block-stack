import IOperation
    , {
    IPointer
} from "./interface/IOperation";


export default class Operation implements IOperation {
    requestId: string;
    operation: IOperationParams;

    constructor(requestId: string, operationParams: IOperationParams) {
        this.requestId = requestId
        this.operation = operationParams
    }
}

type IOperationParams =  InsertOperationType | UpdateOperationType | RemoveOperationType

type InsertOperationType = {
    pointer: IPointer,
    command: 'insert',
    path: string[],
    arg: {},
}


type UpdateOperationType = {
    pointer: IPointer,
    command: 'update',
    path: string[],
    arg: {},
}

type RemoveOperationType = {
    pointer: IPointer,
    command: 'remove',
    path: string[],
    arg: {},
}