import {
    BlockVM
} from "../vms/BlockVM";
import {
    IBlock,
} from "domains/src/dtos/interfaces/IBlock";

const getBlockTreeVM = (value: IBlock) => {
    const res =  Object.entries(value).map(([key, value])=> {
        return [key, new BlockVM(value)]
    })
    return Object.fromEntries(res)
}

export {getBlockTreeVM}