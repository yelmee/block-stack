import IUser from "../entities/interfaces/IUser";
import { IUserInfoVOParams } from "../vos/interfaces/IUserInfoVO";
import IAuthUseCase
    from "./interfaces/IAuthUseCase";
import INetworkAuthRepository
    from "../repositories/interfaces/INetworkAuthRepository";
import {
    IAuthDTO
} from "../dtos/interfaces/IAuthDTO";

export default class AuthUseCase implements IAuthUseCase {

    authRepo: INetworkAuthRepository
    constructor(authRepo: INetworkAuthRepository) {
        this.authRepo = authRepo
    }
    getUser(): Promise<IUser> {
        return this.authRepo.getUser()
    }
    signUp(params: IUserInfoVOParams): Promise<IAuthDTO> {
        return this.authRepo.signUp(params)
    }
    signIn(params: IUserInfoVOParams): Promise<boolean> {
        return this.authRepo.signIn(params)
    }
    signOut(): Promise<boolean> {
        return this.authRepo.signOut()
    }

}