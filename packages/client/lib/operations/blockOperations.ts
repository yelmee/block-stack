/* eslint-disable react-hooks/rules-of-hooks */
import Operation
    from "domains/src/aggregates/Operation";
import {
    v4 as uuidv4
} from 'uuid';
import BlockRepositoryFactory
    from "domains/src/useCases/BlockRepositoryFactory";
import {
    IBlock
} from "domains/src/dtos/interfaces/IBlock";

// export type KeyBoardEvent  = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const repository = BlockRepositoryFactory.getRepository();

// const getBlocks = async (spaceId: string) => {
//     const resBLocks = await repository.getBlocks(spaceId)
//     return getBlockTreeVM(resBLocks)
// }


const createInsertBlockOperation = async (block: Partial<IBlock>, spaceId: string, id: string) => {
    const blockId = block.id || uuidv4();
    const now = new Date();

    return new Operation({
        command: "insert",
        pointer:  blockId,
        arg: {
            id: blockId,
            type: block.type || 'text',
            properties: block.properties || '{}',
            content: block.content || [''],
            parent_id: block.parent_id || spaceId,
            space_id: spaceId,
            created_by_id: id,
            created_time: now,
            last_updated: now,
            last_modified: now,
        } ,
        path: []
    })

    // const res = await DI.operation.insertOperationQueue(spaceId, operation)
    // if (res && res instanceof BlockMapDTO) {
    //     return getBlockTreeVM(res)
    // }
}


const createUpdateBlockOperation = async (spaceId: string, event: string, blockId: string) => {
    return new Operation({
        command: "update",
        pointer: blockId || '',
        arg: event || '',
        path: ['properties']
    })

    // const res = await DI.operation.insertOperationQueue(spaceId, operation)
    // if (res && res instanceof BlockMapDTO) {
    //     return getBlockTreeVM(res)
    // }
}

const createRemoveBlockOperation = async (spaceId: string, blockId: string) => {
    return new Operation({
        command: "remove",
        pointer: blockId || '',
        arg: {},
        path: []
    })

    // await DI.operation.insertOperationQueue(spaceId, operation)
}


export {
    // getBlocks,
    createUpdateBlockOperation,
    createRemoveBlockOperation,
    createInsertBlockOperation
}
