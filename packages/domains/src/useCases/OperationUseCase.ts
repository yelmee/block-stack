import IOperationUseCase
    from "./interfaces/IOperationUseCase";
import INetworkOperationRepository
    from "../repositories/interfaces/INetworkOperationRepository";
import {
    IIndexDBRepository
} from "../repositories/interfaces/IIndexDBRepository";
import {
    IBlockMap
} from "../entities/interfaces/IBlock";
import Block
    from "../entities/Block";
import{
    IOperationRequestParams,
} from "../aggregates/interface/IOperation";
import Operation
    from "../aggregates/Operation";

export default class OperationUseCase implements IOperationUseCase {
    networkRepo: INetworkOperationRepository
    indexDBRepo: IIndexDBRepository
    isOnline: boolean

    constructor(indexDBRepo: IIndexDBRepository, networkRepo: INetworkOperationRepository) {
        this.networkRepo = networkRepo
        this.indexDBRepo = indexDBRepo
        this.isOnline = false
    }

    async setIsOnline(isOnline: boolean): Promise<void> {
        this.isOnline = isOnline
    }

    async getBlocks(spaceId: string): Promise<IBlockMap> {
        const res = this.isOnline ? await this.networkRepo.getBlocks(spaceId) : await this.indexDBRepo.getBlocks(spaceId)
        const arr = Object.entries(res).map(([key, block]) =>{
            return [key, new Block({
                content: block.content,
                created_by_id: block.created_by_id,
                created_time: block.created_time,
                id: block.id,
                last_modified: block.last_modified,
                last_updated: block.last_modified,
                parent_id: block.parent_id,
                properties: block.properties,
                space_id: block.space_id,
                type: block.type

            })]
        })
        return Object.fromEntries(arr)
    }
    async getBlock(spaceId: string, blockId: string): Promise<IBlockMap> {
        const res = await this.getBlocks(spaceId)
        const arr = Object.entries(res).filter(([key, block]) =>{
            if (key === blockId) {
                return [key, block]
            }
        })
        return Object.fromEntries(arr)
    }

    async insertOperation(operation: IOperationRequestParams): Promise<boolean> {
        const omit = (obj: IOperationRequestParams, keys: string[]) =>
            Object.fromEntries(
                Object.entries(obj).filter(([key]) => !keys.includes(key))
            );

        const arg = omit(operation, ['id', 'command'])
        const op = new Operation(operation.id, {
            pointer: {id: operation.id},
            command: operation.command,
            path: [],
            arg: {...arg},
        })
        return this.isOnline ? await this.networkRepo.updateOperation([op]) : await this.indexDBRepo.updateOperation([op])
    }

    async flushOperations(): Promise<boolean> {
        const res = await this.indexDBRepo.getOperations()
        return await this.networkRepo.updateOperation(res)
    }

}