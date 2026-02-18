// lib/mock/mockBlocks.ts

import {
    IBlock,
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";

export const MOCK_SPACE_ID = 'space-mock-1';
export const MOCK_USER_ID = 'user-mock-1';

// ✅ Flat 구조
export const MOCK_BLOCKS: IBlockMapDTO = {
    'block-1': {
        id: 'block-1',
        type: 'heading1',
        properties: '{}',
        content: ['Welcome to Block Editor 👋'],
        parent_id: MOCK_SPACE_ID,
        space_id: MOCK_SPACE_ID,
        created_by_id: MOCK_USER_ID,
        created_time: new Date('2024-01-01T00:00:00'),
        last_updated: new Date('2024-01-01T00:00:00'),
        last_modified: new Date('2024-01-01T00:00:00'),
    },
    'block-2': {
        id: 'block-2',
        type: 'text',
        properties: '{}',
        content: ['Notion 스타일 블록 에디터입니다.'],
        parent_id: MOCK_SPACE_ID,
        space_id: MOCK_SPACE_ID,
        created_by_id: MOCK_USER_ID,
        created_time: new Date('2024-01-01T00:00:01'),
        last_updated: new Date('2024-01-01T00:00:01'),
        last_modified: new Date('2024-01-01T00:00:01'),
    },
    'block-3': {
        id: 'block-3',
        type: 'text',
        properties: '{}',
        content: ['Enter를 눌러 새 블록을 만들어보세요.'],
        parent_id: MOCK_SPACE_ID,
        space_id: MOCK_SPACE_ID,
        created_by_id: MOCK_USER_ID,
        created_time: new Date('2024-01-01T00:00:02'),
        last_updated: new Date('2024-01-01T00:00:02'),
        last_modified: new Date('2024-01-01T00:00:02'),
    },
    'block-4': {
        id: 'block-4',
        type: 'text',
        properties: '{}',
        content: [''],
        parent_id: MOCK_SPACE_ID,
        space_id: MOCK_SPACE_ID,
        created_by_id: MOCK_USER_ID,
        created_time: new Date('2024-01-01T00:00:03'),
        last_updated: new Date('2024-01-01T00:00:03'),
        last_modified: new Date('2024-01-01T00:00:03'),
    },
};

// 블록을 배열로 변환 (순서 유지)
export function getBlocksAsArray(blocks: IBlockMapDTO): IBlock[] {
    return Object.values(blocks).sort((a, b) =>
        a.created_time.getTime() - b.created_time.getTime()
    );
}

// 특정 space의 블록만 필터링
export function getBlocksBySpace(blocks: IBlockMapDTO, spaceId: string): IBlockMapDTO {
    return Object.fromEntries(
        Object.entries(blocks).filter(([_, block]) => block.space_id === spaceId)
    );
}