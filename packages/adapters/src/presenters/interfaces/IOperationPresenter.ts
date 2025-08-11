import {
    IOperation
} from "domains/src/aggregates/interface/IOperationRequest";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";

export interface IOperationPresenter{

    setIsOnline(isOnline: boolean): void
    getBlocks(spaceId: string): Promise<IBlockMapDTO>
    insertOperationQueue(spaceId: string, params: IOperation): Promise<IBlockMapDTO | string>
    flushOperationQueue(spaceId: string): Promise<IBlockMapDTO>
}
