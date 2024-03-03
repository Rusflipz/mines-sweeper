import { TCellInfo } from '../typings/cells'

export const initArea = (rows: number, cols: number) => Array.from(new Array(rows), () => Array.from(new Array(cols), (): TCellInfo => ({
    number: null,
    mine: false,
    isOpen: false,
    flagged: false,
    row: null,
    col: null,
})))