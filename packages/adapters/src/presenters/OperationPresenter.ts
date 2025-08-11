import IOperationUseCase
    from "domains/src/useCases/interfaces/IOperationUseCase";
import {
    IOperationPresenter
} from "./interfaces/IOperationPresenter";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";
import {
    IOperation
} from "domains/src/aggregates/interface/IOperationRequest";

export default class OperationPresenter implements IOperationPresenter {
    operationUseCase: IOperationUseCase

    constructor(operationUseCase: IOperationUseCase) {
        this.operationUseCase = operationUseCase
    }

    setIsOnline(isOnline: boolean): void {
        return this.operationUseCase.setIsOnline(isOnline)
    }

    getBlocks(spaceId: string): Promise<IBlockMapDTO> {
        return this.operationUseCase.getBlocks(spaceId)
    }


    flushOperationQueue(spaceId: string): Promise<IBlockMapDTO> {
        return this.operationUseCase.flushOperations(spaceId)
    }

    insertOperationQueue(spaceId: string, params: IOperation): Promise<IBlockMapDTO | string> {
        return this.operationUseCase.updateOperation(spaceId, params)
    }


};