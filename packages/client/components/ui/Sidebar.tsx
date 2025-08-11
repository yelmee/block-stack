

import TextWithIcon
    from "./TextWithIcon";
import {
    IAuthDTO
} from "domains/src/dtos/interfaces/IAuthDTO";

interface IProps {
    user: IAuthDTO
}

export const Sidebar =  ({user}: IProps) => {

    {
        if(!user)
            return(
                <div>
                    loading
                </div>
            )
    }
    return (
        <>

            <h2>Sidebar</h2>
            {user &&
                <TextWithIcon
                    name={user.id + " 의 프로젝트"}
                    char={user.id}
                />}
        </>
    );
};
