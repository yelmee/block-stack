// import type {
//     UseQueryResult
// } from "@tanstack/react-query";
// import type {
//     NoInfer
// } from "@tanstack/query-core";
// import type {
//     PostgrestSingleResponse
// } from "@supabase/supabase-js";
//
// export function handleErrors<T>(result: UseQueryResult<NoInfer<PostgrestSingleResponse<T>>>, getResult: (data: T)=> void) {
//     const {data: queryResult, error, refetch, isError} = result
//     if (error) {
//         console.log(error)
//         showDialog()
//         return
//     }
//
//     if (queryResult) {
//         const { data, error } = queryResult;
//         if (error) throw error
//
//         if (data && data instanceof Error) {
//             console.log(data.message)
//             showDialog()
//             return
//         }
//
//         if (data) {
//             getResult(data);
//         }
//     }
// }