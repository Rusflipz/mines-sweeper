import { store } from '../store'
import { setIsOpen } from '../store/slice/aplication-slice'
import { TArray } from '../typings/cells'


export const openEmptyCell = (array: TArray, { row, col }: { row: number, col: number }) => {
    for (let i = row - 1; i < row + 2; i++) {
        for (let j = col - 1; j < col + 2; j++) {
            if (array[i] && array[i][j] && !array[i][j].isOpen && !array[i][j].mine) {
                store.dispatch(setIsOpen({ row: i, col: j }))
            }
        }
    }
}