export type traverseFolderOptionsType = {
    ignore?: Array<string>,
    deep?: boolean,
    isFlat?: boolean
}
export type fileTreeType = {
    path: string,
    label: string,
    isLeaf: boolean
    children?: Array<fileTreeType>
}