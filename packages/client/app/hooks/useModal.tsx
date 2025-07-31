// type EditModalType = {key: string, text: string}
// // const EditModalList: EditModalType[] = [
// //     {key: "space_delete", text: "페이지 삭제"},
// //     {key: "space_edit_title", text: "페이지 이름 바꾸기"},
// // ]

// export function openSpaceSettingModal (spaceId: string){
//     return (
//         <Modal domNode={document.body}>
//             {
//                 EditModalList.map((modal) => {
//                     return (
//                         <div onClick={()=> handleModal(modal.key, spaceId)}>
//                     {modal.text}
//                     </div>
//                 )
//                 })
//             }
//             </Modal>
//     );
// }



// const handleModal = (key: EditModalType['key'], spaceId: string) => {
//     if(!spaceId) return
//     switch (key) {
//         case "space_delete":
//             handleErrors<null | never>(deleteSpace(spaceId), (data)=>{
//
//             })
//
//             break
//         case "space_edit_title":
//             const space = {title:'' , id: spaceId, created_by: 'userId'}
//             handleErrors<null | never>(updateSpace(space), (data)=>{
//
//             })
//
//             break
//     }
// }

