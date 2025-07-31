import {
} from "../../aggregates/Operation";
import
  {
  IBlockMap
} from "../../entities/interfaces/IBlock";
import {
  IOperationRequestParams
} from "../../aggregates/interface/IOperation";


export default interface IOperationUseCase {
  setIsOnline(isOnline: boolean): void
  getBlocks(spaceId: string): Promise<IBlockMap>
  getBlock(spaceId: string, blockId: string): Promise<IBlockMap>
  insertOperation(operation: IOperationRequestParams): Promise<boolean>
  flushOperations(): Promise<boolean>
}
