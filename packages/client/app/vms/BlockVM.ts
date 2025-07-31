import {
  IBlockVM
} from "@app/vms/interfaces/IBlockVM";


export interface BlockTreeVM {
   spaceId: string
  value: { [key: string]: IBlockVM
  }}
