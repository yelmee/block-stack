//
//
// const getNeedToUpdate =() => {
//     const blockList: BlockType = {}
//     const updateList  = []
//     for (const [key, value] of Object.entries(blockList)) {
//         if (value.last_updated < value.last_modified) {
//             updateList.push(key)
//         }
//     }
//     return updateList
// }
//
// const styleMap = {
//     b: "font-bold",
//     i: "italic",
//     s: "line-through",
//     c: "bg-gray-100 font-mono px-1 rounded text-sm",
// } as const;
//
// type StyleKey = keyof typeof styleMap;
// type ClassName = (typeof styleMap)[StyleKey];
//
// const reverseStyleMap: Record<ClassName, StyleKey> = Object.entries(styleMap).reduce(
//     (acc, [key, value]) => {
//         acc[value] = key as StyleKey;
//         return acc;
//     },
//     {} as Record<ClassName, StyleKey>
// );
//
// const getCSSStyle = (decorationText: DecorationType): Input =>{
//     const split =  decorationText
//     if(split.length === 1) {
//         return{
//             inputValue: split[0]
//         }
//     }
//     return {
//         inputValue: split[0],
//         style: getClassNames(split[1])
//     }
// }
//
//
// const getClassNames = (decorations: SubDecorationType[] ): string => {
//     return decorations
//         .map(([key]) => styleMap[key])
//         .filter(Boolean)
//         .join(" ");
// }
//
// const composeInputProperties = (keyEventValue: KeyBoardEvent, block: Block): Block =>{
//     let style = ""
//     let text= ""
//     let preSymbol= ""
//
//     return {
//
//     } as Block
//     // reverseStyleMap()
//     // return {
//     //     text, style,
//     // }
// }
//
// const splitInputProperties = (type: ColumnType, row: RowContentType[]): TextAreaType => {
//     const aa = []
//     if (type === 'text' && typeof row === 'object') {
//         for (const input of row as []) {
//             aa.push(getCSSStyle(input))
//         }
//
//         return {
//            input: aa
//         }
//     }
//
//     const checkbox = type === 'checkbox'  ?  {enable: true, property: row[0] as boolean } : undefined
//     const preSymbol = type === 'number' || type === 'relation' ? row[0] as any  : undefined
//     const texts = (row[1] as []).map(item => {
//         return getCSSStyle(item)
//     })
//     return {
//         input: texts,
//         checkbox,
//         preSymbol,
//     }
//     }
//
//
//
// export {getNeedToUpdate, getCSSStyle, splitInputProperties, composeInputProperties}