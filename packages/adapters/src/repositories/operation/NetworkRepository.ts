import INetworkOperationRepository
    from "domains/src/repositories/interfaces/INetworkOperationRepository";
import ApiDB
    from "../../infrastructures/ApiDB";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";
import IOperation
    from "domains/src/aggregates/interface/IOperation";
import {
    BlockDTO
} from "../../dtos/BlockMapDTO";

export default class NetworkRepository implements INetworkOperationRepository {
    apiDB: ApiDB

    constructor(db: ApiDB) {
        this.apiDB = db
    }

    async getBlocks(spaceId: string): Promise<IBlockMapDTO> {
        const res  = await this.apiDB.rpc('handle_block', {s_id: spaceId} as {s_id: string})
        if (res.data) {
            const dd = Object.entries(res.data as IBlockMapDTO).map(([key, value] ) =>{
              return [key, new BlockDTO({
                    content: value.content,
                    created_by_id: value.content,
                    created_time: "",
                    id: "",
                    last_modified: "",
                    last_updated: "",
                    parent_id: "",
                    properties: "",
                    space_id: "",
                    type: ""

                })]
            })
            return Object.fromEntries(dd)
        }else {
            return {} as IBlockMapDTO
        }
    }

    async updateOperation(operaions: IOperation[]): Promise<boolean> {
        const res = await this.apiDB.rpc('handle_operation', {op: operaions} as {op: Record<any, any>})

        if (res.error) {
            return false
        } else {
            return true
        }
    }
};