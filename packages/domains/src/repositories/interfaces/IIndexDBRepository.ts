import {
} from "../../aggregates/Operation";
import {
    IBlockMapDTO
} from "../../dtos/interfaces/IBlockDTO";
import IOperation, {
} from "../../aggregates/interface/IOperation";

export interface IIndexDBRepository {
    getBlocks(spaceId: string): Promise<IBlockMapDTO>
    getOperations(): Promise<IOperation[]>
    insertOperation(operation: IOperation): Promise<string>
    updateOperation(operation: IOperation[]): Promise<boolean>
    deleteOperation(operation: IOperation): Promise<void>
}