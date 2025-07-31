import Dexie, {
    EntityTable
} from "dexie";
import IOperation, {
} from "domains/src/aggregates/interface/IOperation";
import Operation
    from "domains/src/aggregates/Operation";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";
import BlockMapDTO
    from "../dtos/BlockMapDTO";

export default class IndexedDB extends Dexie{
    operations!: EntityTable<IOperation, 'requestId'>
    blocks!: EntityTable<IBlockMapDTO, 'spaceId'>

    constructor() {
        super('OperationsDB');
        this.version(1).stores({
            operations: '++id, operations'
        })
        this.operations.mapToClass(Operation)
        this.blocks.mapToClass(BlockMapDTO)
    }
};