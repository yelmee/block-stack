// import {
//     blockOperationService
// } from "domains/src/useCases/BlockOperationService";
// import {
//     IBlockMapDTO
// } from "domains/src/dtos/interfaces/IBlock";
// import {
//     createInsertBlockOperation,
//     createUpdateBlockOperation
// } from "../lib/operations/blockOperations";
//
// export async function testOperationService() {
//     console.log('🧪 Testing BlockOperationService...');
//
//     let blocks: IBlockMapDTO = {};
//
//     // 1. Insert 테스트
//     const insertOp = await createInsertBlockOperation(
//         {
//             type: 'text',
//             content: ['Hello']
//         },
//         'space-1',
//         'user-1',
//     );
//     blocks = blockOperationService.applyOperation(blocks, insertOp);
//     console.log('✅ Insert:', blocks);
//
//     // 2. Update 테스트
//     const blockId = Object.keys(blocks)[0];
//     const updateOp = createUpdateBlockOperation(blockId, ['content', '0'], 'Updated!');
//     blocks = blockOperationService.applyOperation(blocks, updateOp);
//     console.log('✅ Update:', blocks);
//
//     // 3. Remove 테스트
//     const removeOp = {
//         command: 'remove' as const,
//         pointer: {
//             id: blockId,
//             table: 'blocks'
//         },
//         path: [],
//         arg: {}
//     };
//     blocks = blockOperationService.applyOperation(blocks, removeOp);
//     console.log('✅ Remove:', blocks);
//
//     console.log('🎉 All tests passed!');
// }