import INetworkOperationRepository
    from "domains/src/repositories/interfaces/INetworkOperationRepository";
import ApiDB
    from "../../infrastructures/ApiDB";
import {
    IOperation
} from "domains/src/aggregates/interface/IOperationRequest";
import {
    useQuery
} from "@tanstack/react-query";
import {
    Database
} from "client/database.types";
import {
    IBlockDTO,
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";


type Schema = Database['public']
type FnName = string & keyof Schema['Functions']
type Fn<T extends FnName> =  Schema['Functions'][T]
type ARGS<T extends FnName>=  Fn<T>['Args']

export default class NetworkRepository implements INetworkOperationRepository {
    private apiDB: ApiDB

    constructor(db: ApiDB) {
        this.apiDB = db
    }

    private async rpc({fn, args}:{fn: FnName, args: ARGS<typeof fn>}) {
        return useQuery({queryKey: [{fn, args
            }], queryFn: async ({ queryKey }) => {
                const [{ fn, args }] = queryKey;
                const {data, error} = await this.apiDB.rpc(fn, args);

                if (error) {
                  return new Error(error.message)
                }
                return data
            }})
    }
    async getBlock(spaceId: string, blockId: string): Promise<IBlockDTO>{
        const data =  await this.getBlocks(spaceId)
        if (data) {
            return data.value[blockId] as IBlockDTO
        }else {
            return {}  as IBlockDTO
        }
    }

    async getBlocks(spaceId: string): Promise<IBlockMapDTO>{
        const {data} =  await this.rpc({fn: "apply_operation", args: {s_id: spaceId}})
        if (data) {
            return {spaceId: spaceId, value: data.value}  as IBlockMapDTO
        }else {
            return {spaceId: spaceId, value: {}}  as IBlockMapDTO
        }
    }

    async updateOperation(spaceId: string, operation: IOperation[]): Promise<IBlockMapDTO> {
        const {data} =  await this.rpc({
            fn: "handle_operation",
            args: {op: operation as Record<any, any>}
        })
        if (data) {
            return {spaceId: spaceId, value: data.value}  as IBlockMapDTO
        }else {
            return {spaceId: spaceId, value: {}}  as IBlockMapDTO
        }
    }
};