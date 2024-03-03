export type TArray = Array<Array<TCellInfo>>

export type TCellInfo = {
    number: number,
    mine: boolean,
    isOpen: boolean,
    flagged: boolean,
    row: number,
    col: number
}