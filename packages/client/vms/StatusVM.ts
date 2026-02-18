
const SyncStatus = {
    Sync: "Sync",
    Pending: "Pending",
    Failed: "Failed"
}

type SyncSuccessStatus = {
    date: "2021-01-01 00:00:00",
    successQueueRange: {
        id: string,
        operationType: "UPDATE" | "CREATE" | "DELETE"
    }[],
    failQueueRange: {
        id: string,
        operationType: "UPDATE" | "CREATE" | "DELETE"
    }[]
}
type SyncFailPanel = SyncFailStatus & SyncRetryCount & SyncConflictSolve

type SyncConflictSolve =  "MERGE" | "MAINTAIN" | "ABSORPTION"
type SyncFailStatus = "operation_merge_error" | "network_connect_error" | "server_retry_error"
type SyncRetryCount = number