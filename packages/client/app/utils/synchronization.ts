// async function getTimeOffsetFromServer() {
//     const res = await fetch("/api/server-time"); // 서버는 정확한 UTC 시간 반환
//     const serverTime = await res.json(); // e.g., { serverTime: 1720000000000 }
//
//     const clientTime = Date.now();
//     const offset = serverTime - clientTime;
//
//     return offset;
// }