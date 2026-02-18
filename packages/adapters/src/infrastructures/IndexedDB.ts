import Dexie, {
    EntityTable
} from "dexie";
import Operation
    from "domains/src/aggregates/Operation";
import BlockMapDTO
    from "../dtos/BlockMapDTO";
import {
    IOperation
} from "domains/src/aggregates/interface/IOperationRequest";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";

export default class IndexedDB extends Dexie{
    operations!: EntityTable<IOperation, 'pointer'>
    blocks!: EntityTable<IBlockMapDTO, 'spaceId'>

    constructor() {
        super('OperationsDB');
        this.version(1).stores({
            operations: '++id, operations',
            blocks: '++id, blocks',
        })
        this.operations.mapToClass(Operation)
        this.blocks.mapToClass(BlockMapDTO)
    }
};