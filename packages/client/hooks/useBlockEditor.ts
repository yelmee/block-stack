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


export function useBlockEditor(spaceId: string) {
    const [blocks, setBlocks] = useState<IBlockMapDTO>({});
    const [isLoading, setIsLoading] = useState(true);
    // const supabase = useSupabaseClient();
    // const indexDB = useIndexDB(); // 별도 구현 필요

    const repository = BlockRepositoryFactory.getRepository();
    const getBlocks = repository.getBlocks;
    const getOperations = repository.getOperations;
    const insertOperation = repository.insertOperation;
    const deleteOperation = repository.deleteOperation;

    // 초기 로드
    useEffect(() => {
        loadBlocks();
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
        const cachedBlocks = await getBlocks(spaceId);
        setBlocks(cachedBlocks);

        // 백그라운드에서 Supabase 동기화
        await syncFromSupabase();
        setIsLoading(false);
    }

    async function syncFromSupabase() {
        // Supabase에서 미처리 operations 가져오기
        const operations = await getOperations(spaceId);

        let currentBlocks = {...blocks};
        for (const op of operations) {
            currentBlocks = blockOperationService.applyOperation(currentBlocks, op);
        }

        setBlocks(currentBlocks);
    }

    function handleRealtimeOperation(payload: any) {
        const operation: IOperation = payload.new;

        setBlocks(prev =>
            blockOperationService.applyOperation(prev, operation)
        );
    }

    // Optimistic UI 업데이트
    async function executeOperation(operation: IOperation) {
        // 1. 즉시 UI 업데이트
        setBlocks(prev =>
            blockOperationService.applyOperation(prev, operation)
        );

        // 2. IndexedDB에 저장
        await insertOperation(spaceId, operation);

        // 3. Supabase에 전송 (백그라운드)
        try {
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
            await deleteOperation(spaceId, operation);
        } catch (error) {
            // 실패 시 IndexedDB에 남겨두고 나중에 재시도
            console.error('Failed to sync operation', error);
        }
    }

    return {
        blocks,
        isLoading,
        executeOperation
    };
}