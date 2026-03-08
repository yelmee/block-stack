// hooks/useBlockEditor.ts
import {
    useEffect,
    useState
} from 'react';

import {
    IOperation
} from "domains/src/aggregates/interface/IOperationRequest";
import {
    blockOperationService
} from "domains/src/useCases/BlockOperationService";

import {
    IBlockMapDTO
} from "domains/src/dtos/interfaces/IBlock";
import BlockRepositoryFactory
    from "domains/src/useCases/BlockRepositoryFactory";


export function useBlockEditor(spaceId: string, userId: string) {
    const [blocks, setBlocks] = useState<IBlockMapDTO>();
    const [isLoading, setIsLoading] = useState(true);

    const repository = BlockRepositoryFactory.getRepository();

    // 초기 로드
    useEffect(() => {
        const asyncLoadBlock = async () =>{
                await loadBlocks();
        }
        asyncLoadBlock()

    }, [spaceId]);

    // Realtime 구독
    useEffect(() => {
        // const channel = supabase
        //     .channel(`space:${spaceId}`)
        //     .on('postgres_changes', {
        //         event: '*',
        //         schema: 'public',
        //         table: 'operations',
        //         filter: `space_id=eq.${spaceId}`
        //     }, handleRealtimeOperation)
        //     .subscribe();
        //
        // return () => {
        //     supabase.removeChannel(channel);
        // };
    }, [spaceId]);

    async function loadBlocks() {
        setIsLoading(true);
        // IndexedDB에서 먼저 로드 (빠른 초기 렌더링)

        try {
            const cachedBlocks = await repository.getBlocks(spaceId);
            setBlocks(cachedBlocks);
        } catch(error){
            console.error('Failed to load blocks',error);
        }finally {
            setIsLoading(false);
        }

        // 백그라운드에서 Supabase 동기화
        // await syncFromSupabase();
    }

    // async function syncFromSupabase() {
    //     // Supabase에서 미처리 operations 가져오기
    //     const operations = await getOperations(spaceId);
    //
    //     let currentBlocks = {...blocks};
    //     for (const op of operations) {
    //         currentBlocks = blockOperationService.applyOperation(currentBlocks, op);
    //     }
    //
    //     setBlocks(currentBlocks);
    // }
    //
    // function handleRealtimeOperation(payload: any) {
    //     const operation: IOperation = payload.new;
    //
    //     setBlocks(prev =>
    //         prev? blockOperationService.applyOperation(prev, operation) : undefined
    //     );
    // }

    // Optimistic UI 업데이트
    async function executeOperation(operation: IOperation) {
        // 1. 즉시 UI 업데이트
        setBlocks(prev =>
            prev ? blockOperationService.applyOperation(prev, operation) : undefined
        );

        // 2. IndexedDB에 저장
        // await insertOperation(spaceId, operation);

        // 3. Supabase에 전송 (백그라운드)
        try {
          await repository.insertOperation(spaceId, operation);

            // await supabase
            //     .from('operations')
            //     .insert({
            //         space_id: spaceId,
            //         command: operation.command,
            //         pointer: operation.pointer,
            //         path: operation.path,
            //         arg: operation.arg,
            //         created_at: new Date().toISOString()
            //     });

            // 성공하면 IndexedDB에서 제거
            // await deleteOperation(spaceId, operation);
        } catch (error) {
            // 실패 시 IndexedDB에 남겨두고 나중에 재시도
            setBlocks(prev =>
                prev ? blockOperationService.applyOperation(prev, {...operation, command: 'rollback'}) : undefined
            );
            console.error('Failed to sync operation', error);
        }
    }

    return {
        blocks,
        isLoading,
        executeOperation
    };
}