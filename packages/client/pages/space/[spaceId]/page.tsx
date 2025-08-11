import {
    BlockTreeVM
} from "../../../vms/BlockVM";
import {
    BlockComponent
} from "../../../components/block/BlockComponent";
import {
    useState,
    useTransition
} from "react";
import {
    KeyBoardEvent,
    updateBlock
} from "../../../actions/block-actions";
import {
    useParams
} from "next/navigation";


export default async function Page(){
    const {spaceId} = useParams<{spaceId: string}>()

    const [blockTree, setBlockTree] = useState<BlockTreeVM>({value: {}})
    const [isPending, startTransition] = useTransition()

    const handleEvent = (event: KeyBoardEvent, id: string) => startTransition(async () => {
        const updatedBlock = await updateBlock(spaceId, event, id)
        if (updatedBlock) {
            setBlockTree((prevPosts) => {
                return {
                    value: {
                        ...prevPosts.value,
                        [updatedBlock.id]: updatedBlock
                    }
                }
            })
        }
    })


    return (
        <div className="editor-container bg-zinc-800">
            {!isPending && Object.entries(blockTree).map(([key, value]) => {
                return (
                    <BlockComponent block={value} key={key} updateEvent={handleEvent}/>
                )
            })
            }
        </div>
    )
}
