import { store } from '../store'
import { setArray, setMinesLeft } from '../store/slice/aplication-slice'
import { TGameSettings } from '../typings/game'

import { initArea } from './initArea'
import { setMines } from './setMines'
import { setNumbers } from './setNumbers'


export const initGame = ({ rows, cols, mines }: TGameSettings) => {
    const array = initArea(rows, cols)

    setMines(array, mines)
    setNumbers(array)

    store.dispatch(setArray(array))
    store.dispatch(setMinesLeft(mines))
}