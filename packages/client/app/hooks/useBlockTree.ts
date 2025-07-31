"use client"

import {
    DetailedHTMLProps,
    HTMLAttributes,
    useMemo,
    useState
} from "react";
import presenters
    from "@app/di/useDi";
import {
    useParams
} from "next/navigation";
import {
    BlockTreeVM
} from "@app/vms/BlockVM";

export type KeyBoardEvent  = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export const useBlockTree = () =>{
    const di = useMemo(() => presenters(), [])
    const params = useParams<{spaceId: string}>()

    const [blockTree, setBlockTree] = useState<BlockTreeVM['value']>({})

    const updateBlock = async (props: KeyBoardEvent) => {

        const idx = props.id as string
        const properties = props.defaultValue
        const target = blockTree[idx]
        if (!properties || !idx) return

        setBlockTree({...blockTree, idx: {...target, properties: properties.toString()}})

       const isSuccess = await di.operation.insertOperationQueue({
           command: "update",
           id: "",
           properties: "",
           last_modified: ""
       })
        if (isSuccess) {
            console.log('success')
        }
    }

    const createBlock = async () => {

        const isSuccess = await di.operation.insertOperationQueue({
            created_by_id: "",
            id: "",
            parent_id: "",
            space_id: "",
            command: "insert"
        })

        if (isSuccess) {
            console.log('success')
        }
    }


    const getBlocks = async () => {
        const res = await di.operation.getBlocks(params.spaceId)

        if (res) {
            setBlockTree(res)
        }
    }

    return {createBlock, updateBlock, blockTree, getBlocks}
}
