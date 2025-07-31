import {
    IUserInfoVOParams
} from "domains/src/vos/interfaces/IUserInfoVO";
import {
    IAuthDTO
} from "domains/src/dtos/interfaces/IAuthDTO";


export  interface IAuthPresenter {
    signIn(authParams: IUserInfoVOParams): Promise<boolean>
    signUp(authParams: IUserInfoVOParams): Promise<IAuthDTO>
    signOut(): Promise<boolean>
    getUser(): Promise<IAuthDTO>
}
