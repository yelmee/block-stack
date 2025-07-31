import IUser
    , {
} from "./interfaces/IUser";

export default class User implements IUser{
    id: string;
    email: string

    constructor(props: IUser) {
        this.id = props.id
        this.email = props.email
    }
}
