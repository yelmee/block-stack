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
    IBlockRepository
} from "domains/src/repositories/interfaces/IBlockRepository";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";
import ApiDB
    from "adapters/src/infrastructures/ApiDB";


type Schema = Database['public']
type FnName = string & keyof Schema['Functions']
type Fn<T extends FnName> =  Schema['Functions'][T]
type ARGS<T extends FnName>=  Fn<T>['Args']

export default class NetworkRepository implements IBlockRepository {
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

    async getBlocks(spaceId: string): Promise<IBlockMapDTO|{}>{
        const {data} =  await this.rpc({fn: "apply_operation", args: {s_id: spaceId}})
        if (data) {
            return {value: data.value}  as IBlockMapDTO
        }else {
            return {}
        }
    }

    async updateOperation(spaceId: string, operation: IOperation[]): Promise<IBlockMapDTO | {}>{
        const {data} =  await this.rpc({
            fn: "handle_operation",
            args: {op: operation as Record<any, any>}
        })
        if (data) {
            return { value: data.value}  as IBlockMapDTO
        }else {
            return {}
        }
    }

    deleteOperation(spaceId: string, operation: IOperation): Promise<void> {
        return Promise.resolve(undefined);
    }

    getOperations(spaceId: string): Promise<IOperation[]> {
        return Promise.resolve([]);
    }

    insertOperation(spaceId: string, operation: IOperation): Promise<string> {
        return Promise.resolve("");
    }
};