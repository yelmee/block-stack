import {
    startTransition,
    useEffect,
    useRef
} from "react";
import {
    Block
} from "../../../components/block/Block";
import {
    useBlockEditor
} from "../../../hooks/useBlockEditor";
import {
    createInsertBlockOperation,
    createRemoveBlockOperation,
    createUpdateBlockOperation
} from "../../../lib/operations/blockOperations";
import {
    DragDropProvider,
    KeyboardSensor,
    PointerSensor,
} from '@dnd-kit/react';

import {
    move,
} from '@dnd-kit/helpers'

interface BlockEditorProps {
    spaceId: string;
    userId: string;
}

export default  function Index({spaceId, userId}: BlockEditorProps){

    const {blocks, isLoading, executeOperation, reorderIndex} = useBlockEditor(spaceId, userId)

    const blockRefs = useRef<Map<string, HTMLDivElement>>(new Map())



    const handleCreateBlock = (id: string) => startTransition(async () => {

        if(!blocks) return;
        const sortedArray = Object.values(blocks).sort((a,b) => a.order - b.order)
        const currentBlockIndex = sortedArray.findIndex((x) => x.id === id)
        const isAfterCurrentBlock = blocks[currentBlockIndex+1]

        let newId;

        if(isAfterCurrentBlock){
            newId = (sortedArray[currentBlockIndex].order + sortedArray[currentBlockIndex+1].order) / 2

        }else{
            newId = sortedArray[currentBlockIndex].order + 1

        }

        const operation = await createInsertBlockOperation({type: "text", id: `block-${sortedArray.length + 1}`, order: newId}, spaceId)

        if (operation) {
            await executeOperation(operation)
        }


        setTimeout(()=> {
            const newBlockElement = blockRefs.current.get(operation.pointer)

            if(!newBlockElement) return;
            if(newBlockElement){
                newBlockElement.focus()
            }
           const selection = window.getSelection()
           const range = document.createRange()

            range.selectNodeContents(newBlockElement)
            range.collapse(true)
            selection?.removeAllRanges()
            selection?.addRange(range)

        }, 0)
    })

    const handleDragEnd = (event: any) => {
        try {
            if(!blocks) return;
            const blockArray = Object.values(blocks)

            const newOrders = move(blockArray, event)
            // const newOrders = arrayMove(blockArray, oldIndex, newIndex)

          const newBlocks =  reorderIndex(newOrders.map(block=> block.id))

            Object.values(newBlocks).forEach((block) => {
                handleUpdateBlock(block.id, 'order', block.order)
            })

        } catch{

        }
    }

    const handleUpdateBlock = async (blockId: string, field: string, value: any) => {
        const operation = await createUpdateBlockOperation(blockId, field, value)

        await executeOperation(operation)
    }

    const handleDeleteBlock = (blockId: string, index: number) => startTransition(async () => {
        const operation = await createRemoveBlockOperation(spaceId, blockId)
        if (operation) {
            await executeOperation(operation)
        }

        setTimeout(()=> {
            if(!blocks) return;

            const previousBlockId = blocks[index]?.id
            const previousBlockElement = blockRefs.current.get(previousBlockId)

            if(!previousBlockElement) return;
            if(previousBlockElement){
                previousBlockElement.focus()
            }
            const selection = window.getSelection()
            const range = document.createRange()

            range.selectNodeContents(previousBlockElement)
            range.collapse(false)
            selection?.removeAllRanges()
            selection?.addRange(range)

        }, 0)
    })

    const handleFocusPrevious = (blockId: string) => {
        if(!blocks) return;

        const index = Object.values(blocks).findIndex(item => item.id === blockId)

        if(index === 0) return;
        const prevBlockId = Object.values(blocks)[index - 1].id
        const prevBlockElement = blockRefs.current.get(prevBlockId)

        if(prevBlockElement){
            prevBlockElement.focus()
        }
    }

    const handleFocusNext = (blockId: string) => {
        if(!blocks) return;

        const index = Object.values(blocks).findIndex(item => item.id === blockId)

        if(index >= Object.values(blocks).length - 1) return;
        const nextBlockId = Object.values(blocks)[index + 1].id
        const nextBlockElement = blockRefs.current.get(nextBlockId)

        if(nextBlockElement){
            nextBlockElement.focus()
        }
    }

    useEffect(() => {
        if(!blocks) return;
        console.log(Object.values(blocks),'blocks')
    }, [blocks]);

    if(isLoading) return <div>Loading...</div>

    return (
        <DragDropProvider
            onDragEnd={(event) => {
                handleDragEnd(event)
            }}
            sensors={[
                PointerSensor,
                KeyboardSensor,
            ]}>
        <div className="editor-container bg-zinc-800 max-w-4xl mx-auto py-8">
            {blocks && Object.values(blocks).map((block, index) => {
                return (
                    <Block
                        onUpdateBlockType={(type)=> handleUpdateBlock(block.id, "type", type)}
                        onUpdate={(field, value)=>handleUpdateBlock(block.id, field, value)}
                        onDelete={()=>handleDeleteBlock(block.id, index)}
                        onFocusNext={()=>handleFocusNext(block.id)}
                        onFocusPrevious={()=>handleFocusPrevious(block.id)}
                        onCreate={()=>handleCreateBlock(block.id)}
                        block={block}
                        key={block.id}
                        ref={(el)=>{
                            if(el){
                                blockRefs.current.set(block.id, el as HTMLDivElement)
                            }else{
                                blockRefs.current.delete(block.id)
                            }
                        }
                    }
                            />
                )
            })
            }
        </div>
        </DragDropProvider>
    )
}
