import {
} from "adapters/src/presenters/interfaces/IAuthPresenter";
import {
    IUserInfoVOParams
} from "../../vos/interfaces/IUserInfoVO";
import {
    IAuthDTO
} from "../../dtos/interfaces/IAuthDTO";


export default interface INetworkAuthRepository{
    getUser(): Promise<IAuthDTO>
    signUp(user: IUserInfoVOParams): Promise<IAuthDTO>
    signIn(user: IUserInfoVOParams): Promise<boolean>
    signOut(): Promise<boolean>

}
