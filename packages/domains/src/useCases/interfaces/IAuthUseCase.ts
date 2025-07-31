import IUser
    from "../../entities/interfaces/IUser";
import {
    IUserInfoVOParams
} from "../../vos/interfaces/IUserInfoVO";
import {
    IAuthDTO
} from "../../dtos/interfaces/IAuthDTO";

export default interface IAuthUseCase  {
    getUser(): Promise<IUser>
    signUp(params: IUserInfoVOParams): Promise<IAuthDTO>
    signIn(params: IUserInfoVOParams): Promise<boolean>
    signOut(): Promise<boolean>
}