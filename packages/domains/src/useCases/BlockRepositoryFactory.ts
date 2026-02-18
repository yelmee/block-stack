import {
    IBlockRepository
} from "../repositories/interfaces/IBlockRepository";
import {
    MockBlockRepository
} from "client/lib/repositories/operation/MockBlockRepository";


type RepositoryType = "supabase" | "indexeddb" | "mock"

export default class BlockRepositoryFactory {
    private static repository: IBlockRepository | null = null
    private static currentType : RepositoryType = 'mock'
    isOnline: boolean = false

    static getRepository(): IBlockRepository{
        if(!this.repository){
            return this.createRepository()
        }
        return this.repository
    }

    static setType(type: RepositoryType): void {
        this.currentType = type
        this.repository = null
    }

    private static createRepository(): IBlockRepository {
        switch (this.currentType) {
            case "indexeddb":
                // return new IndexedDBBlockRepository()
            case "supabase":
                // return new SupabaseBlockRepository()
            case "mock":
                return new MockBlockRepository()
             default:
                return new MockBlockRepository()
        }
    }
}