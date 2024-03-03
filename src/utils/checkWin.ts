import { PlayFunction } from 'use-sound/dist/types'

import { gameSettings } from '../constants/constants'
import { store } from '../store'
import { setIsGameWin, setMinesLeft } from '../store/slice/aplication-slice'
import { TCellInfo } from '../typings/cells'

export const checkWin = (playWinSound: PlayFunction) => {
    const reduxState = store.getState()

    const { array, gameLevel } = reduxState.application

    let countFlags = 0
    let countFlaggedMines = 0
    let countClosedCells = 0

    array.forEach((row: Array<TCellInfo>, i: number) => row.forEach((_cell: TCellInfo, j: number) => {
        if (array[i][j].mine && array[i][j].flagged) {
            countFlaggedMines++
        }

        if (!array[i][j].isOpen && !array[i][j].flagged) {
            countClosedCells++
        }

        if (!array[i][j].isOpen && array[i][j].flagged) {
            countFlags++
        }
    }))

    store.dispatch((setMinesLeft(gameSettings[gameLevel].mines - countFlags)))

    if (countFlaggedMines === gameSettings[gameLevel].mines &&
        countClosedCells === 0 &&
        countFlags === gameSettings[gameLevel].mines) {
        store.dispatch((setIsGameWin(true)))
        playWinSound()
    }
}