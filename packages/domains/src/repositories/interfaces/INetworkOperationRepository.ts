import {
    IBlockDTO,
    IBlockMapDTO
} from "../../dtos/interfaces/IBlockDTO";
import {
    IOperation
} from "../../aggregates/interface/IOperationRequest";

export default interface INetworkOperationRepository {
    getBlock(spaceId: string, blockId: string): Promise<IBlockDTO>
    getBlocks(spaceId: string): Promise<IBlockMapDTO>
    updateOperation(spaceId: string, operation: IOperation[]): Promise<IBlockMapDTO>
}