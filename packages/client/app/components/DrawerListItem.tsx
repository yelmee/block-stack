//
// export default function DrawerListItem(props: {
//     space: SpaceType
//   isOpen: boolean;
// }) {
//   return (
//     <div className="flex justify-between h-1">
//         <Text
//             onClick={()=>openSpace(props.space.id)}
//             text={props.space.title || ''} />
//         <div
//             className={"flex "}>
//             <Icon
//                 onClick={()=> openSpaceSettingModal(props.space.id)}
//                 name={"more_horiz"}/>
//
//         </div>
//     </div>
//   );
// }
//
// let navigate = useNavigate();
//
// const openSpace = (spaceId: string) => {
//     redirect(`/${spaceId}`)
// }
//
// const user = useBoundStore.user();
//
//
// export function openNewSpaceModal (){
//     if(!user) return
//
//      handleErrors<SpaceType[] | never>(addSpace(user.id), (data)=>{
//         redirect(`/${data[0].id}`);
//     })
//
// }
//
//
