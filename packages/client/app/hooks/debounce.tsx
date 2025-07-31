// import { useCallback, useRef } from "react";
//
// export const useDebounce = (fn: () => void) => {
//   const INTERVAL = 1000;
//   const timeRef = useRef(false);
//
//   const fetchIfIntervalChecked = setInterval(() => {
//     if (timeRef.current) {
//       timeRef.current = false;
//       clearInterval(this);
//
//       return;
//     }
//     timeRef.current = true;
//
//     fn();
//   }, INTERVAL);
//
//   const debounce = useCallback(() => fetchIfIntervalChecked, []);
//
//   return { debounce };
// };
