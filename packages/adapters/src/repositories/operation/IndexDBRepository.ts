import {
    EntityTable
} from "dexie";
import {
    IIndexDBRepository
} from "domains/src/repositories/interfaces/IIndexDBRepository";
import IOperation
    from "domains/src/aggregates/interface/IOperation";
import IndexedDB
    from "../../infrastructures/IndexedDB";
import { IBlockMapDTO } from "domains/src/dtos/interfaces/IBlockDTO";


export default class IndexDBRepository implements IIndexDBRepository {
    db: IndexedDB
    operationTable: EntityTable<IOperation, 'requestId'>
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
    async  insertOperation(operation: IOperation): Promise<string> {
        return this.db.operations.put(operation);
    }
    async  updateOperation(operation: IOperation[]): Promise<boolean> {
        const res = operation.map(op =>{
            return this.db.operations.update(op.requestId, {operation: op.operation})
        }).every((v) => !!v)
        return res
    }
    async  deleteOperation(): Promise<void> {
            return this.db.operations.delete("")
    }

}