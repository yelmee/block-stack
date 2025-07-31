import IAuthUseCase
    from "domains/src/useCases/interfaces/IAuthUseCase";
import {
    IAuthPresenter,

} from "./interfaces/IAuthPresenter";
import { IAuthDTO } from "domains/src/dtos/interfaces/IAuthDTO";
import { IUserInfoVOParams } from "domains/src/vos/interfaces/IUserInfoVO";

export default class AuthPresenter implements IAuthPresenter {

    authUseCase: IAuthUseCase

    constructor(authUseCase: IAuthUseCase) {
        this.authUseCase = authUseCase
    }

    signIn(authParams: IUserInfoVOParams): Promise<boolean> {
        return this.authUseCase.signIn(authParams)
    }
    signUp(authParams: IUserInfoVOParams): Promise<IAuthDTO> {
        return this.authUseCase.signUp(authParams)
    }
    signOut(): Promise<boolean> {
        return this.authUseCase.signOut()
    }
    getUser(): Promise<IAuthDTO> {
        return this.authUseCase.getUser()
    }



}