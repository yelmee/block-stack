/* eslint-disable react-hooks/rules-of-hooks */
import Operation
    from "domains/src/aggregates/Operation";
import {
    DI
} from "../lib/di";
import {
    getBlockTreeVM
} from "../utils/object-parse";
import {
    DetailedHTMLProps,
    HTMLAttributes
} from "react";
import BlockMapDTO
    from "adapters/src/dtos/BlockMapDTO";

export type KeyBoardEvent  = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

    const getBlocks = async (spaceId: string) => {
            const resBLocks = await DI.operation.getBlocks(spaceId)
            return getBlockTreeVM(resBLocks)
        }


    const createBlock = async (spaceId: string, id: string, arg: string) => {
                const operation = new Operation({
                    command: "insert",
                    pointer:  id,
                    arg: arg ,
                    path: []
                })

                const res = await DI.operation.insertOperationQueue(spaceId, operation)
        if (res && res instanceof BlockMapDTO) {
            return getBlockTreeVM(res)
        }            }


    const updateBlock = async (spaceId: string, event: KeyBoardEvent, id: string) => {
        const operation = new Operation({
            command: "update",
            pointer: id || '',
            arg: event.defaultValue || '',
            path: ['properties']
        })

        const res = await DI.operation.insertOperationQueue(spaceId, operation)
        if (res && res instanceof BlockMapDTO) {
            return getBlockTreeVM(res)
        }
    }

            const deleteBlock = async (spaceId: string, postId: string) => {
                    const operation = new Operation({
                        command: "remove",
                        pointer: postId || '',
                        arg: {},
                        path: ['properties']
                    })

                await DI.operation.insertOperationQueue(spaceId, operation)
                }


    export {
        getBlocks,
        createBlock,
        updateBlock,
        deleteBlock
    }
