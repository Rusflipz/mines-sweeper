import { gameSettings } from '../constants/constants'
import { store } from '../store'
import { setArray, setMinesLeft } from '../store/slice/aplication-slice'
import { TCellInfo } from '../typings/cells'
import { TGameSettings } from '../typings/game'

import { initArea } from './initArea'
import { setMines } from './setMines'
import { setNumbers } from './setNumbers'


export const initGame = ({ mines }: TGameSettings, cellInfo: TCellInfo) => {
    const reduxState = store.getState()

    const { gameLevel } = reduxState.application
    const array = initArea(gameSettings[gameLevel].rows, gameSettings[gameLevel].cols)

    array[cellInfo.row][cellInfo.col].isOpen = true

    setMines(array, mines)
    setNumbers(array)

    store.dispatch(setArray(array))
    store.dispatch(setMinesLeft(mines))
}