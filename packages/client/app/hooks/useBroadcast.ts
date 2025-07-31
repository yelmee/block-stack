// import { useEffect, useState } from "react";
// import { RealtimeChannel } from "@supabase/supabase-js";
//
//
// export const useBroadcast =  () => {
//   const [myChannel, setMyChannel] = useState<RealtimeChannel | null>(null);
//
//   const gameId = 'id'
//    supabase.realtime.setAuth() // Needed for Realtime Authorization
//   useEffect(() => {
//     if(!myChannel) return
//         myChannel
//         .on('useBroadcast', { event: 'INSERT' }, (payload) => console.log(payload))
//         .on('useBroadcast', { event: 'UPDATE' }, (payload) => console.log(payload))
//         .on('useBroadcast', { event: 'DELETE' }, (payload) => console.log(payload))
//         .subscribe()
//   }, []);
//
//   // 'notion-project-id'
//   const createMyChannel = (channelName: string) => {
//     if (!checkChannelExist(channelName)) {
//       const newChannel = supabase
//           .channel(`topic:${gameId}`, {
//             config: { private: true },
//           })
//
//       setMyChannel(newChannel);
//     }
//   };
//
//   const messageReceived = (payload: any) => {
//     if (checkSpaceVersion(payload)) {
//       updateSpaceQuery();
//       rerendering();
//     }
//   };
//
//   // const sendMessageToMyChannel = () => {
//   //   if (!myChannel) return;
//   //   /**
//   //    * Sending a message after subscribing will use Websockets
//   //    */
//   //   myChannel.subscribe((status) => {
//   //     if (status !== "SUBSCRIBED") {
//   //       return null;
//   //     }
//   //
//   //     myChannel.send({
//   //       type: "useBroadcast",
//   //       event: "shout",
//   //       payload: { message: "Hi" },
//   //     });
//   //   });
//   // };
//
//   const subscribeChannel = (dd: string) => {
//     useEffect(() => {
//       const changes = supabase
//         .channel("schema-db-changes")
//         .on(
//           "postgres_changes",
//           {
//             event: "*",
//             schema: "public",
//             table: "content_in_block",
//             filter: "block_id=eq.1",
//           },
//           (payload) => console.log(payload),
//         )
//         .subscribe();
//     });
//   };
//
//   return {
//     createMyChannel,
//     messageReceived,
//     // sendMessageToMyChannel,
//     subscribeChannel,
//   };
// };
