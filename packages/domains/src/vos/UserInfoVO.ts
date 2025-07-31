import IUserInfoVO, { IUserInfoVOParams } from "./interfaces/IUserInfoVO"

export default class UserInfoVO implements IUserInfoVO {
  readonly email: string
  readonly password: string

  constructor(params: IUserInfoVOParams) {
    this.email = params.email
    this.password = params.password
  }
}
