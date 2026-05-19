import { IBlockMapDTO } from "domains/src/dtos/interfaces/IBlock";

export const PERF_SPACE_ID = 'perf-space-1';
export const PERF_USER_ID  = 'perf-user-1';

export function generate1000Blocks(): IBlockMapDTO {
  const blocks: IBlockMapDTO = {};
  const base = new Date('2024-01-01T00:00:00').getTime();

  for (let i = 0; i < 1000; i++) {
    const id = `block-perf-${i}`;
    const ts = new Date(base + i * 1000);
    blocks[id] = {
      id,
      type: 'text',
      properties: '{}',
      content: [`Block content ${i}`],
      parent_id: PERF_SPACE_ID,
      space_id: PERF_SPACE_ID,
      created_by_id: PERF_USER_ID,
      created_time: ts,
      last_updated: ts,
      last_modified: ts,
      order: i,
    };
  }

  return blocks;
}
