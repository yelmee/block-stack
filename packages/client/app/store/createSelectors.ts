// import type {
//   UseBoundStore
// } from "zustand/react";
// import type {
//   StoreApi
// } from "zustand/vanilla";
//
// type WithSelectors<S> = S extends {
//   getState: () => infer T;
// }
//   ? S & { use: { [K in keyof T]: () => T[K] } }
//   : never;
//
// export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
//   _store: S,
// ) => {
//   // const _store = useSpaceStore
//   const store = _store as WithSelectors<typeof _store>;
//
//   store.use = {};
//
//   for (const k of Object.keys(store.getState())) {
//     (store.use as any)[k] = () =>
//       store((state) => state[k as keyof typeof state]);
//   }
//
//   return store;
// };
