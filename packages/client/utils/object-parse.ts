import {
    BlockVM
} from "../vms/BlockVM";
import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlockDTO";

const getBlockTreeVM = (value: IBlockMapDTO) => {
    const res =  Object.entries(value).map(([key, value])=> {
        return [key, new BlockVM(value)]
    })
    return Object.fromEntries(res)
}

export {getBlockTreeVM}