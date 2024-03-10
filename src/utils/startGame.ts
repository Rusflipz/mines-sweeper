import { gameSettings } from '../constants/constants'
import { TUseTimer } from '../hooks/use-timer'
import { store } from '../store'
import { closeModal, setArray, setGameLevel, setMinesLeft } from '../store/slice/aplication-slice'

import { initArea } from './initArea'
import { setNumbers } from './setNumbers'

export const startGame = (isFirsRender: boolean, timerControl: TUseTimer) => {
    const reduxState = store.getState()

    const isGameLevelInStorage = window.localStorage.getItem('gameLevel')
    const { gameLevel } = reduxState.application

    const currentGameLevel = isGameLevelInStorage || gameLevel

    // Костыль для избежания двойного вызова функций в StrictMode в dev режиме.
    if (isFirsRender) {
        timerControl.startTimer()
        const array = initArea(gameSettings[currentGameLevel].rows, gameSettings[currentGameLevel].cols)

        setNumbers(array)

        store.dispatch(setArray(array))
        store.dispatch(setMinesLeft(gameSettings[currentGameLevel].mines))
        store.dispatch(setGameLevel(currentGameLevel))
    }

    store.dispatch(closeModal())
}