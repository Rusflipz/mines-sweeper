import { TArray } from '../typings/cells'

import { getRandomInt } from './getRandomInt'

export const setMines = (array: TArray, minesCount: number) => {
    for (let i = 0; i < minesCount;) {
        const a = getRandomInt(array.length)
        const b = getRandomInt(array[0].length)

        if (!array[a][b]?.mine && !array[a][b]?.isOpen) {

            array[a][b].mine = true
            i++
        }
    }
}