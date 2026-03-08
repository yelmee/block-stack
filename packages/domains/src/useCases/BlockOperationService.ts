import {
    IBlock,
    IBlockMapDTO
} from "../dtos/interfaces/IBlock";
import {
    IOperation
} from "../aggregates/interface/IOperationRequest";

class BlockOperationService {

    applyOperation(
        blocks: IBlockMapDTO,
        operation: IOperation
    ): IBlockMapDTO {
        const { command, pointer, path, arg } = operation;
        const blockId = pointer;

        const oldBlock = blocks[blockId] || null;

        switch (command) {
            case 'insert':
                return {
                        ...blocks,
                        [blockId]: arg as IBlock
                };

            case 'update':
                const block = blocks[blockId];
                if (!block) return blocks;

                return {
                       ...blocks,
                       [blockId]: this.applyPath(block, path, arg)
                };

            case 'remove':
                const {  [blockId]: removed, ...rest}= blocks;
                return {...rest};

            case 'rollback':
                return {...blocks,  [blockId]: oldBlock};

            default:
                return blocks;
        }
    }

    private applyPath(obj: any, path: string[], value: any): any {
        if (path.length === 0) return value;

        const [head, ...tail] = path;
        return {
            ...obj,
            [head]: tail.length === 0
                ? value
                : this.applyPath(obj[head], tail, value)
        };
    }
}

// Singleton 인스턴스 export
export const blockOperationService = new BlockOperationService();
