import {
    IBlockRepository
} from "domains/src/repositories/interfaces/IBlockRepository";
import {
    IOperation
} from "domains/src/aggregates/interface/IOperationRequest";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";
import {
    MOCK_BLOCKS
} from "client/lib/mockBlocks";

export class MockBlockRepository implements IBlockRepository{

     blocks: IBlockMapDTO = {...MOCK_BLOCKS};
     operations: Map<string, IOperation[]> = new Map()

    deleteOperation(spaceId: string, operation: IOperation): Promise<void> {
        const ops = this.operations.get(spaceId) || []
        const filtered = ops.filter(op => op.pointer !== operation.pointer || op.command !== operation.command)

        this.operations.set(spaceId, filtered)
        return Promise.resolve();
    }

    getBlocks = async (spaceId: string):Promise<IBlockMapDTO> => {
        return Promise.resolve({...this?.blocks});
    }

    getOperations(spaceId: string): Promise<IOperation[]> {
        const ops = this?.operations.get(spaceId) || []

        return Promise.resolve([...ops]);
    }

    insertOperation(spaceId: string, operation: IOperation): Promise<string> {
        const ops = this.operations.get(spaceId) || []
        ops.push(operation)

        this.operations.set(spaceId, ops);

        return Promise.resolve("mock-operation-id");
    }

    reset(): void {
        this.blocks = {...MOCK_BLOCKS}
        this.operations.clear()
    }
}