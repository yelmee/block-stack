

export type ICommand = 'insert' | 'update' | 'remove'
export interface IOperation {
    command: ICommand
    pointer: IPointer
    path: string[],
    arg: {}
}



export type IPointer = string


