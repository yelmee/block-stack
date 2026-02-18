import {
    startTransition
} from "react";
import {
    Block
} from "../../../components/block/Block";
import {
    useBlockEditor
} from "../../../hooks/useBlockEditor";
import {
    getBlockTreeVM
} from "../../../utils/object-parse";
import {
    createUpdateBlockOperation
} from "../../../lib/operations/blockOperations";


interface BlockEditorProps {
    spaceId: string;
    userId: string;
}

export default async function BlockList({spaceId, userId}: BlockEditorProps){
    // const {spaceId} = useParams<{spaceId: string}>()

    // const [blockTree, setBlockTree] = useState<BlockTreeVM>({value: {}})
    // const [isPending, startTransition] = useTransition()

    const {blocks, isLoading, executeOperation} = useBlockEditor(spaceId)

    const handleCreateBlock = (blockId: string, field: string, value: any) => startTransition(async () => {
        const operation = await createUpdateBlockOperation(spaceId, value, blockId)
        if (operation) {
            await executeOperation(operation)
            // setBlockTree((prevPosts) => {
            //     return {
            //         value: {
            //             ...prevPosts.value,
            //             [operation.id]: operation
            //         }
            //     }
            // })
        }
    })

    const handleUpdateBlock = async (blockId: string, field: string, value: any) => {
        const operation = await createUpdateBlockOperation(blockId, field, value)

        await executeOperation(operation)
    }

    if(isLoading) return <div>Loading...</div>

    const blockArray = Object.values(blocks)

    return (
        <div className="editor-container bg-zinc-800 max-w-4xl mx-auto py-8">
            {blockArray.map((block) => {
                return (
                    <Block block={getBlockTreeVM(block)} key={block.id} onUpdate={handleUpdateBlock}/>
                )
            })
            }
        </div>
    )
}
