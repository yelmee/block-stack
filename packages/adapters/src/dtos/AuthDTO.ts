import {
    IAuthDTO
} from "domains/src/dtos/interfaces/IAuthDTO";

export class AuthDTO{
    id: string
    email: string

    constructor(params: IAuthDTO) {
        this.id = params.id
        this.email = params.email
    }
}