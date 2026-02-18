// lib/utils/blockUtils.ts

import {
    IBlock,
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";

/**
 * Block Map을 배열로 변환 (생성 시간 순 정렬)
 */
export function getBlocksAsArray(blocks: IBlockMapDTO): IBlock[] {
    return Object.values(blocks).sort((a, b) =>

        new Date(a.created_time).getTime() - new Date(b.created_time).getTime()
    );
}

/**
 * 특정 parent의 자식 블록들만 가져오기
 */
export function getChildBlocks(blocks: IBlockMapDTO, parentId: string): IBlock[] {
    return Object.values(blocks)
        .filter(block => block.parent_id === parentId)
        .sort((a, b) => new Date(a.created_time).getTime() - new Date(b.created_time).getTime());
}

/**
 * 블록의 텍스트 내용 가져오기
 */
export function getBlockText(block: IBlock): string {
    return block.content[0] || '';
}

/**
 * 블록이 비어있는지 확인
 */
export function isBlockEmpty(block: IBlock): boolean {
    return !block.content[0] || block.content[0].trim() === '';
}