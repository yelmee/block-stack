import {
    ICommand,
    IOperation,
    IPointer
} from "./interface/IOperationRequest";


export default class Operation implements IOperation {
    command: ICommand;
    pointer: IPointer;
    path: string[];
    arg: {};

    constructor(op: IOperation) {
        this.command = op.command
        this.pointer = op.pointer
        this.path = op.path
        this.arg = op.arg
    }
}

