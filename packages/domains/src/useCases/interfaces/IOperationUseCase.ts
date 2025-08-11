import {
  IOperation
} from "../../aggregates/interface/IOperationRequest";
import {
  IBlockMapDTO
} from "../../dtos/interfaces/IBlockDTO";


export default interface IOperationUseCase {
  setIsOnline(isOnline: boolean): void
  getBlocks(spaceId: string): Promise<IBlockMapDTO>
  updateOperation(spaceId: string, operation: IOperation): Promise<IBlockMapDTO | string>
  flushOperations(spaceId: string): Promise<IBlockMapDTO>
}
