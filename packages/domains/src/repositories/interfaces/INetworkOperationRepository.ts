import {
    IBlockMapDTO
} from "../../dtos/interfaces/IBlockDTO";
import {
} from "../../aggregates/Operation";
import IOperation, {
} from "../../aggregates/interface/IOperation";


export default interface INetworkOperationRepository {
    getBlocks(spaceId: string): Promise<IBlockMapDTO>
     updateOperation(operation: IOperation[]): Promise<boolean>
}