import {
    IBlock,
    IBlockMapDTO
} from "../../dtos/interfaces/IBlock";
import {
    IOperation
} from "../../aggregates/interface/IOperationRequest";

export default interface INetworkOperationRepository {
    getBlock(spaceId: string, blockId: string): Promise<IBlock>
    getBlocks(spaceId: string): Promise<IBlockMapDTO>
    updateOperation(spaceId: string, operation: IOperation[]): Promise<IBlockMapDTO>
}