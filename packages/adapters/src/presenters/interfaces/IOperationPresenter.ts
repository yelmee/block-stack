import {
    IOperationRequestParams
} from "domains/src/aggregates/interface/IOperation";
import {
    IBlockMap
} from "domains/src/entities/interfaces/IBlock";

export interface IOperationPresenter{

    setIsOnline(isOnline: boolean): void
    getBlocks(spaceId: string): Promise<IBlockMap>
    getBlock(spaceId: string, blockId: string): Promise<IBlockMap>
    flushOperationQueue(): Promise<boolean>
    insertOperationQueue(params: IOperationRequestParams): Promise<boolean>
}
