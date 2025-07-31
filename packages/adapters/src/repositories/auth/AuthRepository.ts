import INetworkAuthRepository
    from "domains/src/repositories/interfaces/INetworkAuthRepository";
import {
    IUserInfoVOParams
} from "domains/src/vos/interfaces/IUserInfoVO";
import ApiDB
    from "../../infrastructures/ApiDB";
import {
    SupabaseAuthClient
} from "@supabase/supabase-js/src/lib/SupabaseAuthClient";
import {
    IAuthDTO
} from "domains/src/dtos/interfaces/IAuthDTO";
import {
    AuthDTO
} from "../../dtos/AuthDTO";

export default class AuthRepository implements INetworkAuthRepository {
    authDB: SupabaseAuthClient

    constructor(db: ApiDB) {
        this.authDB = db.auth
    }


    async getUser(): Promise<IAuthDTO> {
        const res = await this.authDB.getUser()
        const user = res.data.user
        if (user) {
            return new AuthDTO({
                id: user.id,
                email: user.email as string,
            })
        }else{
            return {} as IAuthDTO
        }
    }
    async signUp(user: IUserInfoVOParams): Promise<IAuthDTO> {
        const res =await this.authDB.signUp(user)
        return new AuthDTO({
            email: "",
            id: ""
        }) || {} as IAuthDTO
    }
    async signIn(user: IUserInfoVOParams): Promise<boolean> {
        const res =await this.authDB.signInWithPassword(user)
        return !!res.data.user
    }

    async signOut(): Promise<boolean> {
        const res = await this.authDB.signOut()
        return !res.error
    }

}