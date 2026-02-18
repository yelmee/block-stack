import {
    EntityTable
} from "dexie";
import {
    IOperation
} from "domains/src/aggregates/interface/IOperationRequest";
import {
    IBlockRepository
} from "domains/src/repositories/interfaces/IBlockRepository";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";
import IndexedDB
    from "adapters/src/infrastructures/IndexedDB";


export default class IndexDBRepository implements IBlockRepository {
    db: IndexedDB
    operationTable: EntityTable<IOperation, 'pointer'>
    blocksTable: EntityTable<IBlockMapDTO, 'spaceId'>

    constructor(db: IndexedDB) {
        this.db = db
        this.operationTable = this.db.operations
        this.blocksTable = this.db.blocks

    }

   async getBlocks(spaceId: string): Promise<IBlockMapDTO> {
        const res = await this.db.blocks.get({key: spaceId})
        return res || {} as IBlockMapDTO
    }
    async getOperations(): Promise<IOperation[]> {
        const res = await this.db.operations.toArray()
        return res || [] as IOperation[]
    }
    async  insertOperation(spaceId: string, operation: IOperation): Promise<string> {
        return this.db.operations.add(operation);
    }

    async  deleteOperation(): Promise<void> {
            return this.db.operations.delete("")
    }

}