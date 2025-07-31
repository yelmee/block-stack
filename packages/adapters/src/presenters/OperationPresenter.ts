import IOperationUseCase
    from "domains/src/useCases/interfaces/IOperationUseCase";
import {
    IOperationPresenter
} from "./interfaces/IOperationPresenter";
import { IOperationRequestParams } from "domains/src/aggregates/interface/IOperation";
import { IBlockMap } from "domains/src/entities/interfaces/IBlock";

export default class OperationPresenter implements IOperationPresenter {
    operationUseCase: IOperationUseCase

    constructor(operationUseCase: IOperationUseCase) {
        this.operationUseCase = operationUseCase
    }

    setIsOnline(isOnline: boolean): void {
        return this.operationUseCase.setIsOnline(isOnline)
    }
    getBlocks(spaceId: string): Promise<IBlockMap> {
        return this.operationUseCase.getBlocks(spaceId)
    }
    getBlock(spaceId: string, blockId: string): Promise<IBlockMap> {
        return this.operationUseCase.getBlock(spaceId, blockId)

    }
    flushOperationQueue(): Promise<boolean> {
        return this.operationUseCase.flushOperations()

    }
    insertOperationQueue(params: IOperationRequestParams): Promise<boolean> {
        return this.operationUseCase.insertOperation(params)

    }


};