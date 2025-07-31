"use client"
import React, {
    useEffect
} from "react";
import {
    useBlockTree
} from "@app/hooks/useBlockTree";
import {
    BlockComponent
} from "@app/components/Block";


export const BlockTreeComponent = () => {

    const {updateBlock, blockTree, getBlocks} = useBlockTree()


    useEffect(() => {
      const res = getBlocks()
        console.log(res)
    }, [getBlocks]);

    return (
    <div className="editor-container bg-zinc-800">
      {blockTree && Object.entries(blockTree).map(([key, value]) => {
              return (
                  <BlockComponent block={value} key={key} event={updateBlock}/>
              )
          })
          }
    </div>
  );
}
