import {
    IBlockMapDTO
} from "../../dtos/interfaces/IBlock";
import {
    IOperation,
} from "../../aggregates/interface/IOperationRequest";

export interface IBlockRepository {
    getBlocks(spaceId: string): Promise<IBlockMapDTO>
    getOperations(spaceId: string): Promise<IOperation[]>
    insertOperation(spaceId: string, operation: IOperation): Promise<string>
    deleteOperation(spaceId: string, operation: IOperation): Promise<void>
}