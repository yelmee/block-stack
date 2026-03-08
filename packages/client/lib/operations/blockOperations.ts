/* eslint-disable react-hooks/rules-of-hooks */
import Operation
    from "domains/src/aggregates/Operation";
import {
    v4 as uuidv4
} from 'uuid';
import {
    IBlock
} from "domains/src/dtos/interfaces/IBlock";


const createInsertBlockOperation = async (block: Partial<IBlock>, spaceId: string) => {
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
            created_by_id: spaceId,
            created_time: now,
            last_updated: now,
            last_modified: now,
        } ,
        path: []
    })

}


const createUpdateBlockOperation = async (blockId: string, field: string, value: string) => {
    return new Operation({
        command: "update",
        pointer: blockId || '',
        arg: value || '',
        path: field ? [field] : ['properties']
    })

}

const createRemoveBlockOperation = async (spaceId: string, blockId: string) => {
    return new Operation({
        command: "remove",
        pointer: blockId || '',
        arg: {},
        path: []
    })

}


export {
    // getBlocks,
    createUpdateBlockOperation,
    createRemoveBlockOperation,
    createInsertBlockOperation
}
