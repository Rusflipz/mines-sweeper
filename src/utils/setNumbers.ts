import { TArray, TCellInfo } from '../typings/cells'

export const setNumbers = (array: TArray) => {
    const numbersSum = (row: number, col: number) => {
        let count = 0

        for (let i = row - 1; i < row + 2; i++) {
            for (let j = col - 1; j < col + 2; j++) {
                if (array[i] !== undefined && array[i][j] !== undefined) {
                    array[i][j].row = i
                    array[i][j].col = j

                    if (array[i][j].mine) count++
                }
            }
        }

        return count
    }

    array.forEach((row: Array<TCellInfo>, i: number) => row.forEach((cell: TCellInfo, j: number) => {
        cell.number = numbersSum(i, j)
    }))
}