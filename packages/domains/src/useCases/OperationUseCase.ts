import IOperationUseCase
    from "./interfaces/IOperationUseCase";
import INetworkOperationRepository
    from "../repositories/interfaces/INetworkOperationRepository";
import {
    IIndexDBRepository
} from "../repositories/interfaces/IIndexDBRepository";
import Block
    from "../entities/Block";
import {
    IOperation
} from "../aggregates/interface/IOperationRequest";
import {
    IBlockMapDTO
} from "../dtos/interfaces/IBlockDTO";

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

    async getBlocks(spaceId: string): Promise<IBlockMapDTO> {
        const res = this.isOnline ? await this.networkRepo.getBlocks(spaceId) : await this.indexDBRepo.getBlocks(spaceId)
        if(!res) return {} as IBlockMapDTO
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

    async updateOperation(spaceId: string, operation: IOperation): Promise<IBlockMapDTO | string> {
        return this.isOnline ? await this.networkRepo.updateOperation(spaceId, [operation]) : await this.indexDBRepo.insertOperation(spaceId, operation)
    }

    async flushOperations(spaceId: string): Promise<IBlockMapDTO> {
        const res = await this.indexDBRepo.getOperations(spaceId)
        return await this.networkRepo.updateOperation(spaceId, res)
    }

}