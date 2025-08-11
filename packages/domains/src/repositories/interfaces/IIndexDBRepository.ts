import {
    IBlockMapDTO
} from "../../dtos/interfaces/IBlockDTO";
import {
    IOperation,
} from "../../aggregates/interface/IOperationRequest";

export interface IIndexDBRepository {
    getBlocks(spaceId: string): Promise<IBlockMapDTO>
    getOperations(spaceId: string): Promise<IOperation[]>
    insertOperation(spaceId: string, operation: IOperation): Promise<string>
    deleteOperation(spaceId: string, operation: IOperation): Promise<void>
}